import { TOPICS_INIT } from "../actionTypes/topicsAT"

export function initTopicsAC(payload) {
    return {
        type: TOPICS_INIT,
        payload
    }
}

