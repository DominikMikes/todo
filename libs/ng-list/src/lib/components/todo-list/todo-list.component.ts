import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { GridActionsService } from 'libs/ui/grid/src/lib/services/grid-actions.service';
import { BehaviorSubject } from 'rxjs';
import { todos } from '../../mock-data/todo.mock';
import { ITodo } from '../../model/todo';

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
      field: 'active',
      cellRenderer: (param: any) => {
        return param.data.active ? 'X' : '-';
      },
    },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    editable: true,
  };

  private selectedTodoRows!: any[];

  private todoList: ITodo[] = [...todos];

  // Data that gets displayed in the grid
  // public rowData$!: BehaviorSubject<ITodo[]>;
  private rowDataSource = new BehaviorSubject<ITodo[]>([]);
  rowData$ = this.rowDataSource.asObservable();

  constructor(
    private http: HttpClient,
    private gridActionsService: GridActionsService
  ) {}

  ngOnInit(): void {
    this.rowDataSource.next(todos);

    this.gridActionsService.selectedRows.subscribe((data) => {
      this.selectedTodoRows = [...data];
      console.log('data', this.selectedTodoRows);
    });
  }

  refreshList(): void {
    this.todoList = [...todos];
    this.rowDataSource.next([...this.todoList]);
  }

  deleteSelected(): void {
    this.todoList = this.todoList.filter((todo) => {
      return !this.selectedTodoRows.map((rows) => rows.id).includes(todo.id);
    });
    this.rowDataSource.next([...this.todoList]);
  }
}
