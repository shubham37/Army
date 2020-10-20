import React, { Component } from 'react';
import AdminAccount  from './accounts.js'
import AdminBriefcase from './briefcase.js'
import AdminFinance from './finance.js'
import AdminHR from './hr.js'
import AdminMarketing from './marketing.js'
import AdminMisc from './misc.js'
import AdminTraining  from './training.js'
import '../../assets/css/admin.css'
import { Navbar,Nav } from 'react-bootstrap'
import { Redirect } from 'react-router';
import axios  from 'axios'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class AdminMain extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            globalview : {},
            logout_message:'',
            is_logout: false
        };
        this.view = {
            is_Briefcase_hidden:true,
            is_Instruction_hidden:true,
            is_ACCOUNT_hidden:true,
            is_T_hidden:true,
            is_M_hidden:true,
            is_HR_hidden:true,
            is_F_hidden:true,
            is_MISC_hidden:true,
            is_Home_hidden:true
        }
    }

    componentWillMount(){
        this.state.globalview = Object.assign({}, this.view);
        this.state.globalview.is_Home_hidden = false;

        if (localStorage.getItem('token') && (localStorage.getItem('role') == 2)){
            this.setState({is_logout:false});
        }
        else {
            localStorage.clear();
            this.setState({is_logout:true});
        }
    }

    onClickOption(title) {
        const view_local = Object.assign({}, this.view);
        switch(title) {
            case 'Briefcase':
                view_local.is_Briefcase_hidden = false;
                break;
            case 'Instruction':
                view_local.is_Instruction_hidden = false;
                break;
            case 'ACCOUNT':
                view_local.is_ACCOUNT_hidden = false;
                break;
            case 'T':
                view_local.is_T_hidden = false;
                break;
            case 'M':
                view_local.is_M_hidden = false;
                break;
            case 'HR':
                view_local.is_HR_hidden = false;
                break;
            case 'F':
                view_local.is_F_hidden = false;
                break;
            case 'MISC':
                view_local.is_MISC_hidden = false;
                break;
            default:
                view_local.is_Home_hidden = false;
                break;
        }
        this.setState({globalview :view_local});
    }

    logout(e){
        e.preventDefault();
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }

        axios.get(`/api/logout/`,  {
            headers: headers
        })
        .then((data) =>{
            if (data.status === 200){
                localStorage.clear();
                this.setState({is_logout:true});
            } else {
                console.log(data.data)
                this.setState({
                    logout_message: data.data
                });
            }
        })
        .catch(error => console.log(error.message));
    }

    render() {
        if (this.state.is_logout) {
            return <Redirect to='/' />
        }
        return (
            <div className='AdminMain container-fluid'>
                <div className='row admin_navigation'>
                    <div className='col'>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="/admin_user"><img src={require('../../assets/images/logo.png')} alt="imag" width={100} height={50} /></Navbar.Brand>
                            <Navbar.Toggle label='Home' aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('Briefcase')}>Briefcase</Nav.Link>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('Instruction')}>Instructions</Nav.Link>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('ACCOUNT')}>Accounts</Nav.Link>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('T')}>Training</Nav.Link>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('M')}>Marketing</Nav.Link>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('HR')}>HR</Nav.Link>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('F')}>Finance</Nav.Link>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('MISC')}>Misc</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
                <br />                                                                                                                                              
                <div className='row container-fluid'>
                    <div className='col'>
                        <span className='float-left'>Welcome Admin Office</span>
                        <span className='float-right'><button className='btn-danger' onClick={this.logout} >Logout <ExitToAppIcon /></button></span> 
                        <br />
                        <hr />
                        <p style={{color:'red', fontWeight:'bolder', fontSize:'larger'}}>{this.state.logout_message}</p>                                                
                    </div>
                </div>

                <div hidden={this.state.globalview.is_ACCOUNT_hidden}>
                    <AdminAccount />
                </div>
                <div hidden={this.state.globalview.is_Briefcase_hidden}>
                    <AdminBriefcase />
                </div>
                <div hidden={this.state.globalview.is_F_hidden}>
                    <AdminFinance />
                </div>
                <div hidden={this.state.globalview.is_HR_hidden}>
                    <AdminHR />
                </div>
                <div hidden={this.state.globalview.is_M_hidden}>
                    <AdminMarketing />
                </div>
                <div hidden={this.state.globalview.is_MISC_hidden}>
                    <AdminMisc />
                </div>
                <div hidden={this.state.globalview.is_T_hidden}>
                    <AdminTraining />
                </div>

                <div hidden={this.state.globalview.is_Home_hidden}>
                    <div className='container-fluid'>
                        <p>Assessor Home Content Will Show Here.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminMain;
