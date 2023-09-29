import { isDevMode, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ModuleCardMenuGuard } from './pages/dashboard/components/module-card-menu/module-card-menu.guard';
import { ModuleCardMenuComponent } from './pages/dashboard/components/module-card-menu/module-card-menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpErrorComponent } from './pages/http-error/http-error.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivateChild: isDevMode() ? [] : [AuthGuard], // auth guard will be deactivated when dev mode is on
    component: DashboardComponent,
    children: [  // ConfigurationService is in charge of loading the routes here
      { path: 'modules', component: ModuleCardMenuComponent, canActivate: [ModuleCardMenuGuard] }
    ],
  },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'error', component: HttpErrorComponent },
  { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
