export class Todos {
    private _todos: Array<Todo> = new Array<Todo>();

    // constructor(todoArray: Todo[]) {
    //     todoArray.forEach(todo => this._todos.push(todo));
    // }

    add(text: string): void {
        this._todos.push(new Todo(text, false));
    }

    modify(todo: Todo, newText: string) {
        var target: Todo = this._todos[this.getTodoIndex(todo)];
        target._text = newText;
        target._detail._updateDate = new Date();
    }

    delete(todo: Todo): void {
        this._todos.splice(this.getTodoIndex(todo), 1);
    }

    deleteAll(): void {
        this._todos = [];
    }

    toggle(todo: Todo): void {
        todo._done = !todo._done;
    }

    get todos() {
        return this._todos;
    }

    private getTodoIndex(todo: Todo): number {
        return this._todos.indexOf(todo);
    }
}

export class Todo {

    _inputMode: boolean = false;
    _detail: TodoDetail = new TodoDetail();
    _text: string;
    _done: boolean;

    constructor(text: string, done: boolean) {
        this._text = text;
        this._done = done;
    }
}

export class TodoDetail {

    _registDate: Date;
    _showDetail: boolean = false;
    _updateDate: Date;

    constructor() {
        this._registDate = new Date();
    }
}