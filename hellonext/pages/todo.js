import React from 'react';
import { Provider } from 'react-redux';

import TodoApp from '../components/TodoApp';
import Layout from '../components/MyLayout';
import createFinalStore from "../store";
import { initializeStore } from "../store";

//const store = createFinalStore();
const store = initializeStore();

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