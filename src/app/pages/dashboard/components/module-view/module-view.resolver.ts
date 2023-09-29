import { inject, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { handleServerErrorResponse } from 'src/utils/handle-server-error-response';
import { getMockModuleContent } from 'src/mock-data/module-content';
import { IContentBlock } from 'src/shared-interfaces/IContentBlock.interface';
import { IModule } from '../../../../core/interfaces/IModule.interface';
import { ApiClientService } from '../../../../core/services/api-client.service';
import { DashboardModulesService } from '../../../../core/services/dashboard-modules.service';

export const moduleViewResolver: ResolveFn<IContentBlock[] | void> = async (route: ActivatedRouteSnapshot) => {
  // get services
  const router = inject(Router);
  const apiClientService = inject(ApiClientService);
  const dashboardModulesService = inject(DashboardModulesService);
  
  // get route data in order to get the neccesary info to fetch content
  const module = route.data['module'] as IModule;
  const contentRoute = module.contentRoute!;

  if (isDevMode()) {
    try {
      let res = await getMockModuleContent(contentRoute);
      dashboardModulesService.setCurrentModule(module);
      return res.data;
    } catch (error: any) {
      console.error(error);
      handleServerErrorResponse(error.request.status, router); // redirect
      return;
    }
  } else {
    try {
      let res = await apiClientService.http.get(contentRoute);
      dashboardModulesService.setCurrentModule(module);
      return res.data as IContentBlock[];
    } catch (error: any) {
      console.error(error);
      handleServerErrorResponse(error.request.status, router); // redirect
      return;
    }
  }
};