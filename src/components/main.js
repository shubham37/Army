import React, { Component } from 'react';
import '../assets/css/main.css'
import ForgotPasswordForm from './forms/forgot_password.js'
import { Card, Button, Spinner } from 'react-bootstrap';
import axios from "axios";
import {Redirect} from'react-router-dom';

class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      is_free_test_hidden:true,
      is_login_hidden:false,
      username:"",
      password:"",
      email_number:"",
      otp:null,
      free_test_disable:false,
      is_disable:true,
      role:null,
      login_error:'',
      free_test_error:'',
      is_free_test_error_hidden:true,
      time_part1: {},
      seconds_part1: 0,
      is_spinner_hidden: true
    }
    this.timer_part1 = 0;
    this.loginFormSubmit = this.loginFormSubmit.bind(this);
    this.onSendOtp = this.onSendOtp.bind(this);
    this.verify_otp = this.verify_otp.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentWillMount(){
    if (localStorage.getItem('token') && localStorage.getItem('role')){
        this.setState({
          role:localStorage.getItem('role')
        });
    }
    else {
        localStorage.clear();
        this.setState({role:null});
    }
}


  loginFormSubmit (e) {
    this.setState({is_spinner_hidden:false});
    e.preventDefault(e);
    axios.post(`/api/login/`,{username: this.state.username, password: this.state.password})
    .then((data) => {
      this.setState({is_spinner_hidden:true});
      if (data.status === 200) {
        localStorage.setItem('token', data.data.access_token);
        localStorage.setItem('role', data.data.role);
        this.setState({
          username:"",
          password:"",
          role:data.data.role
        });
      } else {
        this.setState({
          login_error: "Please Try Again."
        });
        // console.log(data);
        }
      })
      .catch((error) => {
        this.setState({
          login_error: 'Username or Password Not Match.',
          is_spinner_hidden: true
        });
        // console.log(error);
      })
    }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }
  
  onSendOtp(e) {
    this.setState({is_spinner_hidden:false});
    e.preventDefault(e);
    axios.post(`/api/send_otp/`,
      {email: this.state.email_number}
    ).then((data) => {
      this.setState({is_spinner_hidden:true});
      if (data.status === 200) {
        let timeLeftVar = this.secondsToTime(30);
        this.setState({
          free_test_error: data.data.detail,
          is_disable:false,
          time_part1: timeLeftVar,
          seconds_part1: 30
        });
        localStorage.setItem('otp', data.data.OTP)

        if (this.timer_part1 === 0 && this.state.seconds_part1 > 0) {
          this.timer_part1 = setInterval(this.countDown, 1000);
        }
      } else {
          this.setState({
            free_test_error: "Please Try Again."
          });
        }
      })
      .catch((error) => {
        this.setState({
          free_test_error: "Incorrect Email Address.",
          is_spinner_hidden: true
        });
      });
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds_part1 - 1;
    this.setState({
      time_part1: this.secondsToTime(seconds),
      seconds_part1: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      this.timer_part1 = 0;
      this.setState({
        is_disable:true,
        free_test_error: ''
      });
    }
  }

  verify_otp(e) {
    e.preventDefault();
    const local_otp = localStorage.getItem('otp');
    if (local_otp === this.state.otp) {
      this.setState({
        is_free_test_now: true
      });
    } else {
      this.setState({
        free_test_error: "OTP Not Matched.Please Try Again.",
        otp: null,
        is_disable: true
      });
      localStorage.removeItem('otp');
    }
  }

  render() {
    if (this.state.role === 0) {
      return <Redirect to='/student' />
    }
    else if (this.state.role === 1) {
      return <Redirect to='/assessor' />
    }
    else if (this.state.role === 2) {
      return <Redirect to='/admin_user' />
    }
    else if  (this.state.is_free_test_now) {
      return <Redirect to='/free_test_instruction' />
    }
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
                        <input type="text" id="email_number" name="email_number" placeholder="Your email/mobile number..." value={this.state.email_number} disabled={!this.state.is_disable} onChange={(e) => this.setState({email_number:e.target.value})} required />
                      </div>
                  </div>
                  <div className='row otp-block' hidden={this.state.is_disable}>
                    <div className='col-md'>
                      <label for="otp" className='otp_label'>Password/OTP</label>
                    </div>
                    <div className='col-md'>
                      <input type="text" id="otp" name="otp" placeholder="Your password/OTP..." value={this.state.otp} onChange={(e) => this.setState({otp:e.target.value})} />
                    </div>
                  </div>

                  <br />

                  <div className='row' hidden={this.state.is_disable}>
                    <div className='col-md' style={{textAlign:'center'}}>
                      <button className='btn btn-info' id='login_btn' onClick={this.verify_otp} >Login</button>
                    </div>
                  </div>
                  <div className='row' hidden={!this.state.is_disable}>
                    <div className='col-md' style={{textAlign:'center'}}>
                      <input className='btn' type="button" onClick={this.onSendOtp} value="Request OTP" id='otp_btn' />
                    </div>
                  </div>
                  <div className='row container' style={{textAlign:'center', fontWeight:'bolder', width:'100%', fontSize:'small', color:'white'}} hidden={this.state.is_disable}>
                    <p><Spinner animation='border' hidden={this.state.is_spinner_hidden} /></p>
                    <p>Remaining Time {this.state.time_part1.m} : {this.state.time_part1.s}</p>
                    <p hidden={this.state.free_test_error?false:true}>{this.state.free_test_error}</p>
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
                                <input type="text"  id="username" placeholder="Enter Your Username/Email" value={this.state.username} onChange={e => this.setState({username:e.target.value})} required />
                                {/* <br /><p className='error'>{usernameerror}</p> */}
                            </div>
                        </div>
                        <div className="row password-block">
                            <div className="col-md password">
                                <label for="inputPassword" className="col-md">Password</label>
                            </div>
                            <div className="col-md password_input">
                                <input type="password"  id="inputPassword" placeholder="Enter Your Password" value={this.state.password} onChange={e => this.setState({password:e.target.value})} required />
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
                <div className='row'>
                  <div className='col'>
                    <p  hidden={this.state.is_spinner_hidden}><Spinner animation='border' /></p>
                    <p style={{textAlign:'center',width:'100%', fontWeight:'bolder', fontSize:'small', color:'red'}}>{this.state.login_error}</p>
                  </div>
                </div>

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
