import { combineReducers } from "redux";
import {UserStatReducer} from "./UserStatReducer";

export const rootReducer = combineReducers({
    users: UserStatReducer
})
