import { Component, OnInit } from '@angular/core';
import { IModule } from 'src/app/core/interfaces/IModule.interface';
import { DashboardModulesService } from 'src/app/core/services/dashboard-modules.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public breadcrumb: string[] = [];
  public pagetitleIcon: string = '';

  constructor(private dashboardModulesService: DashboardModulesService) { }

  ngOnInit(): void {
    // look for changes in the current module and adjust the view accordingly
    this.dashboardModulesService.getCurrentModuleObservable().subscribe((currentModule) => {
      const pathOfModules = this.dashboardModulesService.getPathOfModulesById(currentModule.id)!;
      this.updateView(pathOfModules);
    });
  }

  private updateView(pathOfModules: IModule[]): void {    
    // update breadcrumb
    this.breadcrumb = pathOfModules.map((module) => module.name);
    
    // update pagetitle icon
    for (let i = pathOfModules.length - 1; i >= 0; i--) {
      if (pathOfModules[i].styleRules && pathOfModules[i].styleRules!.icon) {
        this.pagetitleIcon = pathOfModules[i].styleRules!.icon!;
        break;
      }
    }
  }
}
