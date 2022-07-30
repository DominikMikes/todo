import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class GridActionsService {

  // constructor() { }
  private selectedRowsSource = new BehaviorSubject([]);
  selectedRows = this.selectedRowsSource.asObservable();

  onSelectionChanged(selectedData: any) {
    this.selectedRowsSource.next(selectedData);
  }
}
