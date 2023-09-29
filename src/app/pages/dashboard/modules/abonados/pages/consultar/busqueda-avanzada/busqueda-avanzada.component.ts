import { Component, OnInit } from '@angular/core';
import { IAbonado } from 'src/app/core/interfaces/IAbonado.interface';

enum NavTab {
  DatosPersona,
  Estatus,
  Franquicia,
  Direccion,
  Saldo,
  Afinidad,
  Servicios,
  Otros,
  AcuerdoPago
}

@Component({
  selector: 'app-busqueda-avanzada',
  templateUrl: './busqueda-avanzada.component.html',
  styleUrls: ['./busqueda-avanzada.component.scss']
})
export class BusquedaAvanzadaComponent implements OnInit {

  public navTabEnum = NavTab;
  public currentTab: NavTab = NavTab.DatosPersona;

  // lista de clientes que cumplen con los criterios (los criterios vienen de los formularios)
  public clients: Partial<IAbonado[]> = [];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Change tab view for "DATOS HISTORICOS DEL ABONADO"
   * @param tab enum value that represents a tab view
   */
  public setCurrentTab(tab: NavTab) {
    this.currentTab = tab;
  }

  /**
   * Fetches a list of client that meet the criteria defined by the criteria passed from the form component
   * @param criteria 
   */
  public fetchClients(criteria: Object) {
    console.log('searching for clients using the following criteria', criteria);
    // let res = this.apiClientService.http.get('...');
    // this.clients = res.data;
  }

}
