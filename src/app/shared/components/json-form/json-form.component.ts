import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IControl } from './interfaces/IControl.interface';
import { IJsonForm } from './interfaces/IJsonForm.interface';
import { IJsonFormControl } from './interfaces/IJsonFormControl.interface';
import { IJsonFormGroup } from './interfaces/IJsonFormGroup.interface';

/**
 * This component creates a form in a certain format, all it needs is a IJsonForm object and a formEndpointURL.
 */
@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent implements OnInit {
  /**
   * Form coming from the backend
   */
  @Input() jsonForm!: IJsonForm;
  /**
   * Methods to call within this form component to alter values (still in early stages of development)
   */
  @Input() formMethods!: {[control_name: string]: () => Promise<any>} | null;
  @Input() formEndpointURL!: string;

  public form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  /**
   * Initialize form groups from the given jsonForm format
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      formGroups: this.fb.array(
        // return an array of form groups
        this.jsonForm.formGroups.map((jsonForm) => this.generateFormGroup(jsonForm.formControls))
      )
    });

    console.log('form methods', this.formMethods);
  }

  /**
   * Get list of FormGroup that resides within our main FormArray
   */
  get innerFormGroups(): FormGroup[] {
    const formArray = this.form.get('formGroups') as FormArray; // FormArray that contains every FormGroup that makes up the entire form
    return formArray.controls as FormGroup[]
  }

  /**
   * Adds a new form group from a control that has the property 'form_array_controls'
   * @param formGroupIndex index for this.jsonForm.formGroups and this.innerFormGroups
   * @param formArrayName in actuality the name for the control that holds a FormArray
   * @param formControlIndex index for this.jsonForm.formGroups[...].controls (controls should have the property form_array_controls)
   */
  public addFormGroupToFormArray(formGroupIndex: number, formArrayName: string, formControlIndex: number): void {
    // get FormArray for the specified control
    let dinamicFormArray = this.innerFormGroups[formGroupIndex].controls[formArrayName] as FormArray;

    // get the base control from the json form in order to generate a fresh FormGroup to insert into our FormArray
    let formArrayControl = this.jsonForm.formGroups[formGroupIndex].formControls[formControlIndex];
    let virtualControls: IJsonFormControl[] = formArrayControl.control.form_array_controls!.map((control, index) => (
      {
        id: 0,
        order: ++index,
        description: null,
        control,
        dataSource: null
      }
    ));
    let newFormGroup = this.generateFormGroup(virtualControls)

    // insert fresh FormGroup
    dinamicFormArray.push(newFormGroup);
  }

  /**
   * Get the list of FormGroup that resides within a dinamic control (a control that came from the backend with the property form_array_controls)
   * @param index 
   * @param formArrayName 
   * @returns 
   */
  public getFormArrayFormGroups(index: number, formArrayName: string): FormGroup[] {
    let formArray = this.innerFormGroups[index].controls[formArrayName] as FormArray;
    return formArray.controls as FormGroup[];
  }

  /**
   * Generate and return a form group (or form array) given the controls defined by the json format
   * @param jsonFormControls controls declared in json format
   * @returns newly generated FormGroup
   */
  private generateFormGroup(jsonFormControls: IJsonFormGroup['formControls']): FormGroup {
    let group: any = {};
    for (let formControl of jsonFormControls) {
      // if control is a FormArray return a FormArray
      if (formControl.control.is_form_array) { // form_array holds the controls

        let innerGroup: any = {}
        for (let control of formControl.control.form_array_controls!) {
          let initialValue = this.generateInitialValue(control);
          let customValidators = this.generateValidators(control.validators, control.attributes);
          let newControl = new FormControl(initialValue, customValidators);
          
          if (control.attributes?.disabled) newControl.disable();
          
          innerGroup[control.name] = newControl;
        }
        group[formControl.control.name] = this.fb.array([this.fb.group(innerGroup)])
        
        // I wanted to do it recusively...
        // group[formControl.control.name] = this.fb.array([this.generateFormGroup(formControl.control.form_array_controls!)]); // run it recursively
      
      } else {
        let initialValue = this.generateInitialValue(formControl.control);
        let customValidators = this.generateValidators(formControl.control.validators, formControl.control.attributes);
        let newControl = new FormControl(initialValue, customValidators);
        
        if (formControl.control.attributes?.disabled) newControl.disable();
        
        group[formControl.control.name] = newControl;
      }
    }

    return this.fb.group(group);
  }
  
  /**
   * Generate the initial value for the control
   * @param control 
   * @returns 
   */
  private generateInitialValue(control: IControl): any | null {
    if (control.attributes?.value) return control.attributes?.value;
    return null; // anything else should be null
  }

  /**
   * Generate an array of Validators
   * @param validatorNames 
   * @returns empty array if validatorNames doesn't exist, otherwise an array of Validators
   */
  private generateValidators(validatorNames: IControl['validators'] = [], attributes: IControl['attributes']): ValidatorFn[] {
    return validatorNames.map((validatorName) => {
      switch (validatorName) {
        case 'minLength':
          return Validators.minLength(attributes!.minLength!);
        case 'maxLength':
          return Validators.maxLength(attributes!.maxLength!);
        case 'min':
          return Validators.min(attributes!.min!);
        case 'max':
          return Validators.max(attributes!.max!);
        case 'pattern':
          return Validators.pattern(attributes!.pattern!);
        default:
          // for validators that don't have an argument, just using the validatorName as a key is fine
          return Validators[validatorName]
      }
    }) as ValidatorFn[];
  }

  /**
   * Reset the input values of all form groups
   */
  public resetForm(): void {
    this.form.reset();
  }

  /**
   * Send form data to API
   */
  public submit(): void {
    if (this.form.valid) {
      console.log('form is not valid!');
      return;
    }

    console.log('data to send to api', this.form.value);
    // here we would send the data to an api (or rather, emit an event to the parent component to "submit" the values we pass to it)
    // this.apiClientService.http.post(this.formEndpointURL, this.form.value)
  }

  public test() {
    console.log(this.form.value);
  }
}
