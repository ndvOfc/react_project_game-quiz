import React from 'react';

function Profile() {
    // const {id} = req.cookies
    // const user = await fetch('api/statOne', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(id)
    // })
    //     .then((res) => res.json())
    // const user = {name: 'Lalaila', games: 13, totalScore: 23, rightAnswers: 12, wrongAnswers: 3}

    return (
        <div>
            {/*<div>Ваше Имя:{user.name}</div>*/}
            {/*<div>Количество Игр:{user.games}</div>*/}
            {/*<div>Ваш скор:{user.totalScore}</div>*/}
            {/*<div>Правильыне ответы:{user.rightAnswers}</div>*/}
            {/*<div>Неправильные ответы:{user.wrongAnswers}</div>*/}
            {/*<div>Статистика:{(user.totalScore / user.games).toFixed(2)}</div>*/}
        </div>
    );
}

export default Profile;