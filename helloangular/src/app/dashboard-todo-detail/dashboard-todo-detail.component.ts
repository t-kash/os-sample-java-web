import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Todo, Todos } from '../todo/todos';

@Component({
  selector: 'app-dashboard-todo-detail',
  templateUrl: './dashboard-todo-detail.component.html',
  styleUrls: ['./dashboard-todo-detail.component.css', '../common/common.css']
})
export class DashboardTodoDetailComponent implements OnInit {

  private _todo: Todo;

  constructor(private _route: ActivatedRoute, private _todoService: TodosService, private _location: Location) { }

  ngOnInit(): void {
    const index: number = +this._route.snapshot.paramMap.get('index');

    let todoList: Todos = null;
    this._todoService.getTodos().subscribe(todos => todoList = new Todos(todos))

    this._todo = todoList.todos[index];
  }

  get todo() {
    return this._todo;
  }

  goBack(): void {
    this._location.back();
  }

}
