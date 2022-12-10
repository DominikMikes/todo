/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';

import { TODOS } from './app/mock-data/todos';
import { ITodo } from './app/models/todo.interface';


const app = express();
app.use(cors());

const todoList = [...TODOS];

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express-backend!' });
});

// TODO routes
app.get('/todos', (req, res) => {
  res.send({ todos: todoList });
});

app.put('/todos/:id', (req, res) => {
  const todo = req.params as unknown as ITodo
  todoList.forEach(t => {
    if (t.id == todo.id) {
      t = todo;
    }
  });


  res.send('Got a PUT request')
});

app.post('/todos', (req, res) => {
  const newTodo = req.params as ITodo;
  todoList.push(newTodo);

  return res.send();
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const todoId = todoList.findIndex(todo => todo.id == parseInt(id));

  todoList.splice(todoId, 1);
  return res.send();
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
