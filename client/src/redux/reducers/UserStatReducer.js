import {INIT_STAT_USERS} from "../actionTypes/UserStatAT";
// const initialState ={users:[{userName: 'Lalaila', games: 13, totalScore: 23, rightAnswers: 12, wrongAnswers: 3},
//         {userName: 'Lalaila2', games: 12, totalScore: 14, rightAnswers: 65, wrongAnswers: 22},
//         {userName: 'Lalaila3', games: 13, totalScore: 25, rightAnswers: 43, wrongAnswers: 33},
//         {userName: 'Lalaila4', games: 18, totalScore: 14, rightAnswers: 32, wrongAnswers: 53},
//         {userName: 'Lalaila5', games: 19, totalScore: 68, rightAnswers: 45, wrongAnswers: 11},
//         {userName: 'Lalaila6', games: 22, totalScore: 35, rightAnswers: 76, wrongAnswers: 35},
//         {userName: 'Lalaila7', games: 30, totalScore: 12, rightAnswers: 23, wrongAnswers: 12}]}

const initialState = {users: []}
export function UserStatReducer (state=initialState,action){
    switch(action.type){
        case INIT_STAT_USERS:
            return {...state,users:action.payload}
        default:
            return state
    }
}
