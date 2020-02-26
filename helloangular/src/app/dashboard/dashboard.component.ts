import { Component, OnInit } from '@angular/core';
import { Todos } from '../todo/todos';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _todosService: TodosService) { }

  ngOnInit(): void {
  }

  get todoList() {
    var todoList: Todos;
    this._todosService.getTodos().subscribe(todos => todoList = new Todos(todos.slice(0, 5)));
    return todoList;
  }
}
