import * as type from "../../actionTypes";
import { decrementSaga, incrementSaga } from "../saga/counterSaga";
import { takeLatest } from "redux-saga/effects";

export default function* watchCounter() {
    yield takeLatest( type.counterIncrement(), incrementSaga);
    yield takeLatest(type.counterDecrement(), decrementSaga);
}