import { FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { IControl } from "src/app/shared/components/json-form/interfaces/IControl.interface";
import { IJsonFormGroup } from "src/app/shared/components/json-form/interfaces/IJsonFormGroup.interface";

/**
 * The neccesary building blocks for creating a form using the data that comes from the backend.
 */
export abstract class GeneratedForm {
  abstract generateFormGroup(jsonFormControls: IJsonFormGroup['formControls']): FormGroup
  
  generateValidators(validatorNames: IControl['validators'] = [], attributes: IControl['attributes']): ValidatorFn[] {
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
}