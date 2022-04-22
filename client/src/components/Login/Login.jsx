import React, {useRef, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { authUser } from "../../redux/actionCreators/userAC"
import jwt_decode from 'jwt-decode';

const Login = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)

    const name = useRef()
    const email = useRef()
    const password = useRef()

            const logUser = async (event) => {
                event.preventDefault()
                const body = {
                    email: email.current.value, password: password.current.value
                }

                const response = await fetch(`http://localhost:5000/api/user/login`, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })

                const data = await response.json()
                const user = jwt_decode(data.token)
                dispatch(authUser(user))



}

    console.log(user)
return (
    <div className="container mt-2">
        <form onSubmit={logUser}>
            <h2>Login</h2>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input ref={email} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input ref={password} name="password" type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <div className="mb-3">
                <h2>{user.name}</h2>
            </div>
        </form>
    </div>

);
};

export default Login;
