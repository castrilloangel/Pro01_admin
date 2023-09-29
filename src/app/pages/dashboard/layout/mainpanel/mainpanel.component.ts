import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpanel',
  template: `
    <div class="sh-mainpanel">
      <ng-content></ng-content>
    </div>
  `
})
export class MainpanelComponent {}
