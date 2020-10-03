import React, { Component } from 'react';
import '../../assets/css/login_form.css'

class LogInForm extends Component {
  render() {
    return (
        <div className='LogInForm'>
            <h6  className='login_title'>Login Students/Accessors</h6>
            <div className='login'>
                <form>
                    <div class="row">
                        <label for="username" class="col col-md-4">User Name</label>
                        <div class="col-sm-10">
                        <input type="text"  id="username" placeholder="your user name ..." />
                        </div>
                    </div>
                    <br />

                    <div class="row">
                        <label for="inputPassword" class="col-sm-2 col-md-6">Password</label>
                        <div class="col-sm-10">
                        <input type="password"  id="inputPassword" placeholder="Password" />
                        </div>
                    </div>
                    <br />

                    <div class='row'>
                        <div class='col col-md-6'>
                            <span>
                                <input className='btn btn-primary' type="submit" value="Login"/> <span><a href='/forgot_password'><input className='btn btn-danger' type="button" value="Forgot Password"/></a></span>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <br />
            <a href='/create_account'><button className='btn btn-primary create'>Create Account</button></a>
        </div>
    );
  }
}

export default LogInForm;
