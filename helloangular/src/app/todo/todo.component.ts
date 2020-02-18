import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Todos, Todo } from './todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css', '../common/common.css']
})
export class TodoComponent implements OnInit {

  private _todoList: Todos;

  constructor() { }

  ngOnInit(): void {
    this._todoList = new Todos();
    this._todoList.add('plz fix me!!');
  }

  toggleTodo(todo: Todo): void {
    this.log(() => 'called toggleTodo. todo=' + todo.text);
    this._todoList.toggle(todo);
  }

  addTodo(input: HTMLInputElement): void {
    this.log(() => 'called addTodo. todo=' + input.value);
    this._todoList.add(input.value)
    input.value = '';
  }

  @ViewChild('modifyinput')
  set modifyInput(_input: ElementRef | undefined) {
    this.log(() => 'called modifyInput. ElementRef=' + _input);
    if (_input !== undefined) {
      _input.nativeElement.focus();
    }
  }

  modifyTodo(todo: Todo, input: HTMLInputElement): void {
    this.log(() => 'called modifyTodo. beforetodo=' + todo.text + ', newtodo=' + input.value);
    this._todoList.modify(todo, input.value)
    input.value = '';
    this.switchMode(todo);
  }

  switchMode(todo: Todo): void {
    this.log(() => 'called switchMode. currentInputMode=' + todo.isInputMode() + ', nextInputMode=' + !todo.isInputMode());
    todo.switchMode();
  }

  isInputMode(todo: Todo): boolean {
    this.log(() => 'called isInputMode. currentInputMode=' + todo.isInputMode());
    return todo.isInputMode();
  }

  deleteTodo(todo: Todo): void {
    this.log(() => 'called deleteTodo. todo=' + todo.text);
    this._todoList.delete(todo);
  }

  deleteAllTodo(): void {
    this.log(() => 'called deleteAllTodo.');
    this._todoList.deleteAll();
  }

  // showDetail(todo: Todo): void {
  //   todo.detail.showDetail();
  // }

  // isShowDetail(todo: Todo): boolean {
  //   return todo.detail.isShowDetail();
  // }

  get todoList() {
    return this._todoList;
  }

  private log(message: () => string): void {
    console.log(message());
  }
}
