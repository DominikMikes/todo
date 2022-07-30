import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { GridActionsService } from 'libs/ui/grid/src/lib/services/grid-actions.service';
import { Observable, of } from 'rxjs';
import { todos } from '../../mock-data/todo.mock';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'description' },
    { field: 'status' },
    {
      field: 'active', cellRenderer: (param: any) => {
        return (param.data.active) ? 'X' : '-';
      }
    }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    editable: true,
  };

  source = of(todos);

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  constructor(private http: HttpClient, private gridActionsService: GridActionsService) { }

  ngOnInit(): void {
    this.rowData$ = this.source; //this.http
    // .get<any[]>(this.source); //'https://www.ag-grid.com/example-assets/row-data.json'
  }

  deleteSelected(): void {
    this.rowData$
  }
}
