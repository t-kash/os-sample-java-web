import React from 'react';
import { Provider } from 'react-redux';

import TodoApp from '../components/TodoApp';
import Layout from '../components/MyLayout';
import createFinalStore from "../store";
import { initializeStore } from "../store";
import { setVisibilityFilter, VisibilityFilters } from '../actions/todo-action';

//const store = createFinalStore();
const store = initializeStore();

console.log(store.getState()); /// "SHOW_ALL"
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
console.log(store.getState()); /// "SHOW_COMPLETED"
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));

export default function Todo() {
    return (
        <div>
            <Layout>
                <Provider store={store}>
                    <TodoApp />
                </Provider>
            </Layout>
        </div>
    );
}