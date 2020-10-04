import React, { Component } from 'react';
import '../../assets/css/forgot_password.css'

class ForgotPasswordForm extends Component {
  render() {
    return (
        <div className='ForgotPasswordForm'>
            <h6  className='forgot_password_title'>Forgot Password</h6>
            <div className='forgot_password'>
                <form>
                    <div class="row">
                        <div class="col-sm-12">
                            <input type="text"  id="current_password" placeholder="Current Password" />
                        </div>
                    </div>
                    <br />

                    <div class="row">
                        <div class="col-sm-12">
                            <input type="password"  id="new_password" placeholder="New Password" />
                        </div>
                    </div>
                    <br />

                    <div class="row">
                        <div class="col-sm-12">
                            <input type="text"  id="confirm_password" placeholder="Confirm New Password" />
                        </div>
                    </div>
                    <br />

                    <div class='row'>
                        <div class='col col-sm-12'>
                            <span>
                                <input className='btn btn-secondary' type="submit" value="Done"/>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

export default ForgotPasswordForm;
