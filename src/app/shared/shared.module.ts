import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { JsonFormComponent } from './components/json-form/json-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DynamicControlComponent } from './components/json-form/components/dynamic-control/dynamic-control.component';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { TabsComponent } from './components/filter-form/tabs/tabs.component';
import { TabComponent } from './components/filter-form/tabs/tab.component';



@NgModule({
  declarations: [
    DataTableComponent,
    JsonFormComponent,
    DynamicControlComponent,
    FilterFormComponent,
    TabsComponent,
    TabComponent,
    ActionButtonsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    DataTableComponent,
    JsonFormComponent,
    FilterFormComponent,
    ActionButtonsComponent
  ]
})
export class SharedModule { }
