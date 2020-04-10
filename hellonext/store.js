import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { compose, createStore } from 'redux';
import reducers from './reducers/reducers';
import initialState from './initialState';

export const initializeStore = (preloadedState = initialState) => {
    return createStore(
        reducers,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}

// export const initializeStore = createStore(reducers);
// const createFinalStore = () => compose()(createStore)(reducers);
// export default createFinalStore;
