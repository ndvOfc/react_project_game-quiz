import {INIT_STAT_USERS} from "../actionTypes/UserStatAT";

export function initStatUsersAC(payload) {
    return {
        type: INIT_STAT_USERS,
        payload
    }
}
