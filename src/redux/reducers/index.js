import { combineReducers } from "redux";
import counterReducer from "./counterReducers";

const rootReducers = combineReducers({
    counter: counterReducer,
});

export default rootReducers;