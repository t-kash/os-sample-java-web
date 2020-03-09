import { Component, OnInit } from '@angular/core';
import { Todos } from '../todo/todos';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private _todoList: Todos;

  constructor(private _todosService: TodosService) { }

  ngOnInit(): void {
    var todoList: Todos = new Todos();

    this._todosService.getTodos().subscribe(todos => {
      todos.slice(0, 5).forEach(todo => todoList.todos.push(todo));
      todoList.todos.forEach(todo => console.log(todo._text + ", " + todo._inputMode));
    });


    todoList.todos.forEach(todo => console.log("Todo#text : " + todo._text));

    this._todoList = todoList;
  }

  get todoList() {
    return this._todoList;
  }
}
