import React, { Component } from 'react';
import axios from 'axios';

class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            new_password: "",
            cnfrm_password: "",
            id: "",
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentWillMount() {
        this.setState({
            id: window.location.pathname.split('/')[3]
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        if (this.state.new_password === this.state.cnfrm_password) {
            axios.post(`/api/reset_password/`,{
                'pwd': this.state.new_password,
                'cnfrm_pwd': this.state.cnfrm_password,
                'id': this.state.id
            })
            .then((response) => {
                if (response.status === 202) {
                    this.setState({message: "Password Has Been Changed."});
                    window.location.href = '/'
                } else {
                    this.setState({message: "Please Try Again."});    
                }
            })
            .catch((error) => {
                this.setState({message: "Please Try Again."});    
            });
        } else {
            this.setState({message: "Password and Confirm Password Should be Same."});
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p style={{ fontSize:'larger', fontWeight:'bolder', textAlign:'center', paddingTop:'50px' }}>
                            <h6 style={{fontWeight: 'bolder', textDecoration: 'underline'}}>RESET PASSWORD</h6><br />
                            <form onSubmit={this.handleSubmit}>
                                <input type='password' placeholder='New Password' value={this.state.new_password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                    onChange={(e) => this.setState({new_password: e.target.value})} style={{padding:'4px 1%'}} required /><br /><br />

                                <input type='text' placeholder='Confirm Password' value={this.state.cnfrm_password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                                    onChange={(e) => this.setState({cnfrm_password: e.target.value})} style={{padding:'4px 1%'}} required /><br /><br />

                                <input type='submit' className='btn' style={{fontSize: 'larger', fontWeight: 'bolder', color: 'white', backgroundColor:'rgb(260, 160, 0)', padding:'0.5% 5%', border:'none'}} value='CONFIRM' />

                            </form>
                            <br />
                            <span hidden={this.state.message ? false : true}>{this.state.message}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResetPassword;
