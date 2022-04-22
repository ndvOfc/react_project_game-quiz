import { INIT_GROUP } from "../actionTypes/groupAT"

const initialState ={group: []}
export function groupReducer (state=initialState,action){
    switch(action.type){
        case INIT_GROUP:
            return {...state,group:action.payload}
        default:
            return state
    }
}
