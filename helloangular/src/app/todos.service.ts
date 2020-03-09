import { Injectable } from '@angular/core';
import { Todos, Todo } from './todo/todos';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private _todoUrl: string = 'api/todos';

  private _todoList: Todos = new Todos();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient, private _messageService: MessageService) {
    this._todoList.add('plz fix me!!');
  }

  getTodos(): Observable<Todo[]> {
    // this._messageService.add('TodosService: fetched Todos');
    // return of(this._todoList.todos);
    return this.http.get<Todo[]>(this._todoUrl).pipe(
      tap(todos => this._messageService.add('TodosService: fetched Todos')),
      catchError(this.handleError<Todo[]>('getTodos', this._todoList.todos))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
