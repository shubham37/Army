import React, { useState } from 'react';
import '../../assets/css/forgot_password.css';
import axios from  'axios';


export default function ForgotPasswordForm() {
 
    const [contact, setContact] = useState("");
    const [contacterror, setContacterror] = useState("");
    const [linksent, setLinksent] = useState(false);
    const [success, setSuccess] = useState('');

    function onChange(e) {
        if (e.target.value === '') {
            setContacterror("Email Should Not be Empty.")
        }
        else {
            setContacterror("")
        }
        setContact(e.target.value);
    }

    function goHome() {
        if (contact === '') {
            setContacterror("Email Should Not be Empty.")
        }
        else {
            axios.post(`/accounts/forgot_password/`, {email: contact})
            .then((data) => {
                console.log(data)
                if (data.status === 200) {
                    setSuccess(data.data.detail);
                    setLinksent(true);
                } else {
                    console.log(data.statusText)
                }
            })
            .catch(error => console.log(error.message))
        }
    }

    function close() {
        setLinksent(false);
        setSuccess("");
        setContacterror("");
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
                                <div class="row">
                                    <div class="col-sm-12">
                                        <input type="email"  id="email_link" placeholder="Enter Your Email.." value={contact} onChange={onChange} />
                                        <br /><span style={{fontSize:'small', color:'red'}}>{contacterror}</span>
                                    </div>
                                </div>
                                <br />
                                <div class='row'>
                                    <div class='col col-sm-12'>
                                        <span>
                                            <button className='btn btn-danger' onClick={goHome}>Send Link</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>                    
        </div>
    );
}
