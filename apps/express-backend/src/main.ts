/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import bodyParser = require('body-parser');

import { TODOS } from './app/mock-data/todos';
import { ITodo } from './app/models/todo.interface';



const app = express();
// cors needed to be compliant
app.use(cors());
// bodyparser needed to use body from post api
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const todoList = [...TODOS];

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express-backend!' });
});

// TODO routes
app.get('/todos', (req, res) => {
  res.json({ todos: todoList });
});

app.post('/todos', (req, res) => {
  const newTodo = req.body as ITodo;
  todoList.push(newTodo);

  return res.send(`Updated todo ${newTodo.id}`);
});

app.put('/todos/:id', (req, res) => {
  const todo = req.params as unknown as ITodo
  todoList.forEach(t => {
    if (t.id == todo.id) {
      t = todo;
    }
  });

  res.send(`Updated todo ${todo.id}`);
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const todoId = todoList.findIndex(todo => todo.id === id);

  todoList.splice(todoId, 1);
  return res.send(`Deleted todo ${todoId}`);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
