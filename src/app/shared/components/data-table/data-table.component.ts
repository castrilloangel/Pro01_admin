import { AfterViewInit, Component, Input } from '@angular/core';
import $ from 'jquery';
import 'src/assets/lib/datatables/jquery.dataTables.js'; // using the one from npm presents issues

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit {

  @Input() tableId: string = '';
  @Input() tableClasses: string[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    //@ts-ignore
    $('#'+ this.tableId).DataTable({
      language: {
        searchPlaceholder: 'Buscar...',
        sSearch: '',
        lengthMenu: 'MOSTRAR _MENU_ REGISTROS',
      }
    });
  }
}
