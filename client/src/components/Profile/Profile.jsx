import React from 'react';
import {useSelector} from "react-redux";

function Profile() {
    const {user} = useSelector(state => state.user)
    // const user = await fetch('api/statOne', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(id)
    // })
    //     .then((res) => res.json())
    // const user = {name: 'Lalaila', games: 13, totalScore: 23, rightAnswers: 12, wrongAnswers: 3}

    // console.log(user)

    return (
        <div className="container my-5">
            <div>Ваше Имя:{user.name}</div>
            <div>Количество Игр:{user.games}</div>
            <div>Ваш скор:{user.totalScore}</div>
            <div>Правильыне ответы:{user.rightAnswers}</div>
            <div>Неправильные ответы:{user.wrongAnswers}</div>
            <div>Статистика:{(user.totalScore / user.games).toFixed(2)}</div>
        </div>
    );
}

export default Profile;
