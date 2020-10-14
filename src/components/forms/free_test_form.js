import React from 'react';
import '../../assets/css/free_test_form.css'

export default function FreeTestForm() {
  return (
    <div className="FreeTestForm">
      <div className='ff'>
        <div className='row'>
            <div className='col-md'>
              <p className='free_test_title'>Free Test Details</p>
            </div>
        </div>

        <div className='inside'>
          <form action="/action_page.php">
              <div className='row mobile-block'>
                  <div className='col-md'>
                    <label for="email_number" className='email_label'>Email/Mobile Number </label>
                  </div>
                  <div className='col-md'>
                    <input type="text" id="email_number" name="email_number" placeholder="Your email/mobile number..." />
                  </div>
              </div>
              <div className='row otp-block'>
                <div className='col-md'>
                  <label for="otp" className='otp_label'>Password/OTP</label>
                </div>
                  <div className='col-md'>
                    <input type="text" id="otp" name="otp" placeholder="Your password/OTP..." />
                  </div>
              </div>

              <br />

              <div className='row'>
                <div className='col-md' style={{textAlign:'center'}}>
                  <a href='/free_test'><button className='btn btn-info' id='login_btn'>Login</button></a>
                </div>
              </div>
              <div className='row'>
                <div className='col-md' style={{textAlign:'center'}}>
                  <input className='btn' type="button" value="Request OTP" id='otp_btn' />
                </div>
              </div>
          </form>
        </div>

      </div>
    </div>
  );
}
