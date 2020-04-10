import { HELLO } from "../actions/hello-action";
import initialState from '../initialState';

const helloReducer = (state = initialState.helloReducer, action) => {
    switch (action.type) {
        case HELLO:
            return {
                ...state,
                name: action.name,
            }
        default:
            return state
    }
}

export default helloReducer;