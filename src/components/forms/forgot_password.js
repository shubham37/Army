import React, { Component } from 'react';
import '../../assets/css/forgot_password.css'

class ForgotPasswordForm extends Component {
  render() {
    return (
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Forgot Password</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className='forgot_password'>
                                <form action='/'>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <input type="email"  id="email" placeholder="Enter Your Email.." />
                                        </div>
                                    </div>
                                    <br />
                                    <div class='row'>
                                        <div class='col col-sm-12'>
                                            <span>
                                                <input className='btn btn-danger' type="submit" value="Send Link"/>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                    
        </div>
    );
  }
}

export default ForgotPasswordForm;
