import React from 'react';
import { PropTypes } from "prop-types";

const Todo = ({ onclick, completed, text }) => {
    return (
        <li onClick={onclick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {text}
        </li>
    );
};

Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default Todo;