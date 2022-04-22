import {INIT_GROUP} from "../actionTypes/groupAT";

export function initGroup(payload) {
    return {
        type: INIT_GROUP,
        payload
    }
}
