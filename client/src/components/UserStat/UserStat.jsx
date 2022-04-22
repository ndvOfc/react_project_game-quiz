import React from 'react';

function UserStat({user}) {

    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.games}</td>
            <td>{user.totalScore}</td>
            <td>{user.rightAnswers}</td>
            <td>{user.wrongAnswers}</td>
            <td>{(user.totalScore / user.games).toFixed(2)}</td>
        </tr>
);
}

export default UserStat;