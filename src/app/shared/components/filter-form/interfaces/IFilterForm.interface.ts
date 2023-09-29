import { IStyleRules } from "src/shared-interfaces/IStyleRules.interface";
import { IJsonForm } from "../../json-form/interfaces/IJsonForm.interface";

export interface IFilterForm {
  id: number;
  name: string;
  styleRules?: Pick<IStyleRules, 'icon'>;
  /**
   * can be empty (usually when IFilterForm has children)
   */
  form: IJsonForm | null;
  childrenFilterForms: IFilterForm[];
}