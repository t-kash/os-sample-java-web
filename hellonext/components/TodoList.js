import React from 'react';
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onclick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default TodoList;