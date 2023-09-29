import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IActionButton } from './interfaces/IActionButton.interface';

// LOGIC FOR THIS COMPONENT IS A WORK IN PROGRESS, WE'LL SEE LATER HOW IT SHOULD WORK
/**
 * In this component, we define lots and lots of functions for our actions buttons to call, we define the names here and the database should add an action
 * value that matches a function here.
 * The idea is that we define all the functions here and pass them to the parent component using an event emitter, the function we pass on should be treated 
 * as a callback function essentially
 */
@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent {
  @Input() buttons!: IActionButton[];
  @Output() onAction = new EventEmitter<{ params: any[], function: Function }>(); // the idea is that we dei

  /**
   * Send the function defined in this component to the parent.
   * @param functionName 
   */
  public emitActionToParent(params: any[], functionName: keyof ActionButtonsComponent): void {
    this.onAction.emit({ params, function: this[functionName] as Function });
  }

  private submitForm(): void {

  }

  private resetForm(): void {

  }
}
