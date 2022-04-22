import { TOPICS_INIT } from "../actionTypes/topicsAT"

const initialState = {topics:[]}

const topicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOPICS_INIT:
      return { ...state, topics: action.payload}
    default:
      return state
  }
}

export default topicsReducer;
