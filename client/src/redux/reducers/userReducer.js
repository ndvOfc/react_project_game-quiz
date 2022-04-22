import { AUTH_USER } from "../actionTypes/userAT"

const initialState ={user: []}
export function userReducer (state=initialState,action){
    switch(action.type){
        case AUTH_USER:
            return {...state,user:action.payload}
        default:
            return state
    }
}
