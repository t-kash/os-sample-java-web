import { combineReducers } from 'redux';
import todoReducer from './todo-reducer';
import countReducer from './count-reducer';
import helloReducer from './hello-reducer';

const reducers = combineReducers({ todoReducer, countReducer, helloReducer });

export default reducers;
