const HELLONEXT_APP = '@@hellonext/';
let nextTodoId = 1;

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
);

export const SET_VISIBILITY_FILTER = HELLONEXT_APP + 'SET_VISIBILITY_FILTER';
export const VisibilityFilters = {
    SHOW_ALL: HELLONEXT_APP + 'SHOW_ALL',
    SHOW_COMPLETED: HELLONEXT_APP + 'SHOW_COMPLETED',
    SHOW_ACTIVE: HELLONEXT_APP + 'SHOW_ACTIVE'
};
export const setVisibilityFilter = (filter) => (
    {
        type: SET_VISIBILITY_FILTER,
        filter,
    }
);