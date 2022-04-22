import { INIT_QUESTIONS } from "../actionTypes/initQuestionsAT"

const initialState = []

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_QUESTIONS:
      console.log(action.payload)
      return { ...state, questions: action.payload}
    default:
      return state
  }
}

export default questionsReducer;
