import React, { Component } from 'react';
import '../../assets/css/free_test_form.css'

class FreeTestForm extends Component {
  render() {
    return (
      <div className="FreeTestForm">
        <form action="/action_page.php">
            <div className='row'>
                <div className='col col-md-12'>
                    <label for="email">Enter Email/Mobile Number
                        <input type="text" id="email" name="firstname" placeholder="Your email/mobile number..." />
                    </label>
                </div>
            </div>
            <div className='row'>
                <div className='col col-md-12'>
                    <label for="otp">Enter Password/OTP
                        <input type="text" id="otp" name="lastname" placeholder="Your password/OTP..." />
                    </label>
                </div>
            </div>

            <input className='btn' type="Login" value="LogIN" id='login_btn' /> <br />
            <input className='btn' type="Request OTP" value="Request OTP" id='otp_btn' />

        </form>
    </div>
    );
  }
}

export default FreeTestForm;
