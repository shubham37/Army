import React, { Component } from 'react';
import '../../assets/css/free_test_form.css'

class FreeTestForm extends Component {
  render() {
    return (
      <div className="FreeTestForm">
        <div className='ff'>
          <div className='row'>
              <div className='col'>
                <p className='free_test_title'>Free Test Details</p>
              </div>
          </div>

            <form action="/action_page.php">
                <div className='row'>
                    <div className='col'>
                      <label for="email" className='email_label'>Enter Email/Mobile Number </label>
                    </div>
                    <div className='col'>
                      <input type="text" id="email_number" name="email_number" placeholder="Your email/mobile number..." />
                    </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <label for="otp" className='otp_label'>Enter Password/OTP</label>
                  </div>
                    <div className='col'>
                      <input type="text" id="otp" name="otp" placeholder="Your password/OTP..." />
                    </div>
                </div>

                <br />

                <div className='row'>
                  <div className='col'>
                    <a href='/free_test'><button className='btn btn-info' id='login_btn'>Login</button></a>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
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
