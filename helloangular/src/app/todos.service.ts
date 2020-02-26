import { Injectable } from '@angular/core';
import { Todos, Todo } from './todo/todos';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private _todoList: Todos;

  constructor(private _messageService: MessageService) {
    this._todoList = new Todos([]);
    this._todoList.add('plz fix me!!');
  }

  getTodos(): Observable<Todo[]> {
    this._messageService.add('TodosService: fetched Todos');
    return of(this._todoList.todos);
  }
}
