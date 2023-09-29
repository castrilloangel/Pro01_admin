import { IJsonFormControl } from "./IJsonFormControl.interface";
import { IStyleRules } from "../../../../../shared-interfaces/IStyleRules.interface";

export interface IJsonFormGroup {
  id: number;
  name: string | null;
  order: number;
  formControls: Array<IJsonFormControl>;
  styleRules: IStyleRules | null;
}