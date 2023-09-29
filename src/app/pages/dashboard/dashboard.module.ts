import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeadpanelComponent } from './layout/headpanel/headpanel.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { HomeComponent } from './modules/home/home.component';
import { MainpanelComponent } from './layout/mainpanel/mainpanel.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PagetitleComponent } from './layout/pagetitle/pagetitle.component';
import { PagebodyComponent } from './layout/pagebody/pagebody.component';
import { ModuleViewComponent } from './components/module-view/module-view.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../../shared/shared.module";
import { ModuleOptionComponent } from './layout/side-menu/components/module-option/module-option.component';
import { ModuleCardMenuComponent } from './components/module-card-menu/module-card-menu.component';

@NgModule({
  declarations: [
    // root component
    DashboardComponent,
    // layout components (components that live outer the router view)
    HeadpanelComponent,
    SideMenuComponent,
    MainpanelComponent,
    BreadcrumbComponent,
    FooterComponent,
    PagetitleComponent,
    PagebodyComponent,
    HomeComponent,
    // components that use generated content
    ModuleViewComponent,
    ModuleOptionComponent,
    ModuleCardMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DashboardModule { }
