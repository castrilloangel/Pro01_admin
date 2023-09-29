import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrarComponent } from './pages/registrar/registrar.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';
import { AutorizarActualizacionComponent } from './pages/autorizar-actualizacion/autorizar-actualizacion.component';
import { CrearCuentaOvComponent } from './pages/crear-cuenta-ov/crear-cuenta-ov.component';
import { BusquedaAvanzadaComponent } from './pages/consultar/busqueda-avanzada/busqueda-avanzada.component';

const routes: Routes = [
  { path: '', redirectTo: '/error', pathMatch: 'full' }, // page not found
  { path: 'registrar', component: RegistrarComponent },
  { path: 'consultar', component: ConsultarComponent },
  { path: 'busqueda-avanzada', component: BusquedaAvanzadaComponent },
  { path: 'autorizar-actualizacion', component: AutorizarActualizacionComponent },
  { path: 'crear-cuenta-ov', component: CrearCuentaOvComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbonadosRoutingModule { }