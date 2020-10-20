// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import '../../assets/css/create_account.css'
import axios from 'axios';
import { useHistory } from 'react-router';


export default function CreateAccount() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [sanswer, setSanswer] = useState("");
    const [firstname, setFirstname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [lastname, setLastname] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [flat, setFlat] = useState("");
    const [street, setStreet] = useState("");
    const [area, setArea] = useState("");
    const [phone, setPhone] = useState("");

    const [error, setError] = useState("");
    const [notfilled, setNofilled] = useState(true);

    const [statet, setStatet] = useState("")
    const [city, setCity] = useState("")
    const [pincode, setPincode] = useState("")
    const [postoffice, setPostoffice] = useState("")
    const [squestion, setSquestion] = useState("")
    const [gender, setGender] = useState("")
    const [occupation, setOccupation] = useState("")
    const [marital, setMarital] = useState("")    

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [pincodes, setPincodes] = useState([]);
    const [postoffices, setPostoffices] = useState([]);

    const [plan,setPlan] =  useState(0);
    const [hide,setHide] =  useState(false);
    const [errorplan, setErrorplan] = useState("")
    let history = useHistory();


    useEffect( () => {
        axios.get(`/student_api/state/`)
        .then((response) => {
            if (response.data.is_success) {
                setStates(response.data.states);
            } else {
                setStates([]);
            }
        })
        .catch(error => console.log(error.message))
     }, []);

    function SecurityQuestion(){
        const security_questions = [ 
            {id:"", value:'Choose One'},
            {id:1, value:'SQ1'},
            {id:2, value:'SQ2'}
        ];
        const squestions = security_questions.map((sq) =>
            <option value={sq.id}>{sq.value}</option>        
        );
        return squestions
    }

    function Gender(){
        const gender_choices = [ 
            {id:"", value:'Choose One'},
            {id:1, value:'Male'},
            {id:2, value:'Female'}
        ];
        const genders = gender_choices.map((gender) =>
            <option value={gender.id}>{gender.value}</option>        
        );
        return genders
    }

    function Occupation(){
        const occupation_choices = [ 
            {id:"", value:'Choose One'},
            {id:1,value:'Software Enginner'},
            {id:2,value:'Software Developer'}
        ];
        const occupations = occupation_choices.map((occupation) =>
            <option value={occupation.id}>{occupation.value}</option>        
        );
        return occupations
    }


    function StateOption(){
        const st = states.map((state) =>
            <option value={state.id} >{state.state_name}</option>        
        );
        return st
    }


    function CityOption(){
        const ct = cities.map((city) =>
            <option value={city.id}>{city.city_name}</option>        
        );
        return ct
    }


    function PincodeOption(){
        const pc = pincodes.map((pincode) =>
            <option value={pincode.id}>{pincode.pincode}</option>        
        );
        return pc
    }


    function PostofficeOption(){
        const po = postoffices.map((postoffice) =>
            <option value={postoffice.id}>{postoffice.po_name}</option>        
        );
        return po
    }


    function MaritalOption(){
        const marital_choices = [
            {id:0, name:'Choose One'},
            {id:1, name:'Single'},
            {id:2, name:'Married'}
        ];
        const maritals = marital_choices.map((marital) =>
            <option value={marital.id}>{marital.name}</option>        
        );
        return maritals
    }

    function onSelectGender(e) {
        setGender(e.target.value)
    }

    function onSelectMarital(e) {
        setMarital(e.target.value)
    }

    function onSelectOccupation(e) {
        setOccupation(e.target.value)
    }

    function onSelectSquestion(e) {
        setSquestion(e.target.value)
    }
    
    function onSelectState(e) {
        axios.get(`/student_api/state/`+e.target.value)
        .then((response) => {
            if (response.data.length >0) {
                setCities(response.data);
            } else {
                setCities([]);
            }
        })
        .catch(error => console.log(error.message))

        setStatet(e.target.value)
    }


    function onSelectCity(e) {
        axios.get(`/student_api/city/`+ e.target.value)
        .then((response) => {
            if (response.data.length >0) {
                setPincodes(response.data);
            } else {
                setPincodes([]);
            }
        })
        .catch(error => console.log(error.message))

        setCity(e.target.value)
    }


    function onSelectPincode(e) {
        axios.get(`/student_api/pincode/`+ e.target.value)
        .then((response) => {
            if (response.data.length >0) {
                setPostoffices(response.data);
            } else {
                setPostoffices([]);
            }
        })
        .catch(error => console.log(error.message))

        setPincode(e.target.value)
    }


    function onSelectPostoffice(e) {
        setPostoffice(e.target.value)
    }


    function onSubmit(e) {
        e.preventDefault();
        let params = {
            username:username, password:password,
            confirmpassword:confirmpassword,
            squestion:squestion, sanswer:sanswer, 
            firstname:firstname, middlename:middlename,
            lastname:lastname, gender:gender,
            dob:dob, occupation:occupation,
            marital:marital, mobile:mobile,
            email:email, flat:flat,
            street:street, area:area,
            statet:statet, city:city,
            pincode:pincode, postoffice:postoffice,
            phone:phone
        }
        console.log(params);
        if (password === confirmpassword) {
            axios.post(`/api/signup/`,params)
            .then((data) =>{
                if (data.status === 201) {
                    console.log(data)
                    const local_data = JSON.parse(data.data);

                    localStorage.setItem('token', local_data.token);
                    localStorage.setItem('role', local_data.role);
                    setNofilled(false);
                    setHide(false);
                }
                else {
                    setError(data.data);
                }
            })
            .catch(error => console.log(error.message));
        }
        else {
            setError("Password and Confirm Password Should Be Same. Please Check")
        }
    }

    function onChoosePlan(e) {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
        axios.post(
            `/api/select_plan/`,
            {
                plan:plan
            },
            {
                headers: headers
            }
        )
        .then((data) =>{
            if (data.status === 200) {
                console.log(data);
                setNofilled(true);
                setHide(true);
                history.push('/student');
            } else {
                setErrorplan(data.data);
            }
        })
        .catch(error => console.log(error.message));
    }


    return (
        <div className='container-fluid'>
            <div className='row header_line'>
                <div className='col'>
                    <p className='form_header'>Individual Registration </p>
                </div>
                <div className='col'>
                    <span className='float-right home'><a href='/'><button className='btn btn-info'>Home</button></a></span>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                <p><b>GARBAGE/JUNK VALUES IN PROFILE MAY LEAD TO DEACTIVATION</b></p>
                <p className="info_badge">Please use a valid E-Mail ID and mobile number in registration.</p>
                <hr />
                </div>
            </div>
            {
                notfilled
                ?
                <div className='row'>
                    <div className='col'>
                     <form onSubmit={onSubmit}>
                        <div className='row'>
                            <div className='col-md block_view'>
                                <label for='user_name'>User Name <span className='required_symbol'>*</span> : </label> 
                                <input type='text' placeholder='User Name' id='user_name' className='input_take' value={username} pattern='^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$'
                                title='username is 8-20 characters long, no _ or . at the beginning, no __ or _. or ._ or .. inside, no _ or . at the end' onChange={e => (setUsername(e.target.value))} required />
                            </div>
                            <div className='col-md block_view'>
                                <label for='password'>Password <span className='required_symbol'>*</span> : </label>
                                <input type='password' placeholder='Password' id='password' className='input_take' value={password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={e => (setPassword(e.target.value))} required />
                            </div>
                        </div>
                        <hr />

                        <div className='row'>
                            <div className='col col-md-6 block_view'>
                                <label for='confirm_password'>Confirm Password <span className='required_symbol'>*</span> : </label>
                                <input type='text' placeholder='Confirm Password' id='confirm_password' className='input_take' value={confirmpassword} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={e => (setConfirmpassword(e.target.value))} required />
                            </div>
                        </div>
                        <hr />

                        <div className='row'>
                            <div className='col-md block_view'>
                                <label for='security_question'>Security Question <span className='required_symbol'>*</span> : </label>
                                <select value={squestion} id="security_question" className='input_take'  onChange={onSelectSquestion} required>
                                    <SecurityQuestion />
                                </select>
                            </div>
                            <div className='col-md block_view'>
                                <label for='security_answer'>Security Answer <span className='required_symbol'>*</span> : </label>
                                <input type='text' placeholder='Security Answer' id='security_answer' className='input_take' value={sanswer} onChange={e => (setSanswer(e.target.value))} required />
                            </div>
                        </div>
                        <hr />

                        {/* Personal Details */}
                        <div class="alert alert-primary" role="alert"> Personal Details </div>

                        <div className='row'>
                            <div className='col-md block_view'>
                                <label for='first_name'>Name <span className='required_symbol'>*</span> : </label>
                                <input type='text' placeholder='FirstName' id='first_name' className='input_take' value={firstname} pattern='^[A-Za-z]+$' 
                                title="Only 1 to 10 length Alphabetic." maxLength={10} onChange={e => (setFirstname(e.target.value))} required />
                            </div>
                            <div className='col-md block_view'>
                                <input type='text' placeholder='MiddleName [optional]' id='middle_name' className='input_take float-left' style={{width:'45%'}} value={middlename} onChange={e => (setMiddlename(e.target.value))} />
                                <input type='text' placeholder='LastName [optional]' id='last_name' className='input_take' value={lastname} onChange={e => (setLastname(e.target.value))} />
                            </div>

                        </div>

                        <hr  />

                        <div className='row'>
                            <div className='col col-md-6 block_view'>
                                <label for='gender'>Gender <span className='required_symbol'>*</span> : </label>
                                <select value={gender} id="gender" className='input_take' onChange={onSelectGender} required>
                                    <Gender />
                                </select>
                            </div>
                        </div>
                        <hr />

                        <div className='row'>
                            <div className='col-md block_view'>
                                <label for='dob'>Date Of Birth <span className='required_symbol'>*</span> : </label>
                                <input type='text' placeholder='YYYY-MM-DD' id='dob' className='input_take' value={dob} pattern="^\d{4}-\d{1,2}-\d{1,2}$" onChange={e => (setDob(e.target.value))} required />
                            </div>
                            <div className='col-md block_view'>
                                <label for='occupation'>Occupation <span className='required_symbol'>*</span> : </label>
                                <select value={occupation} id="occupation" className='input_take' onChange={onSelectOccupation} required >
                                    <Occupation />
                                </select>
                            </div>
                        </div>
                        <hr  />

                        <div className='row'>
                            <div className='col col-md-6 block_view'>
                                <label for='marital'>Marital Status (Optional) : </label>
                                <select value={marital} id="marital" className='input_take' onChange={onSelectMarital} >
                                    <MaritalOption />
                                </select>
                            </div>
                        </div>
                        <hr  />

                        <div className='row'>
                            <div className='col-md block_view'>
                                <label for='mobile'>Mobile <span className='required_symbol'>*</span> : </label>
                                <input type='text' placeholder='Mobile' id='mobile' className='input_take' value={mobile} pattern="^(\+\d{1,3}[- ]?)?\d{10}$" onChange={e => (setMobile(e.target.value))} required />
                            </div>
                            <div className='col-md block_view'>
                                <label for='email'>Email <span className='required_symbol'>*</span> : </label>
                                <input type='email' placeholder='Email' name='email' className='input_take' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={email} onChange={e => (setEmail(e.target.value))} required />
                            </div>
                        </div>
                        <hr />

                        {/* Residential Address */}
                        <div class="alert alert-primary" role="alert"> Residential Address </div>

                        <div className='row'>
                            <div className='col-md block_view'>
                                <label for='flat'>Flat/Door/Block <span className='required_symbol'>*</span> : </label>
                                <input type='text' placeholder='Enter flat/block' id='flat' className='input_take' value={flat} onChange={e => (setFlat(e.target.value))} required />
                            </div>
                            <div className='col-md block_view'>
                                <label for='street'>Street/Lane (Optional) : </label>
                                <input type='text' placeholder='Enter Street/Lane' id='street' className='input_take' value={street} onChange={e => (setStreet(e.target.value))} />
                            </div>
                        </div>
                        <hr />

                        <div className='row'>
                            <div className='col-md block_view'>
                                <label for='area'>Area/Locality (Optional) : </label>
                                <textarea id="area" rows="1" cols="30" className='input_take' value={area} onChange={e => (setArea(e.target.value))} ></textarea>
                            </div>
                            <div className='col-md block_view'>
                                <label for='state'>State <span className='required_symbol'>*</span> : </label>
                                <select value={statet} id="state" className='input_take'  onChange={onSelectState} required>
                                    <option value="">Choose One</option>
                                    <StateOption />
                                </select>
                            </div>
                        </div>
                        <hr />

                        <div className='row'>
                            <div className='col-md block_view'>
                                <label for='city'>City/Town <span className='required_symbol'>*</span> : </label>
                                <select value={city} id="city" className='input_take' onChange={onSelectCity} required>
                                    <option value="">Choose One</option>
                                    <CityOption />
                                </select>                      
                            </div>
                            <div className='col-md block_view'>
                                <label for='pincode'>Pin code <span className='required_symbol'>*</span> : </label>
                                <select value={pincode} id="pincode" className='input_take' onChange={onSelectPincode} required>
                                    <option value="">Choose One</option>
                                    <PincodeOption />
                                </select>                             
                            </div>
                        </div>
                        <hr />

                        <div className='row'>
                            <div className='col-md block_view'>
                                <label for='postoffice'>Post Office <span className='required_symbol'>*</span> : </label>
                                <select value={postoffice} id="postoffice" className='input_take'  onChange={onSelectPostoffice} required>
                                    <option value="">Choose One</option>
                                    <PostofficeOption />
                                </select>                      
                        </div>

                            <div className='col-md block_view'>
                                <label for='phone'>Phone <span className='required_symbol'>*</span> : </label>
                                <input type='text' placeholder='Phone' id='phone' className='input_take' value={phone} pattern='^[0-9]\d{2,4}-\d{6,8}$' onChange={e => (setPhone(e.target.value))} required />
                            </div>
                        </div>
                        <hr />

                        <div className='row submit_btn'>
                            <div className='col'>
                                <input type='submit' className='btn register' value='REGISTER' />
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
                :
                <div className='row'>
                    <div style={{textAlign:'center'}} className='container'>
                        <p style={{color:'white', fontWeight:'bolder', boxShadow:'15% 15% 15% 15% black', padding:'1%', margin:'0 2%', borderRadius:'4px', backgroundColor:'green'}} hidden={hide} >Form Submit Successfully. 
                        <span><button type="button" class='close' onClick={e => setHide(true)} style={{color:'white'}}><span aria-hidden="true">&times;</span></button></span></p>
                    </div>
                    <br />
                    <p style={{textAlign:'center', width:'100%', marginTop:'1%'}}>
                        <form onSubmit={onChoosePlan}> 
                            <label for='plan'>Select Your Plan</label>
                            <br />
                            <select value={plan} id='plan' onChange={e => setPlan(e.target.value)} style={{width:'300px', padding:'1%', border:'2px solid black', backgroundColor:'white', borderRadius:'3px'}}>
                                <option value={0} data-toggle="tooltip" data-placement="right" title="Tooltip on right" >Basic [*Free]</option>
                                <option value={1} data-toggle="tooltip" data-placement="right" title="Tooltip on right" >Diamond</option>
                                <option value={2} data-toggle="tooltip" data-placement="right" title="Tooltip on right" >Gold</option>
                                <option value={3} data-toggle="tooltip" data-placement="right" title="Tooltip on right" >Silver</option>
                                <option value={4} data-toggle="tooltip" data-placement="right" title="Tooltip on right" >Institutional</option>
                            </select>
                            <br />
                            <input type='submit' className='btn' value='Get Started' style={{marginTop:'20px', backgroundColor:'lightseagreen', padding:'2%, 0', color:'white', boxShadow:"3px 3px 3px 3px lightgray", fontWeight:'bolder'}} />
                        </form>
                    </p>
                    <br />
                    <p style={{color:'red', fontWeight:'bolder', fontSize:'larger'}}>{errorplan}</p>
                </div>
            }
            <div className='row container'>
                <p style={{textAlign:'center', color:'red', fontSize:'small'}}>{error}</p>
            </div>
        </div>
    );
}
