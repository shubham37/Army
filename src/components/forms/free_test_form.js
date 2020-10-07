import React, { Component } from 'react';
import '../../assets/css/free_test_form.css'

class FreeTestForm extends Component {
  render() {
    return (
      <div className="FreeTestForm">
        <div className='ff'>
          <div className='row'>
              <div className='col col-md-6 col-sm-12 col-xs-12'>
                <p className='free_test_title'>Free Test Details</p>
              </div>
          </div>

            <form action="/action_page.php">
                <div className='row'>
                    <label for="email" className='col col-md-6 col-sm-12'>Enter Email/Mobile Number </label>
                    <div className='col col-sm-10'>
                            <input type="text" id="email_number" name="email_number" placeholder="Your email/mobile number..." />
                    </div>
                </div>
                <div className='row'>
                    <label for="otp" className='col col-md-6 col-sm-12'>Enter Password/OTP</label>
                    <div className='col col-sm-10'>
                            <input type="text" id="otp" name="otp" placeholder="Your password/OTP..." />
                    </div>
                </div>

                <br />

                <div className='row'>
                  <div className='col col-md-6 col-sm-12 col-xs-12'>
                    <a href='/free_test'><button className='btn btn-info' id='login_btn'>Login</button></a>
                      {/* <input className='btn' type="submit" value="Login" id='login_btn' /> */}
                  </div>
                </div>
                <div className='row'>
                  <div className='col col-md-6 col-sm-12 col-xs-12'>
                    <input className='btn' type="button" value="Request OTP" id='otp_btn' />
                  </div>
                </div>


            </form>
        </div>
    </div>
    );
  }
}

export default FreeTestForm;
