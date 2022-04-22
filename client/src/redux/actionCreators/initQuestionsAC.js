import {INIT_QUESTIONS} from "../actionTypes/UserStatAT";

export function initQuestionsAC(payload) {
    return {
        type: INIT_QUESTIONS,
        payload
    }
}
