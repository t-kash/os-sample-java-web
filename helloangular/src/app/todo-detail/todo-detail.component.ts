import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo/todos';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input()
  private _todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  get todo() {
    return this._todo;
  }

  showDetail(): void {
    this._todo.detail.showDetail();
  }

  isShowDetail(): boolean {
    return this._todo.detail.isShowDetail();
  }
}
