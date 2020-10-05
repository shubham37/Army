import React, { Component } from 'react';
import '../../assets/css/create_account.css'


class CreateAccount extends Component {
  render() {
    return (
      <div className='container-fluid'>
          <p className='form_header'>Individual Registration <span className='float-right home'><a href='/'><button className='btn btn-info'>Home</button></a></span></p>
          <hr />
          <p><b>GARBAGE/JUNK VALUES IN PROFILE MAY LEAD TO DEACTIVATION</b></p>
          <p className="info_badge">Please use a valid E-Mail ID and mobile number in registration.</p>
          <hr />
          <div>
            <form>
                <div className='row'>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>User Name <span className='required_symbol'>*</span> : </label> 
                        <input type='text' placeholder='User Name' name='user_name' className='input_take' />
                    </div>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Password <span className='required_symbol'>*</span> : </label>
                        <input type='password' placeholder='Password' name='password' className='input_take' />
                    </div>
                </div>
                <hr />

                <div className='row'>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Confirm Password <span className='required_symbol'>*</span> : </label>
                        <input type='password' placeholder='Confirm Password' name='confirm_password' className='input_take' />
                    </div>
                </div>
                <hr />

                <div className='row'>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Security Question <span className='required_symbol'>*</span> : </label>
                        <input type='text' placeholder='Security Question' name='security_question' className='input_take' />
                    </div>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Security Answer <span className='required_symbol'>*</span> : </label>
                        <input type='text' placeholder='Security Answer' name='security_answer' className='input_take' />
                    </div>
                </div>
                <hr />

                {/* Personal Details */}
                <div class="alert alert-primary" role="alert"> Personal Details </div>

                <div className='row'>
                    <div className='col col-md-3 col-sm-6 col-xs-6'>
                        <label>Name <span className='required_symbol'>*</span> : </label>
                    </div>
                    <div className='col col-md-3 col-sm-6 col-xs-6 cls'>
                        <input type='text' placeholder='First Name' name='first_name' className='input_take_cls' />
                    </div>
                    <div className='col col-md-3 col-sm-6 col-xs-6 cls'>
                        <input type='text' placeholder='Middle Name [Optional]' name='middle_name' className='input_take_cls' />
                    </div>
                    <div className='col col-md-3 col-sm-6 col-xs-6 cls'>
                        <input type='text' placeholder='Last Name [Optional]' name='last_name' className='input_take_cls' />
                    </div>
                </div>
                <hr  />

                <div className='row'>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Gender <span className='required_symbol'>*</span> : </label>
                        <input type='text' placeholder='User Name' name='user_name' className='input_take' />
                    </div>
                </div>
                <hr />

                <div className='row'>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Date Of Birth <span className='required_symbol'>*</span> : </label>
                        <input type='text' placeholder='Date Of Birth' name='dob' className='input_take' />
                    </div>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Occupation <span className='required_symbol'>*</span> : </label>
                        <input type='text' placeholder='Occupation' name='user_name' className='input_take' />
                    </div>
                </div>
                <hr  />

                <div className='row'>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Marital Status (Optional) <span className='required_symbol'>*</span> : </label>
                        <input type='text' placeholder='User Name' name='user_name' className='input_take' />
                    </div>
                </div>
                <hr  />

                <div className='row'>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Mobile <span className='required_symbol'>*</span> : </label>
                        <input type='tel' placeholder='Mobile' name='mobile' className='input_take' />
                    </div>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Email <span className='required_symbol'>*</span> : </label>
                        <input type='email' placeholder='Email' name='email' className='input_take' />
                    </div>
                </div>
                <hr />

                {/* Residential Address */}
                <div class="alert alert-primary" role="alert"> Residential Address </div>

                <div className='row'>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Flat/Door/Block <span className='required_symbol'>*</span> : </label>
                        <textarea id="flat" name="flat" rows="1" cols="30" className='input_take' ></textarea>
                    </div>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Street/Lane (Optional) <span className='required_symbol'>*</span> : </label>
                        <textarea id="flat" name="flat" rows="1" cols="30" className='input_take' ></textarea>
                    </div>
                </div>
                <hr />

                <div className='row'>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Area/Locality (Optional) <span className='required_symbol'>*</span> : </label>
                        <textarea id="flat" name="flat" rows="1" cols="30" className='input_take' ></textarea>
                    </div>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Pin code <span className='required_symbol'>*</span> : </label>
                        <input type='tel' placeholder='Pin code' name='picode' className='input_take' />
                    </div>
                </div>
                <hr />

                <div className='row'>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>State <span className='required_symbol'>*</span> : </label>
                        <input type='text' placeholder='State' name='state' className='input_take' />
                    </div>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>City/Town <span className='required_symbol'>*</span> : </label>
                            <select name="Select City/Town" id="city" className='input_take'>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>                      
                    </div>
                </div>
                <hr />

                <div className='row'>
                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Post Office <span className='required_symbol'>*</span> : </label>
                            <select name="Select a Post Office" id="postoffice" className='input_take'>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>                      
                    </div>

                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                        <label>Phone <span className='required_symbol'>*</span> : </label>
                        <input type='tel' placeholder='Phone' name='phone' className='input_take' />
                    </div>
                </div>
                <hr />

                <div className='row submit_btn'>
                    <div className='col'>
                        <input type='submit' className='btn btn-success' value='REGISTER' />
                    </div>
                </div>
            </form>
          </div>
        </div>
      );
  }
}

export default CreateAccount;
