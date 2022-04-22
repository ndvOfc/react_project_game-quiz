import React, {useRef, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom'
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



    <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <form onSubmit={logUser} className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                        <div className="card-body p-5 text-center">

                            <div  className="mb-md-5 mt-md-4 pb-5">

                                <h2 className="fw-bold mb-2 text-uppercase">Вход</h2>
                                <p className="text-white-50 mb-5">Введите логин и пароль</p>


                                <div className="form-outline form-white mb-4">
                                    <input ref={email} type="email" id="typeEmailX" className="form-control form-control-lg"/>
                                    <label className="form-label" htmlFor="typeEmailX">Эл. почта</label>
                                </div>

                                <div className="form-outline form-white mb-4 mt-4">
                                    <input ref={password} type="password" id="typePasswordX" className="form-control form-control-lg"/>
                                    <label className="form-label" htmlFor="typePasswordX">Пароль</label>
                                </div>


                                <button className="btn btn-outline-light btn-lg px-5" type="submit">Вход</button>
                                <div className="form-outline form-white mb-4">

                                    <div className="mt-4">Нет аккаунта?
                                    </div>
                                    <div className="m-auto">
                                        <Link to="/registration" className="text-white-50 fw-bold">Регистрация</Link>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>



                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>

);
};

export default Login;
