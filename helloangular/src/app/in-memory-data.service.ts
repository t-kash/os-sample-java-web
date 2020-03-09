import { Injectable } from '@angular/core';
import { Todo } from './todo/todos';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const todos: Todo[] = [
      // new Todo('Sample1', false),
      // new Todo('Sample2', false),
      // new Todo('Sample3', false),
      // new Todo('Sample4', false),
      // new Todo('Sample5', false),
      // new Todo('Sample6', false),
      // new Todo('Sample7', false),
      // new Todo('Sample8', false),
      // new Todo('Sample9', false),
      // new Todo('Sample10', false)
      { _text: 'Sample0', _done: false, _inputMode: false, _detail: { _showDetail: false, _registDate: new Date(), _updateDate: null } },
      { _text: 'Sample1', _done: false, _inputMode: false, _detail: { _showDetail: false, _registDate: new Date(), _updateDate: null } },
      { _text: 'Sample2', _done: false, _inputMode: false, _detail: { _showDetail: false, _registDate: new Date(), _updateDate: null } },
      { _text: 'Sample3', _done: false, _inputMode: false, _detail: { _showDetail: false, _registDate: new Date(), _updateDate: null } },
      { _text: 'Sample4', _done: false, _inputMode: false, _detail: { _showDetail: false, _registDate: new Date(), _updateDate: null } },
      { _text: 'Sample5', _done: false, _inputMode: false, _detail: { _showDetail: false, _registDate: new Date(), _updateDate: null } },
      { _text: 'Sample6', _done: false, _inputMode: false, _detail: { _showDetail: false, _registDate: new Date(), _updateDate: null } },
      { _text: 'Sample7', _done: false, _inputMode: false, _detail: { _showDetail: false, _registDate: new Date(), _updateDate: null } },
      { _text: 'Sample8', _done: false, _inputMode: false, _detail: { _showDetail: false, _registDate: new Date(), _updateDate: null } },
      { _text: 'Sample9', _done: false, _inputMode: false, _detail: { _showDetail: false, _registDate: new Date(), _updateDate: null } }
    ];
    return { todos: todos };
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ? todos.length + 1 : 1;
  }

}
