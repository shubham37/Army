import React, { Component } from 'react';
import {NavDropdown, Navbar,Nav, Button, Dropdown} from 'react-bootstrap'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios'

import StudentAssessorGTO from './assessors/gto_dept.js'
import StudentAssessorITD from './assessors/intt_test_dept.js'
import StudentAssessorIO from './assessors/io_dept.js'
import StudentAssessorPD from './assessors/pd_dept.js'
import StudentAssessorPsych from './assessors/psych_dept.js'

import StudentDashboardGTO from './dashboard/gto_tests.js'
import StudentDashboardIO from './dashboard/io_tests.js'
import StudentDashboardPIQ from './dashboard/piq_form.js'

import StudentIntruction from './instruction.js'
import StudentScheduleToday from './schedule_for_today.js'
import StudentTestPending from './tests_pending.js'
import StudentTrainingSchedule from './training_schedule.js'
import StudentPIQForm from './piq_form.js'

import '../../assets/css/student.css'


class StudentMain extends Component {
    constructor(props) {
        super(props);
        this.state ={
          globalview : {},
          logout_message: '',
          is_logout: false,
          user:{}
        //   image: ''
        }
        this.view = {
            is_PIQFORM_hidden:true,
            is_IO_hidden:true,
            is_GTO_hidden:true,
            is_Instruction_hidden:true,
            is_PIQ_hidden:true,

            is_GTOA_hidden:true,
            is_IOA_hidden:true,
            is_PSYCHA_hidden:true,
            is_PDA_hidden:true,
            is_ITA_hidden:true,

            is_TS_hidden:true,
            is_SFD_hidden:true,

            is_TSS_hidden:true,
  
            is_Home_hidden:true
        };

        this.logout = this.logout.bind(this);      
    }

