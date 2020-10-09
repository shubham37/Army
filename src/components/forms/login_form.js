import React, { Component, useState } from 'react';
import { Card } from 'react-bootstrap';
import '../../assets/css/login_form.css'
import ForgotPasswordForm  from './forgot_password.js'
import axios from "axios";


export default function LogInForm() {
        
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function loginFormSubmit (event) {
        event.preventDefault();
        console.log(username)
        console.log(password)
        axios.get(`/accounts/login`)
        .then((data) => {
            console.log(data)
            // debugger
            setUsername(data.data.name)
        })
        .catch(error => console.log(error.message))
    };

    return (
        <div className='LogInForm'>
            <Card body>
                <div className='row'>
                    <div className='col'>
                        <p className='login_title'>Login Students/Accessors</p>
                    </div>
                </div>
                <div className='login'>
                    <form onSubmit={loginFormSubmit}>
                        <div class="row">
                            <label for="username" class="col username">User Name</label>
                            <div class="col">
                            <input type="text"  id="username" placeholder="your user name ..." value={username} onChange={e => setUsername(e.target.value)} />
                            </div>
                        </div>
                        <div class="row">
                            <label for="inputPassword" class="col password">Password</label>
                            <div class="col">
                            <input type="password"  id="inputPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <br />

                        <div class='row'>
                            <div class='col' style={{textAlign:'center'}}>
                                <span>
                                    <input type="submit" className='btn btn-secondary' value="Login" id='login_button' /> 
                                </span>
                                <span>
                                    <input className='btn btn-danger' type="button" value="Forgot Password" id='fp_button' data-toggle="modal" data-target="#exampleModal" />
                                </span>
                            </div>
                        </div>
                    </form>
                    <ForgotPasswordForm />
                </div>
                <br />
                <div className='row'>
                    <div className='col'>
                        <a href='/create_account'><button className='btn btn-info create'>Create Account</button></a>
                    </div>
                </div>
            </Card>
        </div>
    );
}
