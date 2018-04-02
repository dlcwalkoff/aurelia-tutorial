import {Todo} from './todo';

export class App {
  heading = 'Todos';
  todos: Todo[] = [];
  todoDescription: string = '';

  addTodo() {
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription));
      this.todoDescription = '';
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);

    if (index > 0) {
      this.todos.splice(index, 1);
    }
  }
}
