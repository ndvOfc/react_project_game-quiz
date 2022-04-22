import { combineReducers } from "redux";
import {UserStatReducer} from "./UserStatReducer";
import topicsReducer from "./topicsReducer";
import questionsReducer from "./questionsReducer";

export const rootReducer = combineReducers({
    users: UserStatReducer,
    topics: topicsReducer,
    questions: questionsReducer,
})
