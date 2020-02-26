export class Todos {
    private _todos: Array<Todo> = new Array<Todo>();

    constructor(todoArray: Todo[]) {
        this._todos = todoArray;
    }

    add(text: string): void {
        this._todos.push(new Todo(text, false));
    }

    modify(todo: Todo, newText: string) {
        this._todos[this.getTodoIndex(todo)].text = newText;
    }

    delete(todo: Todo): void {
        this._todos.splice(this.getTodoIndex(todo), 1);
    }

    deleteAll(): void {
        this._todos = [];
    }

    toggle(todo: Todo): void {
        todo.done = !todo.done;
    }

    get todos() {
        return this._todos;
    }

    private getTodoIndex(todo: Todo): number {
        return this._todos.indexOf(todo);
    }
}

export class Todo {

    private _inputMode: boolean = false;
    private _detail: TodoDetail;

    constructor(private _text: string, private _done: boolean) {
        this._detail = new TodoDetail(new Date());
    }

    get text() {
        return this._text;
    }

    set text(text: string) {
        this._text = text;
        this._detail.updateDate = new Date();
    }

    get done() {
        return this._done;
    }

    set done(done: boolean) {
        this._done = done;
    }

    switchMode(): void {
        this._inputMode = !this._inputMode;
    }

    isInputMode(): boolean {
        return this._inputMode;
    }

    get detail() {
        return this._detail;
    }
}

export class TodoDetail {

    private _showDetail: boolean = false;
    private _updateDate: Date;

    constructor(private _registDate: Date) {
    }

    get registDate() {
        return this._registDate;
    }

    get updateDate() {
        return this._updateDate;
    }

    set updateDate(updateDate: Date) {
        this._updateDate = updateDate;
    }

    showDetail(): void {
        this._showDetail = !this._showDetail;
    }

    isShowDetail(): boolean {
        return this._showDetail;
    }
}