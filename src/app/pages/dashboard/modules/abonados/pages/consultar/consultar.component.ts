import { Component } from '@angular/core';
import axios from 'axios';
import { IAbonado } from 'src/app/core/interfaces/IAbonado.interface';
import { ApiClientService } from 'src/app/core/services/api-client.service';

enum NavTab {
  EstadoCuenta,
  Operaciones,
  Observaciones,
  DepositosTransferencias,
  ServicioCliente,
  MasOpciones
}

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent {

  // ngModel inputs
  public clientNumber: string = '';
  public clientIdentityId: string = '';

  // server response object
  public client: IAbonado | undefined = {
    name: 'andres'
  };

  // properties for "DATOS HISTORICOS DEL ABONADO"
  public navTabEnum = NavTab;
  public currentTab: NavTab = NavTab.EstadoCuenta;

  constructor(private apiClientService: ApiClientService) { }

  public async getClientByNumber() {
    let res = await this.apiClientService.http.get('...?number=' + this.clientNumber);
    this.client = res.data;
  }

  public async getClientByIdentityId() {
    let res = await this.apiClientService.http.get('...?cedula=' + this.clientIdentityId);
    this.client = res.data;
  }

  /**
   * Change tab view for "DATOS HISTORICOS DEL ABONADO"
   * @param tab enum value that represents a tab view
   */
  public setCurrentTab(tab: NavTab) {
    this.currentTab = tab;
  }
}
