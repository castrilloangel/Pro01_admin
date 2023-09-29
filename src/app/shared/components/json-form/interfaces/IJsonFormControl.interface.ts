import { IControl } from "./IControl.interface";
import { IStyleRules } from "../../../../../shared-interfaces/IStyleRules.interface";

export interface IJsonFormControl {
  id: number;
  description: string | null;
  /**
   * order for the control (1 would mean it's the first element in the form)
   */
  order: number;
  styleRules?: IStyleRules;
  control: IControl;
  dataSource: string | null;
}