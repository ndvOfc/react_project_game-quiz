import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Registration = () => {
 const name = useRef()
 const email = useRef()
 const password = useRef()
const navigate = useNavigate()


    const regUser = async (event) => {
     event.preventDefault()
        const body = {
         name: name.current.value, email: email.current.value, password: password.current.value
        }

        const response = await fetch(`http://localhost:5000/api/user/registration`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

         const data = await response.json()
        console.log(data)

    }


    return (


        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <form onSubmit={regUser} className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                            <div className="card-body p-5 text-center">

                                <div  className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Регистрация</h2>
                                    <p className="text-white-50 mb-5">Введите логин и пароль</p>

                                    <div className="form-outline form-white mb-4">
                                        <input ref={name} type="text" id="typeEmailX" className="form-control form-control-lg"/>
                                        <label className="form-label" htmlFor="typeEmailX">Имя</label>
                                    </div>

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

                                        <div className="m-auto">Есть аккаунта?
                                        </div>
                                        <div className="m-auto">
                                            <Link to="/" className="text-white-50 fw-bold">Вход</Link>
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

export default Registration;
