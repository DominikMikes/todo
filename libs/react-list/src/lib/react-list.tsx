import React from "react";
import styles from './react-list.module.scss';
import { ITodo } from "./todo";
// import { TODOS } from './todos.mock';

import { TodoService } from './todo-service';

// eslint-disable-next-line @typescript-eslint/ban-types
class ReactList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    const initialList: ITodo[] = [];
    this.state = {
      todos: initialList
    };
  }
  override componentWillMount() {
    this.getTodos();
  }
  todoService = new TodoService();
  getTodos() {
    this.todoService.getTodos().then((todos: ITodo[]) => {
      if (todos) {
        this.setState({
          todos: [...todos]
        })
      }
    });

  }
  removeTodo(id: number): any {
    const filtered = this.state['todos'].filter((todo: ITodo) => { return todo.id !== id });
    this.setState({
      todos: filtered
    });
  }
  addTodo() {
    const todoId = this.state['todos'].length + 1;
    const newTodo: ITodo = {
      id: todoId,
      description: `todo ${todoId}`,
      status: `To Do NEW`,
      active: false
    };

    const newTodos = [...this.state['todos']];
    newTodos.push(newTodo);

    this.setState({
      todos: newTodos
    });
  }
  refreshTodo() {
    this.setState({
      todos: [] // TODO: fix refresh
    });
  }
  getTodoRow(todo: ITodo) {
    return <div key={todo.id}>{todo.description} - {todo.status}
      <button data-todo-id={todo.id} onClick={() => this.removeTodo(todo.id)}>X</button>
    </div>;
  }
  override render() {
    return (
      <div className={styles['container']}>
        <button onClick={() => this.addTodo()}>Add +</button>
        <button onClick={() => this.refreshTodo()}>Refresh</button>
        {
          this.state['todos'].map((todo: ITodo) => {
            return this.getTodoRow(todo);
          })
        }

      </div >
    );
  }

}

export { ReactList };
