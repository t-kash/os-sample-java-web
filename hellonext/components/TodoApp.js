import React from 'react';
import VisibleTodoList from "../containers/VisibleTodoList";
import AddTodo from '../containers/AddTodo';

const TodoApp = () => (
    <div className="TodoApp">
        <AddTodo />
        <VisibleTodoList />
    </div>
);

export default TodoApp;