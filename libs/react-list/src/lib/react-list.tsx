import React from "react";
import styles from './react-list.module.scss';
import { ITodo } from "./todo";
import { TODOS } from './todos.mock';

// eslint-disable-next-line @typescript-eslint/ban-types
class ReactList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: TODOS
    }
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
      todos: TODOS
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
