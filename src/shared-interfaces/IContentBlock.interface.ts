import { IActionButton } from "src/app/shared/components/action-buttons/interfaces/IActionButton.interface";
import { IFilterForm } from "src/app/shared/components/filter-form/interfaces/IFilterForm.interface";
import { IJsonForm } from "src/app/shared/components/json-form/interfaces/IJsonForm.interface";

export enum ContentBlockType {
  FORM = 'form',
  ACTION_BUTTONS = 'action buttons',
  TABLE = 'table',
  FILTER_FORM = 'filter form'
}

export interface IContentBlock {
  id: number;
  title?: string;
  order: number;
  /**
   * defines the format that should be used in the template
   */
  type: ContentBlockType;
  /**
   * empty if content type is not FORM
   */
  forms: IJsonForm[];
  /**
   * empty if content type is not FILTER_FORM
   */
  filterForms: IFilterForm[];
  /**
   * empty if content type is not ACTION_BUTTONS
   */
  actionButtons: IActionButton[];
  tables: Array<any>; // interface for tables is not settled yet
}