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
  getTodoRow(todo: ITodo) {
    return <div key={todo.id}>{todo.description} - {todo.status}
      <button data-todo-id={todo.id} onClick={() => this.removeTodo(todo.id)}>X</button>
    </div>;
  }
  override render() {
    return (
      <div className={styles['container']}>
        <div>TOOLBAR BUTTONS</div>
        {this.state['todos'].map((todo: ITodo) => {
          return this.getTodoRow(todo);
        })}
      </div>
    );
  }

}

export { ReactList };
