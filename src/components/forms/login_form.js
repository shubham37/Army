import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../../assets/css/login_form.css'
import ForgotPasswordForm  from './forgot_password.js'

class LogInForm extends Component {
  render() {
    return (
        <div className='LogInForm'>
            <Card body>
                <div className='row'>
                    <div className='col'>
                        <p className='login_title'>Login Students/Accessors</p>
                    </div>
                </div>
                <div className='login'>
                    <form>
                        <div class="row">
                            <label for="username" class="col username">User Name</label>
                            <div class="col">
                            <input type="text"  id="username" placeholder="your user name ..." />
                            </div>
                        </div>
                        <div class="row">
                            <label for="inputPassword" class="col password">Password</label>
                            <div class="col">
                            <input type="password"  id="inputPassword" placeholder="Password" />
                            </div>
                        </div>
                        <br />

                        <div class='row'>
                            <div class='col'>
                                <span>
                                    <input className='btn btn-primary' type="submit" value="Login"/> <span>
                                    <input className='btn btn-danger' type="button" value="Forgot Password" data-toggle="modal" data-target="#exampleModal" /></span>
                                </span>
                            </div>
                        </div>

                        <ForgotPasswordForm />

                    </form>
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
}

export default LogInForm;
