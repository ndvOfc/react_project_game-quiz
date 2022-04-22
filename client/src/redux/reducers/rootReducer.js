import { combineReducers } from "redux";
import {UserStatReducer} from "./UserStatReducer";

import { userReducer } from "./userReducer"
import { groupReducer } from "./groupReducer"

export const rootReducer = combineReducers({
    users: UserStatReducer,
    user: userReducer,
    group: groupReducer

})
