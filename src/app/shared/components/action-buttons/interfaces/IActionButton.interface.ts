import { IStyleRules } from "src/shared-interfaces/IStyleRules.interface";

export interface IActionButton {
  id: number;
  description?: string;
  order: number;
  /**
   * function name that should be called in the component
   */
  action: string;
  styleRules?: Pick<IStyleRules, 'icon'>;
  button: Object; // format isn't set yet
}