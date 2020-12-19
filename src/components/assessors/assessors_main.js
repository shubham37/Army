import React, { Component } from 'react';
import AssessorAccount  from './accounts.js'
import AssessorBriefcase from './briefcase.js'
import AssessorInstruction from './instruction.js'
import AssessorProgressReport from './progress_reports.js'
import AssessorRating from './ratings.js'
import AssessorScheduleToday from './schedule_for_today.js'
import AssessorStatistics  from './statistics.js'
import AssessorTestReport from './test_reports.js'
import AssessorTrainingSchedule  from './training_schedule.js'
import { Navbar,Nav } from 'react-bootstrap'
import '../../assets/css/assesor.css'
import axios from 'axios';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class AssessorMain extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            error:null,
            globalview : {},
            logout_message: '',
            is_logout:false,
            user:'',
            image: ''
        };
        this.logout = this.logout.bind(this);
        this.view = {
            is_Briefcase_hidden:true,
            is_Instruction_hidden:true,
            is_TS_hidden:true,
            is_SFD_hidden:true,
            is_TR_hidden:true,
            is_PR_hidden:true,
            is_RATING_hidden:true,
            is_ACCOUNT_hidden:true,
            is_STATISTICS_hidden:true,
            is_Home_hidden:true
        }
    }

    componentWillMount(){
        this.state.globalview = Object.assign({}, this.view);
        this.state.globalview.is_Home_hidden = false;

        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');

        if (token && role === '1') {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            };
            axios.get(`/assessor_api/profile/`, {
                headers: headers
            })
            .then((data) => {
                this.setState({
                    user: Object.assign({}, data.data)
                    // user: data.data.first_name,
                    // image: data.data.image || ""
                });
            })
            .catch((error) =>  {
                console.log(error.message)
            });
            this.setState({is_logout:false});
        } else if (token && role === '0') {
            window.location.href = '/student';
        } else {
            localStorage.clear();
            this.setState({is_logout:true});
            window.location.href = '/';
        }
    }

    logout(e){
        e.preventDefault();
        localStorage.clear();
        this.setState({is_logout:true});
        window.location.href = '/'
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
            case 'TS':
                view_local.is_TS_hidden = false;
                break;
            case 'SFD':
                view_local.is_SFD_hidden = false;
                break;
            case 'TR':
                view_local.is_TR_hidden = false;
                break;
            case 'PR':
                view_local.is_PR_hidden = false;
                break;
            case 'RATING':
                view_local.is_RATING_hidden = false;
                break;
            case 'ACCOUNT':
                view_local.is_ACCOUNT_hidden = false;
                break;
            case 'STATISTICS':
                view_local.is_STATISTICS_hidden = false;
                break;
            default:
                view_local.is_Home_hidden = false;
                break;
        }
        this.setState({globalview :view_local});
    }

    render() {
        return (
            <div className='AssessorMain'>
                <div className='row assessor_navigation'>
                    <div className='col'>
                        <Navbar bg="light" expand="lg" sticky='top'>
                            <Navbar.Toggle label='Home' aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('Briefcase')}>Briefcase</Nav.Link>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('Instruction')}>Instructions</Nav.Link>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('TS')}>Training Schedule</Nav.Link>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('SFD')}>Schedule For Today</Nav.Link>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('TR')}>Test Reports</Nav.Link>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('PR')}>Progress Report</Nav.Link>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('RATING')}>Ratings</Nav.Link>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('ACCOUNT')}>Accounts</Nav.Link>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('STATISTICS')}>Statistics</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
                <br />
                <div className='row container-fluid'>
                    <div className='col'>
                        <span className='float-left'>Welcome, <br /><b>Mr. {this.state.user.first_name}</b> </span>
                        <span style={{marginTop:'2px'}}>
                            <img src={this.state.user.image || require('../../assets/images/bot.jpg')}  className='img-responsive img-thumbnail' alt='profile' width='64' height='64' style={{marginLeft:'10px'}} />
                        </span>
                        <span className='float-right'><button className='btn-danger' onClick={this.logout}>Logout <ExitToAppIcon /></button></span>
                        <p style={{color:'red', fontWeight:'bolder', fontSize:'larger'}}>{this.state.logout_message}</p>
                    </div>
                </div>

                <div hidden={this.state.globalview.is_Briefcase_hidden}>
                    <AssessorBriefcase />
                </div>
                <div hidden={this.state.globalview.is_Instruction_hidden}>
                    <AssessorInstruction />
                </div>
                <div hidden={this.state.globalview.is_TS_hidden}>
                    <AssessorTrainingSchedule />
                </div>
                <div hidden={this.state.globalview.is_SFD_hidden}>
                    <AssessorScheduleToday />
                </div>
                <div hidden={this.state.globalview.is_TR_hidden}>
                    <AssessorTestReport />
                </div>
                <div hidden={this.state.globalview.is_PR_hidden}>
                    <AssessorProgressReport />
                </div>
                <div hidden={this.state.globalview.is_RATING_hidden}>
                    <AssessorRating />
                </div>
                <div hidden={this.state.globalview.is_ACCOUNT_hidden}>
                    <AssessorAccount />
                </div>
                <div hidden={this.state.globalview.is_STATISTICS_hidden}>
                    <AssessorStatistics />
                </div>
                <div hidden={this.state.globalview.is_Home_hidden}>
                    <hr />
                    <div className='container' style={{textAlign: 'center'}}>
                        <div className='profile'>
                            <div className='row'>
                                <div className='col-md-6 col-12'>
                                    <img src={this.state.user.image || require('../../assets/images/bot.jpg')}  className='img-responsive img-circle' alt='profile' style={{width: '90%', height: '200px', padding:'10px'}} />
                                </div>
                                <div className='col-md-6 col-12'>
                                    <h4>{this.state.user.first_name} {this.state.user.middle_name || ''} {this.state.user.last_name || ''}</h4>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default AssessorMain;
