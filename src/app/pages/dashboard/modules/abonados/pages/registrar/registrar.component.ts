import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/core/services/api-client.service';
import { IJsonForm } from 'src/app/shared/components/json-form/interfaces/IJsonForm.interface';
import { IJsonFormGroup } from 'src/app/shared/components/json-form/interfaces/IJsonFormGroup.interface';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  public jsonForm: IJsonForm | undefined;
  public formMethods: {
    [control_name: string]: () => Promise<any>
  } | null = null;

  constructor(private apiClientService: ApiClientService) { }

  ngOnInit(): void {
    // fetch form to display on dashboard
    this.apiClientService.http.get('/forms/abonado-registro')
      .then((res) => {
        this.jsonForm = res.data;
        console.log('/forms/abonado-registro response', this.jsonForm);
        
        this.formMethods = this.getCustomMethods(this.jsonForm!.formGroups);
      });
  }

  /**
   * Callback function that is used on a button
   * @param control 
   */
  public async openGoogleMap(): Promise<string> {
    // open google map, when user selects address fill data into specified control
    return 'result is XXXXXXX'
  }

  /**
   * Given a json form, build an indexable object whose key is the name of the control and the value
   * is the function it should call.
   * E.g: form has a FormGroup that has a control which is a button, the role of this button is to use a third party function/API 
   * and given the result of that function fill another control. Consider this case, we have an address field which can be either 
   * filled using the control(<input>) itself or using a button that opens a google map, when a user clicks on the map the address 
   * value gets returned, and then that value is used to fill the control, in this case the function that opens the map is the callback
   * while the filling is done after the callback is done
   * @param formGroups 
   * @returns object containing methods to be used inside the form
   */
  private getCustomMethods(formGroups: IJsonFormGroup[]): {[control_name: string]: () => Promise<any>} | null {
    // declare object with methods (formMethods = customMethods) that affect the form's state
    let customMethods: any = {};
    for (let formGroup of formGroups) {
      // get only controls that have an action or form array with controls that could possibly have actions
      let relevantControls = formGroup.formControls.filter((formControl) => formControl.control.action || formControl.control.is_form_array);
      if (relevantControls.length === 0) continue;

      for (let formControl of relevantControls) {
        if (formControl.control.is_form_array) { // control is a form array
          let controls = formControl.control.form_array_controls!.filter((control) => control.action !== undefined);
          if (controls.length > 0) {
            // populate customMethods with client defined methods
            let classMethod = this[formControl.control.action as keyof RegistrarComponent];
            customMethods[formControl.control.name] = classMethod || null
            
            if (!classMethod) { // unknown action
              console.log(`this form does not recognize the '${formControl.control.action}' action for the control '${formControl.control.name}'`)
            }
          }
        } else { // just a regular control
          let classMethod = this[formControl.control.action as keyof RegistrarComponent];
          customMethods[formControl.control.name] = classMethod || null
          
          if (!classMethod) { // unknown action
            console.log(`this form does not recognize the '${formControl.control.action}' action for the control '${formControl.control.name}'`)
          }
        }
      }
    }

    // give formMethods a value if customMethods was filled, otherwise keep it as undefined
    if(Object.keys(customMethods).length > 0) {
      return customMethods;
    } else {
      return null;
    }
  }
}
