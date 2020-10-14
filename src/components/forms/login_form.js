import React, { Component, useState } from 'react';
import { Card } from 'react-bootstrap';
import  { useHistory, Link, Redirect } from 'react-router-dom'
import '../../assets/css/login_form.css'
import ForgotPasswordForm  from './forgot_password.js'
import axios from "axios";


export default function LogInForm () {
    let history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameerror, setUsernameerror] = useState("");
    const [passworderror, setPassworderror] = useState("");


    function loginFormSubmit () {
        if (username === '' && password === '') {
            setUsernameerror("Username Should Not Be Blank.")
            setPassworderror("Password Should Not Be Blank.")
        } else if (username === '') {
            setUsernameerror("Username Should Not Be Blank.")
            setPassworderror("")
        } else if (password === '') {
            setUsernameerror("")
            setPassworderror("Password Should Not Be Blank.")
        } else {
            axios.post(`/accounts/login/`, {username: username, password: password})
            .then((data) => {
                console.log(data)
                // debugger
                if (data.status === 200) {
                    setUsername('')
                    setPassword('')
                    localStorage.setItem('token', data.data.access_token);
                    localStorage.setItem('role', data.data.role);
                    if (data.data.role === 0) {
                        history.push('/student');
                    } else if (data.data.role === 1) {
                        history.push('/assessor')
                    } else {
                        history.push('/admin_user');
                    }
                    window.location.reload(true)
                } else {
                    console.log(data.statusText)
                    setUsername(username)
                    setUsername(password)
                }
            })
            .catch(error => console.log(error.message))
        }
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
                        <div className="row username-block">
                            <div className="col-md username">
                                <label for="username" className="col-md">User Name</label>
                            </div>
                            <div className="col-md username_input">
                                <input type="text"  id="username" placeholder="your user name ..." value={username} onChange={e => setUsername(e.target.value)} />
                                <br /><p className='error'>{usernameerror}</p>
                            </div>
                        </div>
                        <div className="row password-block">
                            <div className="col-md password">
                                <label for="inputPassword" className="col-md">Password</label>
                            </div>
                            <div className="col-md password_input">
                                <input type="password"  id="inputPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                <br /><p className='error'>{passworderror}</p>
                            </div>
                        </div>
                        <br />

                        <div className='row'>
                            <div className='col' style={{textAlign:'center'}}>
                                <span>
                                    <button className='btn btn-secondry' id='login_button' onClick={loginFormSubmit}> Login </button>
                                    {/* <input className='btn btn-secondry' value="Login" id='login_button' onClick={loginFormSubmit} />  */}
                                </span>
                                <span>
                                    <button className='btn btn-secondry' id='fp_button' data-toggle="modal" data-target="#exampleModal" onClick={loginFormSubmit}> Forgot Password </button>
                                </span>
                            </div>
                        </div>

                    <ForgotPasswordForm />
                </div>

                <div className='row'>
                    <div className='col'>
                        <a href='/create_account'><button className='btn btn-info create'>Create Account</button></a>
                    </div>
                </div>
            </Card>
        </div>
    );
}
