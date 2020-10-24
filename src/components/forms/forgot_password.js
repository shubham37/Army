import React, { useState } from 'react';
import '../../assets/css/forgot_password.css';
import axios from 'axios';


export default function ForgotPasswordForm() {
 
    const [contact, setContact] = useState("");
    const [linksent, setLinksent] = useState(false);
    const [success, setSuccess] = useState('');

    function goHome() {
        axios.post(`/api/forgot_password/`, {email: contact})
        .then((data) => {
            debugger
            // console.log(data)
            if (data.status === 200) {
                setSuccess(data.data.detail);
                setLinksent(true);
                setContact("");
            }
        })
        .catch((error) =>  {
            console.log(error.message)
        })
    }

    function close() {
        setLinksent(false);
        setSuccess("");
        setContact("");
    }

    return (
        <div>
            <div class="modal fade" id="exampleModal" role="dialog" backdrop="true" keyboard='false'>
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Forgot Password</h5>
                            <button type="button" class="close" data-dismiss="modal" onClick={close}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            { linksent ? 
                            <div className='forgot_password'>
                                <h5>{success}</h5>
                            </div>
                            : 
                            <div className='forgot_password'>
                                <form onSubmit={goHome}>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <input type="email"  id="email_link" placeholder="Enter Your Email.." value={contact} onChange={(e) => setContact(e.target.value)} required />
                                        </div>
                                    </div>
                                    <br />
                                    <div class='row'>
                                        <div class='col col-sm-12'>
                                            <span>
                                                <input type='submit' className='btn btn-danger' value="Send Link" />
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>                    
        </div>
    );
}
