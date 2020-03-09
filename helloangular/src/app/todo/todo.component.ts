import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Todos, Todo } from './todos';
import { TodosService } from '../todos.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css', '../common/common.css']
})
export class TodoComponent implements OnInit {

  private _todoList: Todos;

  constructor(private _todosService: TodosService, private _messageService: MessageService) { }

  ngOnInit(): void {
    // this._todoList = new Todos();
    // this._todoList.add('plz fix me!!');

    var todoList: Todos = new Todos();

    this._todosService.getTodos().subscribe(todos => todos.forEach(todo => todoList.todos.push(todo)));

    todoList.todos.forEach(todo => console.log("Todo#text : " + todo._text));

    this._todoList = todoList;
  }

  toggleTodo(todo: Todo): void {
    this.log(() => 'called toggleTodo. todo=' + todo._text);
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
    this.log(() => 'called modifyTodo. beforetodo=' + todo._text + ', newtodo=' + input.value);
    this._todoList.modify(todo, input.value)
    input.value = '';
    this.switchMode(todo);
  }

  switchMode(todo: Todo): void {
    this.log(() => 'called switchMode. currentInputMode=' + todo._inputMode + ', nextInputMode=' + !todo._inputMode);
    todo._inputMode = !todo._inputMode;
  }

  isInputMode(todo: Todo): boolean {
    this.log(() => "Todo#text : " + todo._text);
    this.log(() => 'called isInputMode. currentInputMode=' + todo._inputMode);
    return todo._inputMode;
  }

  deleteTodo(todo: Todo): void {
    this.log(() => 'called deleteTodo. todo=' + todo._text);
    this._todoList.delete(todo);
  }

  deleteAllTodo(): void {
    this._messageService.add('delete all todos.');
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
