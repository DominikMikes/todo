import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UiGridModule } from '@todo/ui/grid';

@NgModule({
  imports: [CommonModule, UiGridModule],
  exports: [TodoListComponent],
  declarations: [TodoListComponent],
})
export class TodoModule {}
