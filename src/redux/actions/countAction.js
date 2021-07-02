import * as type from '../actionTypes';
export const countIncrementAction = (payload) => {
    return {type: type.counterIncrement(), payload};
};

export const countDecrementAction = (payload) => {
    return {type:  type.counterDecrement(), payload};
};