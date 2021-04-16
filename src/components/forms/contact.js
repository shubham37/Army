// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import '../../assets/css/contact.css'
import axios from 'axios';
import { Spinner } from 'react-bootstrap';


export default function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [query, setQuery] = useState("");
    const [msg, setMsg] = useState("");

    const [inprocess, setInprocess] = useState(false);

    function onSubmit(e) {
        e.preventDefault(e);
        setMsg("");
        setInprocess(true);
        const uploadForm = new FormData();
        uploadForm.append("name",name);
        uploadForm.append("email",email);
        uploadForm.append("number",number);
        uploadForm.append("query",query);

        axios.post(`/api/contact/`,uploadForm)
        .then((data) =>{
            if (data.status === 201) {
                setInprocess(false);
                setName("");
                setEmail("");
                setNumber("");
                setQuery("");
                setMsg("Our Team Will Contact You Soon");
            }
            else {
                setMsg("Try Again");
            }
        })
        .catch((error) => {
            console.log(error)
            setInprocess(false);
            setMsg("Try Again");
        });

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <form onSubmit={onSubmit} class='contact'>
                        <br />
                        <p style={{textAlign:'center', fontFamily:'Arial', fontWeight:'bold', fontSize:'small'}}>GET IN TOUCH WITH US</p>
                        <br />
                        <div className='row'>
                            <div className='col-md-4 col-6'>
                                <label for='user_name' className='lab'>Name </label> 
                            </div>
                            <div className='col-md-8 col-6'>
                                <input type='text' placeholder='Full Name' id='user_name' className='query_take' value={name}
                                    onChange={e => (setName(e.target.value))} required />
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-md-4 col-6'>
                                <label for='user_email' className='lab'>Email </label> 
                            </div>
                            <div className='col-md-8 col-6'>
                                <input type='text' placeholder='Email Address' id='user_email' className='query_take' value={email}
                                    onChange={e => (setEmail(e.target.value))} required />
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-md-4 col-6'>
                                <label for='user_number' className='lab'>Mobile </label> 
                            </div>
                            <div className='col-md-8 col-6'>
                                <input type='text' placeholder='Phone Number' id='user_number' className='query_take' value={number}
                                    onChange={e => (setNumber(e.target.value))} required />
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-md-4 col-6'>
                                <label for='user_query' className='lab'>Message </label> 
                            </div>
                            <div className='col-md-8 col-6'>
                                <textarea rows='4' placeholder='Message or Query here...' id='user_query' className='query_take' value={query} 
                                onChange={e => (setQuery(e.target.value))}></textarea>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12 col-12' style={{textAlign: 'center'}}>
                                <button type='submit' className='btn submit'>
                                    <span hidden={inprocess}>
                                        Send
                                    </span>
                                    <span hidden={!inprocess}>
                                        <Spinner animation='border' />
                                    </span>
                                </button>
                                <br />
                                <p hidden={msg? false: true}>{msg}</p>
                            </div>
                        </div>
                        <br />
                    </form>
                </div>

                <div className='col-md-6 col-12'>
                    <p>KNOW ABOUT US</p>
                    <hr />
                    <div>
                        <span style={{ fontSize: 'larger', fontWeight: 'bolder', fontFamily: 'Arial'}}>Our Mission</span><br />
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    </div><br />
                    <div>
                        <span style={{ fontSize: 'larger', fontWeight: 'bolder', fontFamily: 'Arial'}}>Our Vision</span><br />
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}