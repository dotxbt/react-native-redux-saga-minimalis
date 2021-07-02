import * as type from '../actionTypes';

const initialState = {
    counter: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.counterIncrement("SUCCESS"): {
            return {
                ...state,
                counter: state.counter + action.value,
            }
        }
        case type.counterDecrement("SUCCESS"): {
            return {
                ...state,
                counter: state.counter - action.value,
            }
        }
        default: {
            return state;
        }
    }
}
export default counterReducer;
