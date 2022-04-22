import { TOPICS_INIT } from "../actionTypes/topicsAT"

const initialState = [{
  id: 1,
  theme: 'geo',
  questionRun: [['Вопрос', 'Ответ1', 'цена'], ['Вопрос', 'Ответ1', 'цена'], ['Вопрос', 'Ответ1', 'цена'], ['Вопрос', 'Ответ1', 'цена'], ['Вопрос', 'Ответ1', 'цена']],

}, 
{
  id: 2,
  theme: 'geo',
  questionRun: [['Вопрос2', 'Ответ2', 'цена2'], ['Вопрос2', 'Ответ2', 'цена2'], ['Вопрос2', 'Ответ2', 'цена2'], ['Вопрос2', 'Ответ2', 'цена2'], ['Вопрос2', 'Ответ2', 'цена2']]
}];

const topicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOPICS_INIT:
      return { ...state, topics: action.payload}
    default:
      return state
  }
}

export default topicsReducer;
