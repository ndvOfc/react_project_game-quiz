import { combineReducers } from "redux";
import topicsReducer from "./topicsReducer";

export const rootReducer = combineReducers({
  topics: topicsReducer
})