    componentWillMount() {
        this.state.globalview = Object.assign({}, this.view);
        this.state.globalview.is_Home_hidden = false;

        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');

        if (token && role === '0') {
            this.setState({is_logout:false});
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            };
            axios.get(`/student_api/profile/`, {
                headers: headers
            })
            .then((data) => {
                this.setState({
                    user: Object.assign({}, data.data)
                });
                console.log(this.state.image)
            })
            .catch((error) => {
                console.log(error.message)
            });
        } else if (token && role === '1') {
            window.location.href = '/assessor';
        } else {
            localStorage.clear();
            this.setState({is_logout:true});
            window.location.href = '/';
        }
    }
    
    onClickOption(title) {
        const view_local = Object.assign({}, this.view);
        switch(title) {
            case 'PIQFORM':
                view_local.is_PIQFORM_hidden = false;
                break;
            case 'IO':
                view_local.is_IO_hidden = false;
                break;
            case 'GTO':
                view_local.is_GTO_hidden = false;
                break;
            case 'Instruction':
                view_local.is_Instruction_hidden = false;
                break;
            case 'PIQ':
                // Code For Download PIQ as PDF
                view_local.is_PIQ_hidden = false;
                break;
            case 'GTOA':
                view_local.is_GTOA_hidden = false;
                break;
            case 'IOA':
                view_local.is_IOA_hidden = false;
                break;
            case 'PSYCHA':
                view_local.is_PSYCHA_hidden = false;
                break;
            case 'PDA':
                view_local.is_PDA_hidden = false;
                break;
            case 'ITA':
                view_local.is_ITA_hidden = false;
                break;
            case 'TS':
                view_local.is_TS_hidden = false;
                break;
            case 'SFD':
                view_local.is_SFD_hidden = false;
                break;
            case 'TSS':
                view_local.is_TSS_hidden = false;
                break;
            default:
                view_local.is_Home_hidden = false;
        }
        this.setState({globalview :view_local});
    }

    
    logout(e){
        e.preventDefault();
        localStorage.clear();
        this.setState({
            is_logout:true
        });
        window.location.href = '/'
    }


    render() {
        return (
            <div className='StudentMain'>
                <div className='row student_navigation'>
                    <div className='col'>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Toggle label='Home' aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("PIQFORM")}>PIQ Form</Button></NavDropdown.Item>
                                        <Dropdown key='right' drop='right'>
                                            <Dropdown.Toggle variant="none" style={{width:'100%'}} id="dropdown-basic">
                                                Psych Tests
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="/test/TAT">TAT-1</Dropdown.Item>
                                                <Dropdown.Item href="/test/WAT">WAT-1</Dropdown.Item>
                                                <Dropdown.Item href="/test/SRT">SRT-1</Dropdown.Item>
                                                <Dropdown.Item href="/test/SD">SD-1</Dropdown.Item>
                                                <Dropdown.Item href="/test/PSYCH">PSYCH Test Complete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('IO')}>IO Tests</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('GTO')}>GTO Tests</Button></NavDropdown.Item>
                                    </NavDropdown>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('Instruction')}>Instructions</Nav.Link>
                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('PIQ')}>PIQ</Nav.Link>

                                    <NavDropdown title="Select Your Assessor" id="basic-nav-dropdown">
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('GTOA')}>GTO Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("IOA")}>IO Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("PSYCHA")}>Psych Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("PDA")}>PD Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("ITA")}>Intt Test</Button> Dept</NavDropdown.Item>
                                    </NavDropdown>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('TS')}>Training Schedule</Nav.Link>
                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('SFD')}>Schedule For Today</Nav.Link>

                                    <NavDropdown title="Tests" id="basic-nav-dropdown">
                                        <NavDropdown.Item href='/training/GTO'>GTO Dept</NavDropdown.Item>
                                        <NavDropdown.Item href='/training/IO'>IO Dept</NavDropdown.Item>
                                        <NavDropdown.Item href='/training/PSYCH'>Psych Dept</NavDropdown.Item>
                                        <NavDropdown.Item href='/training/PD'>PD Dept</NavDropdown.Item>
                                        <NavDropdown.Item href='/training/ITD'>Intt Test Dept</NavDropdown.Item>
                                    </NavDropdown>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('TSS')}>Tests Status</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
                <br />
                <div className='row container-fluid'>
                    <div className='col'>
                        <span className='float-left'>Welcome, <br /> <b>Mr. {this.state.user.first_name}</b> </span>
                        <span style={{marginLeft:'2px'}}>
                            <img src={this.state.user.image || require('../../assets/images/bot.jpg')}  className='img-responsive img-thumbnail' alt='profile' width='64' height='64' style={{marginLeft:'10px'}} />
                        </span>
                        <span className='float-right'><button className='btn-danger' onClick={this.logout}>Logout <ExitToAppIcon /></button></span>
                        <br />
                        <hr />
                        <p style={{color:'red', fontWeight:'bolder', fontSize:'larger'}}>{this.state.logout_message}</p>
                    </div>
                </div>
                <div hidden={this.state.globalview.is_GTO_hidden}>
                    <StudentDashboardGTO />
                </div>
                <div hidden={this.state.globalview.is_IO_hidden}>
                    <StudentDashboardIO />
                </div>
                <div hidden={this.state.globalview.is_PIQFORM_hidden}>
                    <StudentDashboardPIQ />
                </div>
                <div hidden={this.state.globalview.is_Instruction_hidden}>
                    <StudentIntruction />
                </div>
                <div hidden={this.state.globalview.is_PIQ_hidden}>
                    <StudentPIQForm />
                </div>
                <div hidden={this.state.globalview.is_GTOA_hidden}>
                    <StudentAssessorGTO />
                </div>
                <div hidden={this.state.globalview.is_ITA_hidden}>
                        <StudentAssessorITD />
                </div>
                <div hidden={this.state.globalview.is_IOA_hidden}>
                    <StudentAssessorIO />
                </div>
                <div hidden={this.state.globalview.is_PDA_hidden}>
                    <StudentAssessorPD />
                </div>
                <div hidden={this.state.globalview.is_PSYCHA_hidden}>
                    <StudentAssessorPsych />
                </div>
                <div hidden={this.state.globalview.is_SFD_hidden}>
                    <StudentScheduleToday />
                </div>
                <div hidden={this.state.globalview.is_TSS_hidden}>
                    <StudentTestPending />
                </div>
                <div hidden={this.state.globalview.is_TS_hidden}>
                    <StudentTrainingSchedule />
                </div>
                <div hidden={this.state.globalview.is_Home_hidden}>
                    <div className='container' style={{textAlign: 'center'}}>
                        <div className='profile'>
                            <div className='row'>
                                <div className='col-md-6 col-12'>
                                    <img src={this.state.user.image || require('../../assets/images/bot.jpg')}  className='img-responsive img-circle' alt='profile' style={{width: '90%', height: '200px', padding:'10px'}} />
                                </div>
                                <div className='col-md-6 col-12'>
                                    <h4>{this.state.user.first_name} {this.state.user.middle_name || ''} {this.state.user.last_name || ''}</h4>
                                    <span>{this.state.user.dob || ''}</span><br />
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

export default StudentMain;
