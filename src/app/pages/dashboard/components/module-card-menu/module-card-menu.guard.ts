import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { IModule } from '../../../../core/interfaces/IModule.interface';
import { DashboardModulesService } from '../../../../core/services/dashboard-modules.service';
import { EncryptionService } from '../../../../core/services/encryption.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleCardMenuGuard implements CanActivate {
  constructor(
    private router: Router,
    private dashboardModulesService: DashboardModulesService,
    private encryptionService: EncryptionService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const cypheredModule: string = route.queryParams['module'];

    // if user is trying to access this route without the data
    if (!cypheredModule || cypheredModule.trim().length === 0) {
      this.router.navigate(['/error'], { queryParams: { status_code: 403 }});
      return false;
    }

    try {
      const module = this.encryptionService.decryptRouteParameter<IModule>(cypheredModule); // if a value that wasn't encrypted is passed, an error will the thrown
      this.dashboardModulesService.setCurrentModule(module);
      return true;
    } catch (error) {
      console.error(error);
      this.router.navigate(['/error'], { queryParams: { status_code: 403 }});
      return false;
    }
  }
}
