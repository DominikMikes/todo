import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './components/grid/grid.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, AgGridModule, HttpClientModule],
  exports: [GridComponent],
  declarations: [GridComponent],
})
export class UiGridModule { }
