import React, { Component } from 'react';
import '../../assets/css/login_form.css'

class LogInForm extends Component {
  render() {
    return (
        <div className='LogInForm'>
            <h5>Login Students/Accessors</h5>
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
                            <input className='btn btn-primary' type="submit" value="Login"/> <input className='btn btn-success' type="submit" value="Forgot Password"/>
                        </span>
                    </div>
                </div>
            </form>
            <br />
            <button className='btn btn-primary create'>Create Account</button>
        </div>
    );
  }
}

export default LogInForm;
