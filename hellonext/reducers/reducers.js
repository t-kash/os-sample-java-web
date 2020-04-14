import { combineReducers } from 'redux';
import todoReducer from './todo-reducer';
import countReducer from './count-reducer';
import helloReducer from './hello-reducer';
import visibilityFilterReducer from './visibilityFilter-reducer';

const reducers = combineReducers({ todoReducer, countReducer, helloReducer, visibilityFilterReducer });

export default reducers;
