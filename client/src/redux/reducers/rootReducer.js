import { combineReducers } from "redux";
import {UserStatReducer} from "./UserStatReducer";
import { userReducer } from "./userReducer"

export const rootReducer = combineReducers({
    users: UserStatReducer,
    user: userReducer
})
