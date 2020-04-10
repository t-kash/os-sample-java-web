import initialState from '../initialState';

const countReducer = (state = initialState.countReducer, action) => {
    switch (action.type) {
        case 'TICK':
            return {
                ...state,
                lastUpdate: action.lastUpdate,
                light: !!action.light,
            }
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            }
        case 'RESET':
            return {
                ...state,
                count: initialState.countReducer.count,
            }
        default:
            return state
    }
}

export default countReducer;