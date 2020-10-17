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


class AssessorMain extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            error:null,
            globalview : {}
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

        // const token = localStorage.getItem('access-token');
        // const role = localStorage.getItem('role');

        // if (token && role==2) {
        //     console.log("Welome");
        // } else if(token && role==1) {
        //     window.location = '/student';
        // } else {
        //     window.location = '/';
        // }
    }

    logout(){
        window.localStorage.clear();
        window.location = '/';

        // this.props.router.replace('/')
        // return <Redirect to='/student' />
        // console.log('data');
        // const token = localStorage.getItem('access-token');
        // axios.get(`/api/logout/`,  {
        //     headers: {
        //       'Authorization': `Token ${token}`
        //     }
        // })
        // .then((data) =>{
        //     localStorage.removeItem('access-token');
        //     localStorage.removeItem('role');
        //     localStorage.removeItem('user_id');
        //     setNofilled(true);
        //     setHide(true);
        // })
        // .catch(error => console.log(error.message));
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
                        <Navbar.Brand href="/assessor">
                            <img src={require('../../assets/images/logo.png')} alt="imag" width={100} height={50} />
                        </Navbar.Brand>
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
                    <span className='float-left'>Welcome, Mr. Shubham </span>
                    <span className='float-right'><button className='btn-danger' onClick={this.logout}>Logout</button></span>
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
                <div className='container-fluid'>
                    <hr />
                    <p>Assessor Home Content Will Show Here.</p>
                </div>
            </div>
        </div>
    );
  }
}

export default AssessorMain;
