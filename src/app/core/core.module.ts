import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { DashboardModulesService } from './services/dashboard-modules.service';
import { ApiClientService } from './services/api-client.service';
import { EncryptionService } from './services/encryption.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiClientService,
    AuthService,
    DashboardModulesService,
    EncryptionService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule ){
    if (core) {
      throw new Error("You should import core module only in the root module");
    }
  }
}
