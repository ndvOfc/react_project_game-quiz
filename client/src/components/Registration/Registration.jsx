import React, { useRef } from 'react';

const Registration = () => {
 const name = useRef()
 const email = useRef()
 const password = useRef()



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
        <div className="container">
            <form onSubmit={regUser}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input ref={name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="nameHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
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
                    <h2></h2>
                </div>
            </form>
        </div>

    );
};

export default Registration;
