import React, { Component } from 'react';
import '../../assets/css/login_form.css'
import ForgotPasswordForm  from './forgot_password.js'

class LogInForm extends Component {
  render() {
    return (
        <div className='LogInForm'>
            <p  className='login_title'>Login Students/Accessors</p>
            {/* <div className='row'>
                <div className='col col-md-6  col-sm-6'>
                </div>
            </div>  */}
            <div className='login'>
                <form>
                    <div class="row">
                        <label for="username" class="col col-md-6 col-sm-12">User Name</label>
                        <div class="col-sm-10">
                        <input type="text"  id="username" placeholder="your user name ..." />
                        </div>
                    </div>
                    <div class="row">
                        <label for="inputPassword" class="col col-md-6 col-sm-12">Password</label>
                        <div class="col-sm-10">
                        <input type="password"  id="inputPassword" placeholder="Password" />
                        </div>
                    </div>
                    <br />

                    <div class='row'>
                        <div class='col col-md-6'>
                            <span>
                                <input className='btn btn-primary' type="submit" value="Login"/> <span>
                                    {/* <a href='/forgot_password'> */}
                                        <input className='btn btn-danger' type="button" value="Forgot Password" data-toggle="modal" data-target="#exampleModal" /></span>
                            </span>
                        </div>
                    </div>

                    <ForgotPasswordForm />

                </form>
            </div>
            <br />
            <a href='/create_account'><button className='btn btn-info create'>Create Account</button></a>
        </div>
    );
  }
}

export default LogInForm;
