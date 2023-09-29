import { IStyleRules } from "../../../../../shared-interfaces/IStyleRules.interface";

export interface IControl<T = any> {
  name: string;
  tag?: 'input' | 'select' | 'textarea' | 'button';
  label?: string;
  /**
   * the text to show inside a button when tag is 'button'
   */
  content?: string;
  /**
   * this array of controls refers to what gets asked again in a form (could be only one control, or more)
   */
  form_array_controls?: Array<IControl>;
  style_rules?: IStyleRules;
  is_form_array?: true;
  attributes?: {
    type?: 'text' | 'radio' | 'checkbox' | 'number' | 'tel' | 'date' | 'email' | 'url' | 'search' | 'password';
    placeholder?: string;
    /**
     * regex pattern as a string
     */
    pattern?: string;
    required?: true;
    disabled?: true;
    /**
     * the default value to place in a control, for example an input that's already filled out
     */
    value?: string | number | boolean | Object;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  },
  validators?: Array<'required' | 'requiredTrue' | 'minLength' | 'maxLength' | 'min' | 'max' | 'pattern' | 'email' | 'nullValidator' | 'compose' | 'composeAsync'>; // https://angular.io/api/forms/Validators#validators
  /**
   * data to fill the form control
   */
  data?: Array<T>;
  /**
   * method to execute (in the case of a button)
   */
  action?: string;
  /**
   * must be the name of a form control (this is for external controls that execute actions and fill another control)
   */
  fills?: string;
  /**
   * button that appears to the right side of the control
   */
  buttonGroup?: 'add' | 'search';
  /**
   * button that appears to the left side of the control, usually used to specify units (like USD, BS, etc)
   */
  buttonLabel?: {
    icon?: string;
    content?: string;
  }
}