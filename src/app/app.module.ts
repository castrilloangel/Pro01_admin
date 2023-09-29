import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ConfigurationService } from './services/configuration.service';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HttpErrorComponent } from './pages/http-error/http-error.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';

export function initializeApp(configurationService: ConfigurationService) {
  return () => configurationService.loadConfigurationData();
}

@NgModule({
  declarations: [
    AppComponent,
    // route views (root pages)
    SigninComponent,
    SignupComponent,
    HttpErrorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CoreModule, // shared services that live across components
    AppRoutingModule,
    DashboardModule
  ],
  providers: [
    ConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigurationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
