import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent, SelectionChangedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { GridActionsService } from '../../services/grid-actions.service';

@Component({
  selector: 'todo-ui-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() columnDefs!: ColDef[];
  @Input() defaultColDef!: ColDef;
  @Input() rowData$!: Observable<any[]>;

  // private gridApi!: GridApi;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient, private gridActionsService: GridActionsService) { }

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    console.log('grid ready');
    // this.rowData$.subscribe(data => {
    //   console.log('grid ready', data);
    //   // this.rowData$ = [...data];
    // })
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  onSelectionChanged(event: SelectionChangedEvent) {
    const selectedData = this.agGrid.api.getSelectedRows();
    this.gridActionsService.onSelectionChanged(selectedData);
    // console.log('Selection Changed', selectedData);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
