import React, { Component } from 'react';
import '../../assets/css/free_test_form.css'

class FreeTestForm extends Component {
  render() {
    return (
      <div className="FreeTestForm">
        <div className='ff'>
          <p className='free_test_title'>Free Test Details</p>
            <form action="/action_page.php">
                <div className='row'>
                    <label for="email" className='col col-md-6 col-sm-12'>Enter Email/Mobile Number </label><br />
                    <div className='col col-sm-10'>
                            <input type="text" id="email" name="firstname" placeholder="Your email/mobile number..." />
                    </div>
                </div>
                <div className='row'>
                    <label for="otp" className='col col-md-6 col-sm-12'>Enter Password/OTP</label><br />
                    <div className='col col-sm-10'>
                            <input type="text" id="otp" name="lastname" placeholder="Your password/OTP..." />
                    </div>
                </div>

                <input className='btn' type="submit" value="Login" id='login_btn' /> <br />
                <input className='btn' type="button" value="Request OTP" id='otp_btn' />

            </form>
        </div>
    </div>
    );
  }
}

export default FreeTestForm;
