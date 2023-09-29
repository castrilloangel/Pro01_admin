import { Injectable, isDevMode } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { getMockUserPublicInfo } from 'src/mock-data/user';
import { IModule } from '../core/interfaces/IModule.interface';
import { IUser } from '../core/interfaces/IUser.interface';
import { AuthService } from '../core/services/auth.service';
import { DashboardModulesService } from '../core/services/dashboard-modules.service';
import { ModuleViewComponent } from '../pages/dashboard/components/module-view/module-view.component';
import { moduleViewResolver } from '../pages/dashboard/components/module-view/module-view.resolver';
import { handleServerErrorResponse } from '../../utils/handle-server-error-response';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(
    private router: Router,
    private authService: AuthService,
    private dashboardModulesService: DashboardModulesService
  ) { }

  /**
   * Sets the values for every service that involves user data.
   * @returns 
   */
  public async loadConfigurationData(): Promise<void> {
    let user: IUser;

    // attempt session retrieval
    try {
      if (isDevMode()) {
        // in dev mode the user will always exist, not convenient if you want to test user authentication
        let res = await getMockUserPublicInfo();
        user = res.data;
      } else {
        user = await this.authService.getUserSession();
      }
    }
    catch(error: any) {
      handleServerErrorResponse(error.request.status, this.router);
      return;
    }

    // user could retrieve session safely
    console.log('user session resumed');

    /*------------ initialize service's values -------------*/
    // take the user object and split data into their services
    if(user.modules.length > 0) {
      this.dashboardModulesService.init(user.modules);
      try {
        this.loadAditionalRoutes(user.modules, 'dashboard'); // CAUTION, this function CAN throw an error, so handle appropiately
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('user has no modules');
    }
    /*-------------------------------------------------------*/
  }

  /**
   * Recursive function that returns routes generated from an API for a certain user.
   * @param userModules 
   * @returns the returned routes are defined as { path: module.route, component: ModuleViewComponent, title: `Admin ISPV1 - ${module.name}`, data: { module } }.
   * The "data" property passes on the module object that should be used to perform operations, like fetch the data for that module, etc. 
   */
  private getNewRoutes(userModules: IModule[]): Routes {
    let userModulesRoutes: Routes = [];

    for (let module of userModules) {
      // virtually this shouldn't occur, but just in case (a module that isn't a dropdown or isn't a standalone module would be nothing more than a decoration)
      if (!module.route && module.childrenModules.length === 0) continue;

      // add normal route
      if (module.route) {
        userModulesRoutes.push({
          path: module.route,
          component: ModuleViewComponent,
          title: `Admin ISPV1 - ${module.name}`,
          data: { module }, // pass the module (holds info about how to retrieve module data and what children or parent modules they have)
          resolve: { // resolver used to fetch data before switching routes
            contentBlocks: moduleViewResolver
          }
        });
      }

      // if it has children modules, add the children routes
      if (module.childrenModules.length > 0) {
        userModulesRoutes = userModulesRoutes.concat(this.getNewRoutes(module.childrenModules));
      }
    }

    return userModulesRoutes;
  }

  /**
   * Create and load routes defined from modules that come from the backend
   * @param userModules 
   * @param basePath the base path where the children routes should be defined
   */
  private loadAditionalRoutes(userModules: IModule[], basePath?: string): void | never {
    const dashboardIndex = this.router.config.findIndex((route) => route.path === basePath);
    if (dashboardIndex === -1) throw new Error(`Could not find a base path with the value of '${basePath}'`);
    const userModulesRoutes = this.getNewRoutes(userModules);
    this.router.config[dashboardIndex].children?.unshift(...userModulesRoutes);
  }
}
