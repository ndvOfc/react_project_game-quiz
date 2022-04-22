import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {initStatUsersAC} from "../../redux/actionCreators/UserStatAC";
import UserStat from "../UserStat/UserStat";

function Cabinet() {



    const dispatch=useDispatch()
    const {users}=useSelector(state => state.users)
    useEffect(()=>{
        fetch('http://localhost:5000/api/state')
            .then(res =>res.json())
            .then(data=> dispatch(initStatUsersAC(data)))
            .catch(err => console.log(err.message))
    },[dispatch])

    // console.log(users)


    return (
        <table align="center" border="3" cellPadding="7">
            <thead>
            <tr>
                <td>Имя</td>
                <td>Игры</td>
                <td>Тотал Скор</td>
                <td>Правильные ответы</td>
                <td>Неправильные ответы</td>
                <td>Статистика</td>
            </tr>
            </thead>
            {users.map(user => <UserStat key={user.id} user={user}/>)}
        </table>
    );
}

export default Cabinet;