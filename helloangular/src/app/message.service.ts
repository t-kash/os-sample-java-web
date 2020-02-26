import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messages: Array<string> = new Array<string>();

  constructor() { }

  add(message: string): void {
    this._messages.push(message);
  }

  clear(): void {
    this._messages = new Array<string>();
  }

  get messages(): string[] {
    return this._messages;
  }

  isEmpty(): boolean {
    if (this._messages.length !== undefined) {
      return this._messages.length === 0;
    } else {
      return true;
    }
  }
}
