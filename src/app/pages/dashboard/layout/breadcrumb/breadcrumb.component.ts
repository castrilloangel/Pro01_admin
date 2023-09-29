import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <div class="sh-breadcrumb">
      <nav class="breadcrumb">
        <ng-content></ng-content>
      </nav>
    </div>
  `
})
export class BreadcrumbComponent {}
