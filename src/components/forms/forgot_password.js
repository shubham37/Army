import React, { useState } from 'react';
import '../../assets/css/forgot_password.css';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';


export default function ForgotPasswordForm() {
 
    const [contact, setContact] = useState("");
    const [linksent, setLinksent] = useState(false);
    const [success, setSuccess] = useState('');
    const [isprocessing, setIsprocessing] = useState(false);
    const [error, setError] = useState('');

    function goHome(e) {
        setIsprocessing(true);
        e.preventDefault(e);
        axios.post(`/api/forgot_password/`, {email: contact})
        .then((data) => {
            if (data.status === 200) {
                setIsprocessing(false);
                setSuccess(data.data.detail);
                setContact("");
                setLinksent(true);
            }
        })
        .catch((error) =>  {
            setIsprocessing(false);
            setError("Email Address Is Not Found.")
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
                                        <div class='col'>
                                            <span hidden={isprocessing}>
                                                <input type='submit' className='btn btn-danger' value="Send Link" />
                                            </span>
                                            <span hidden={!isprocessing}>
                                                <Spinner animation='border' />
                                            </span>
                                            <spen>
                                                <p hidden={error?false:true}>{error}</p>
                                            </spen>
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
