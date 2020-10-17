import React, { Component } from 'react';
import '../assets/css/main.css'
import ForgotPasswordForm from './forms/forgot_password.js'
import { Card, Button } from 'react-bootstrap';
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_free_test_hidden:true,
      is_login_hidden:false,
      username:"",
      password:"",
      free_test_disable:false,
      is_disable:true
    }
    this.loginFormSubmit = this.loginFormSubmit.bind(this);
    this.onSendOtp = this.onSendOtp.bind(this);
  }


  loginFormSubmit () {
    axios.post(`/accounts/login/`, 
      {username: this.state.username, password: this.state.password}
    ).then((data) => {
        console.log(data);
        // debugger
        if (data.status === 200) {
          this.setState({
            username:"",
            password:""
          });
          localStorage.setItem('token', data.data.access_token);
          localStorage.setItem('role', data.data.role);
          if (data.data.role === 0) {
            console.log(data);
          } else if (data.data.role === 1) {
            console.log(data);
          } else {
            console.log(data);
          }
          window.location.reload(true)
        } else {
            console.log(data);
        }
      })
      .catch(error => console.log(error.message))
  }

  onSendOtp() {
    this.setState({
      is_disable:false
    });
  }

  render() {
    return (
      <div className="row">

        <div className='col-md FreeTest'>
          <div  className='row'>
            <div className='col-md-11 offset-md-1'>
              <img src={require('../assets/images/meter.jpg')} alt='meter' width='100%' />
            </div>
          </div>
          <div  className='row'>
            <div className='col-md-11 offset-md-1' style={{textAlign:'center'}}>
              <Button className='btn free_btn' onClick={e => this.setState({is_free_test_hidden:false, is_login_hidden:true, free_test_disable:true})} 
              disabled={this.state.free_test_disable} >Free Test Me</Button>
            </div>
          </div>
        </div>

        <div className='col-md form_section'>

          {/* Free Form Start */}
          <div className="FreeTestForm" hidden={this.state.is_free_test_hidden}>
            <div className='ff'>
  
              <div className='row'>
                <div className='col-md'>
                  <p className='free_test_title'>Free Test Details</p>
                </div>
              </div>

            <div className='inside'>
              <form onSubmit={this.onSendOtp}>
                  <div className='row mobile-block'>
                      <div className='col-md'>
                        <label for="email_number" className='email_label'>Email/Mobile Number </label>
                      </div>
                      <div className='col-md'>
                        <input type="text" id="email_number" name="email_number" placeholder="Your email/mobile number..." required />
                      </div>
                  </div>
                  <div className='row otp-block'>
                    <div className='col-md'>
                      <label for="otp" className='otp_label'>Password/OTP</label>
                    </div>
                      <div className='col-md'>
                        <input type="text" id="otp" name="otp" placeholder="Your password/OTP..." disabled={this.state.is_disable} />
                      </div>
                  </div>

                  <br />

                  <div className='row'>
                    <div className='col-md' style={{textAlign:'center'}}>
                      <a href='/free_test'><button className='btn btn-info' id='login_btn' disabled={this.state.is_disable} >Login</button></a>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md' style={{textAlign:'center'}}>
                      <input className='btn' type="button" onClick={this.onSendOtp} value="Request OTP" id='otp_btn' disabled={!this.state.is_disable} />
                    </div>
                  </div>
              </form>
            </div>

          </div>
        </div>

        {/* Login Form */}

          <div className='LogInForm' hidden={this.state.is_login_hidden}>
            <Card body>
                <div className='row'>
                    <div className='col'>
                        <p className='login_title'>Login Students/Accessors</p>
                    </div>
                </div>
                <div className='login'>
                    <form onSubmit={this.loginFormSubmit}>
                        <div className="row username-block">
                            <div className="col-md username">
                                <label for="username" className="col-md">User Name</label>
                            </div>
                            <div className="col-md username_input">
                                <input type="text"  id="username" placeholder="your user name ..." value={this.state.username} onChange={e => this.setState({username:e.target.value})} required />
                                {/* <br /><p className='error'>{usernameerror}</p> */}
                            </div>
                        </div>
                        <div className="row password-block">
                            <div className="col-md password">
                                <label for="inputPassword" className="col-md">Password</label>
                            </div>
                            <div className="col-md password_input">
                                <input type="password"  id="inputPassword" placeholder="Password" value={this.state.password} onChange={e => this.setState({password:e.target.value})} required />
                                {/* <br /><p className='error'>{passworderror}</p> */}
                            </div>
                        </div>
                        <br />

                        <div className='row'>
                            <div className='col' style={{textAlign:'center'}}>
                                <span>
                                    <input type='submit' className='btn btn-secondry' id='login_button' value='Login' /> 
                                </span>
                            </div>
                        </div>
                    </form>
                    <ForgotPasswordForm />
                </div>
                <br />

                <div className='row'>
                    <div className='col'>
                        <button className='btn-secondry' id='fp_button' data-toggle="modal" data-target="#exampleModal"> Forgot Password </button>
                    </div>
                    <div className='col'>
                      <a href='/create_account'><button className='btn btn-info create'>Create Account</button></a>
                    </div>
                </div>
            </Card>
        </div>

        </div>
      
      </div>
    );
  }
}

export default Main;
