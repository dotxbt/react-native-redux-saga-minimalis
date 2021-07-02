import { all } from 'redux-saga/effects';
import * as watchers from "./watchers";

export function* rootSaga() {
    yield all([
        watchers.watchCounter(),
    ]);
}