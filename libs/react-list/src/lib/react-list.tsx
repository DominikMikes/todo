import React, { useCallback, useEffect, useMemo } from "react";
import { v4 as uuid } from 'uuid';
import styles from './react-list.module.scss';

import { ITodo } from '@todo/data-access-todo'
import { DataAccessTodo as TodoService } from '@todo/data-access-todo';

export function ReactList() {
  const [todos, setTodos] = React.useState([]);
  const todoService = new TodoService();

  const addTodo = useCallback(async () => {
    const todoId = uuid();
    const newTodo: ITodo = {
      id: todoId,
      description: `todo ${todoId}`,
      status: `To Do NEW`,
      active: false
    };
    await todoService.addTodo(newTodo);
    getTodos();
  }, []);

  const removeTodo = async (id: string) => {
    await todoService.removeTodo(id);
    const filtered = todos.filter((todo: ITodo) => { return todo.id !== id });
    setTodos(filtered);
  };

  const refreshTodo = () => {
    return getTodos();
  };

  const getTodoRow = useCallback((todo: ITodo) => {
    return <div key={todo.id}>{todo.description} - {todo.status} 
      <button data-todo-id={todo.id} onClick={() => removeTodo(todo.id)}>X</button>
    </div>;
  }, [todos]);

  const getTodos = useCallback(async () => {
    const todoList = await todoService.getTodos();
    if (todoList.length > 0) {
      setTodos(todoList);
    }
  }, [setTodos]);

  useMemo(() => {
    getTodos();
  }, []);

  return <div className={styles['container']}>
    <button onClick={addTodo}>Add +</button>
    <button onClick={refreshTodo}>Refresh</button>
    {
      todos.map((todo: ITodo) => {
        return getTodoRow(todo);
      })
    }

  </div >;
}
