import { put } from 'redux-saga/effects';
import * as type from '../../actionTypes';

export function* incrementSaga(action) {
    try {
        yield put({ type: type.counterIncrement("SUCCESS"), value: action.payload.value});
    } catch (error) {
        yield put({ type: type.counterIncrement("FAILED")});
    }
}

export function* decrementSaga(action) {
    try {
        yield put({ type: type.counterDecrement("SUCCESS"), value: action.payload.value});
    } catch (error) {
        yield put({ type: type.counterDecrement("FAILED")});
    }
}


