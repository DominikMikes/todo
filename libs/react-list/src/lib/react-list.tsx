import React from "react";
import styles from './react-list.module.scss';
import { ITodo } from "./todo";
import { TodoService } from './todo-service';

export function ReactList() {
  const [todos, setTodos] = React.useState([]);
  const todoService = new TodoService();

  const addTodo = async () => {
    const todoId = todos.length + 1;
    const newTodo: ITodo = {
      id: todoId,
      description: `todo ${todoId}`,
      status: `To Do NEW`,
      active: false
    };
    await todoService.addTodo(newTodo);
    const todoList = await todoService.getTodos();
    setTodos(todoList);
  };

  const removeTodo = (id: number) => {
    const filtered = todos.filter((todo: ITodo) => { return todo.id !== id });
    setTodos(filtered);
  };

  const refreshTodo = () => {
    return getTodos();
  };

  const getTodoRow = (todo: ITodo) => {
    return <div key={todo.id}>{todo.description} - {todo.status}
      <button data-todo-id={todo.id} onClick={() => removeTodo(todo.id)}>X</button>
    </div>;
  };

  const getTodos = () => {
    todoService.getTodos().then((todoList: any) => {
      if (todoList.length > 0) {
        setTodos(todoList);
      }
    });
  };

  return <div className={styles['container']}>
    <button onClick={() => addTodo()}>Add +</button>
    <button onClick={() => refreshTodo()}>Refresh</button>
    {
      todos.map((todo: ITodo) => {
        return getTodoRow(todo);
      })
    }

  </div >;
}
