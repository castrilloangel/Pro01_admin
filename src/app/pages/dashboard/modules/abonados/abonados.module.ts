import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbonadosComponent } from './abonados.component';
import { AbonadosRoutingModule } from './abonados-routing.module';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';
import { AutorizarActualizacionComponent } from './pages/autorizar-actualizacion/autorizar-actualizacion.component';
import { CrearCuentaOvComponent } from './pages/crear-cuenta-ov/crear-cuenta-ov.component';
import { ResumenComponent } from './pages/consultar/components/resumen/resumen.component';
import { DatosContratoComponent } from './pages/consultar/components/datos-contrato/datos-contrato.component';
import { DatosClienteComponent } from './pages/consultar/components/datos-cliente/datos-cliente.component';
import { DatosDireccionComponent } from './pages/consultar/components/datos-direccion/datos-direccion.component';
import { DatosResidenciaComponent } from './pages/consultar/components/datos-residencia/datos-residencia.component';
import { DatosServiciosMensualesSuscritosComponent } from './pages/consultar/components/datos-servicios-mensuales-suscritos/datos-servicios-mensuales-suscritos.component';
import { DatosEquiposComponent } from './pages/consultar/components/datos-equipos/datos-equipos.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EstadoDeCuentaComponent } from './pages/consultar/components/estado-de-cuenta/estado-de-cuenta.component';
import { OperacionesComponent } from './pages/consultar/components/operaciones/operaciones.component';
import { ObservacionesComponent } from './pages/consultar/components/observaciones/observaciones.component';
import { DepositosTransferenciasComponent } from './pages/consultar/components/depositos-transferencias/depositos-transferencias.component';
import { BusquedaAvanzadaComponent } from './pages/consultar/busqueda-avanzada/busqueda-avanzada.component';
import { DatosPersonaComponent } from './pages/consultar/busqueda-avanzada/components/datos-persona/datos-persona.component';
import { EstatusComponent } from './pages/consultar/busqueda-avanzada/components/estatus/estatus.component';
import { FranquiciaComponent } from './pages/consultar/busqueda-avanzada/components/franquicia/franquicia.component';
import { DireccionComponent } from './pages/consultar/busqueda-avanzada/components/direccion/direccion.component';
import { SaldoComponent } from './pages/consultar/busqueda-avanzada/components/saldo/saldo.component';
import { ServiciosComponent } from './pages/consultar/busqueda-avanzada/components/servicios/servicios.component';
import { OtrosComponent } from './pages/consultar/busqueda-avanzada/components/otros/otros.component';
import { AcuerdoPagoComponent } from './pages/consultar/busqueda-avanzada/components/acuerdo-pago/acuerdo-pago.component';



@NgModule({
  declarations: [
    AbonadosComponent,
    // abonados module pages
    RegistrarComponent,
    ConsultarComponent,
    AutorizarActualizacionComponent,
    CrearCuentaOvComponent,
    // ConsultarComponent components
    ResumenComponent,
    DatosContratoComponent,
    DatosClienteComponent,
    DatosDireccionComponent,
    DatosResidenciaComponent,
    DatosServiciosMensualesSuscritosComponent,
    DatosEquiposComponent,
    EstadoDeCuentaComponent,
    OperacionesComponent,
    ObservacionesComponent,
    DepositosTransferenciasComponent,
    BusquedaAvanzadaComponent,
    // BusquedaAvanzadaComponent components
    DatosPersonaComponent,
    EstatusComponent,
    FranquiciaComponent,
    DireccionComponent,
    SaldoComponent,
    ServiciosComponent,
    OtrosComponent,
    AcuerdoPagoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule, // shared components (table formats, form elements, buttons, etc)
    AbonadosRoutingModule
  ]
})
export class AbonadosModule { }
