import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IModule } from 'src/app/core/interfaces/IModule.interface';
import { EncryptionService } from 'src/app/core/services/encryption.service';

@Component({
  selector: 'app-module-card-menu',
  templateUrl: './module-card-menu.component.html'
})
export class ModuleCardMenuComponent implements OnInit {
  @Input() modules!: IModule[];

  constructor(
    private route: ActivatedRoute,
    private encryptionService: EncryptionService
  ) { }
  
  ngOnInit() {
    // get modules from parameter
    const ciphertext = this.route.snapshot.queryParamMap.get('module')!;
    let decryptedModule = this.encryptionService.decryptRouteParameter<IModule>(ciphertext);
    this.modules = decryptedModule.childrenModules;
  }

  /**
   * Return the modules that only have a route that should lead to content, for example a module that only has children (basically a dropdown menu) shouldn't be
   * displayed as an element that can lead to a page when a user clicks on it
   * @param modules 
   * @returns modules that only have a route that should lead to content
   */
  public getOnlyModulesWithRoutes(modules: IModule[] = this.modules): IModule[] {
    let routeModules: IModule[] = [];

    for (let module of modules) {
      if (module.route) {
        routeModules.push(module);
      }
      else {
        let childrenRouteModules = this.getOnlyModulesWithRoutes(module.childrenModules);
        routeModules = routeModules.concat(childrenRouteModules);
      }
    }

    return routeModules;
  }
}
