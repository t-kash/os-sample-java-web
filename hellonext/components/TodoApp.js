import React from 'react';
import VisibleTodoList from "../containers/VisibleTodoList";
import AddTodo from '../containers/AddTodo';
import Footer from './Footer';

const TodoApp = () => (
    <div className="TodoApp">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default TodoApp;