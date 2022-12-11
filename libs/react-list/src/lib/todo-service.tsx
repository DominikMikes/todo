import { ITodo } from "./todo";

const url = 'http://localhost:3333/'
export class TodoService {
    getTodos() {
        return fetch(`${url}todos`).then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error: ${res.status}`);
            }
            return res.json();
        }).then((data) => {
            return data.todos;
        }).catch(err => {
            console.error('ERROR', err);
            return [];
        });
    }
    addTodo(todo: ITodo) {
        return fetch(`${url}todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        }).then(res => {
            return res.json();
        }).then(data => {
            return data.todos;
        }).catch(err => {
            console.error('ERROR', err);
            return [];
        });
    }
    // removeTodo(id) {

    // }
    // updateTodo(todo: ITodo) {

    // }
}
