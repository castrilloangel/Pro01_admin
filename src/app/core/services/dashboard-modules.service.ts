import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IModule } from '../interfaces/IModule.interface';

/**
 * This service is responsible for storing the context of our application when traversing between modules 
 * within the dashboard, it stores data neccesary across components that display the current module's info.
 * It stores as well the entirety of the user's modules (array of modules).
 */
@Injectable()
export class DashboardModulesService {
  public modules!: IModule[];
  public currentModule!: IModule;
  private currentModuleSubject = new BehaviorSubject<IModule>(this.currentModule);

  /**
   * Initialize this service's values
   * @param modules 
   */
  public init(modules: IModule[]) {
    this.modules = modules;
  }

  /**
   * Define where the current user is situated.
   * @param module
   */
  public setCurrentModule(module: IModule) {
    this.currentModule = module;
    this.currentModuleSubject.next(this.currentModule);
  }

  /**
   * Get the observable for when the current module changes
   * @returns 
   */
   public getCurrentModuleObservable() {
    return this.currentModuleSubject.asObservable();
  }

  /**
   * Get an array of modules that describes the path for the module with an id equal to the 
   * currentModuleId value we pass it
   * @param modules 
   * @param currentModuleId
   * @param parent
   * @returns 
   */
  public getPathOfModulesById(currentModuleId: number, modules: IModule[] = this.modules, parents: IModule[] = []): IModule[] | null {
    for (let module of modules) {
      if (module.id === currentModuleId) return [...parents, module];

      if (module.childrenModules.length > 0) {
        const found = this.getPathOfModulesById(currentModuleId, module.childrenModules, [...parents, module]);
        if (found) return found;
      }
    }

    return null; // if it reaches this point, currentModuleId didn't match any module
  }
}
