const HELLONEXT_APP = '@@hellonext/';
let nextTodoId = 0;

export const ADD_TODO = HELLONEXT_APP + 'ADD_TODO';
export const addTodo = (text) => (
    {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }
);

export const TOGGLE_TODO = HELLONEXT_APP + 'TOGGLE_TODO';
export const toggleTodo = (id) => (
    {
        type: TOGGLE_TODO,
        id
    }
)