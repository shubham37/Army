import React, { Component } from 'react';
import StudentAssessorGTO from './assessors/gto_dept.js'
import StudentAssessorITD from './assessors/intt_test_dept.js'
import StudentAssessorIO from './assessors/io_dept.js'
import StudentAssessorPD from './assessors/pd_dept.js'
import StudentAssessorPsych from './assessors/psych_dept.js'

import StudentDashboardGTO from './dashboard/gto_tests.js'
import StudentDashboardIO from './dashboard/io_tests.js'
import StudentDashboardPIQ from './dashboard/piq_form.js'

import StudentProgressReportGTO from './progress_report/gto_dept.js'
import StudentProgressReportITD from './progress_report/intt_test_dept.js'
import StudentProgressReportIO from './progress_report/io_dept.js'
import StudentProgressReportPD from './progress_report/pd_dept.js'
import StudentProgressReportPsych from './progress_report/psych_dept.js'

import StudentTestReportGTO from './test_reports/gto_dept.js'
import StudentTestReportITD from './test_reports/intt_test_dept.js'
import StudentTestReportIO from './test_reports/io_dept.js'
import StudentTestReportPD from './test_reports/pd_dept.js'
import StudentTestReportPsych from './test_reports/psych_dept.js'

import StudentIntruction from './instruction.js'
import StudentScheduleToday from './schedule_for_today.js'
import StudentTestPending from './tests_pending.js'
import StudentTrainingSchedule from './training_schedule.js'
import StudentPIQForm from './piq_form.js'

import '../../assets/css/student.css'
import {NavDropdown, Navbar,Nav, Button, Dropdown} from 'react-bootstrap'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class StudentMain extends Component {
    constructor(props) {
        super(props);
        this.state ={
          globalview : {},
          logout_message: '',
          is_logout: false,
          user:''
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

            is_GTOTR_hidden:true,
            is_IOTR_hidden:true,
            is_PSYCHTR_hidden:true,
            is_PDTR_hidden:true,
            is_ITTR_hidden:true,

            is_GTOPR_hidden:true,
            is_IOPR_hidden:true,
            is_PSYCHPR_hidden:true,
            is_PDPR_hidden:true,
            is_ITPR_hidden:true,
  
            is_Home_hidden:true
        };

        this.logout = this.logout.bind(this);      
    }
    
    componentWillMount() {
        this.state.globalview = Object.assign({}, this.view);
        this.state.globalview.is_Home_hidden = false;

        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');

        if (token && role == '0') {
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
                    user:data.data.first_name
                });
                // console.log(data);
            })
            .catch((error) => {
                console.log(error.message)
            });
        } else {
            localStorage.clear();
            this.setState({is_logout:true});
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
            case 'GTOTR':
                view_local.is_GTOTR_hidden = false;
                break;
            case 'IOTR':
                view_local.is_IOTR_hidden = false;
                break;
            case 'PSYCHTR':
                view_local.is_PSYCHTR_hidden = false;
                break;
            case 'PDTR':
                view_local.is_PDTR_hidden = false;
                break;
            case 'ITTR':
                view_local.is_ITTR_hidden = false;
                break;
            case 'GTOPR':
                view_local.is_GTOPR_hidden = false;
                break;
            case 'IOPR':
                view_local.is_IOPR_hidden = false;
                break;
            case 'PSYCHPR':
                view_local.is_PSYCHPR_hidden = false;
                break;
            case 'PDPR':
                view_local.is_PDPR_hidden = false;
                break;
            case 'ITPR':
                view_local.is_ITPR_hidden = false;
                break;
            default:
                view_local.is_Home_hidden = false;
        }
        this.setState({globalview :view_local});
    }

    
    logout(e){
        e.preventDefault(e);
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
                this.setState({
                    is_logout:true
                });
                // window.location = '/'
                window.location.href = '/'
            } else {
                // console.log(data.data)
                this.setState({
                    logout_message: data.data
                });
            }
        })
        .catch((error) => {
            console.log(error.message)
        });
    }


    render() {
        if  (this.state.is_logout) {
            return <Redirect to='/' />
        }

        return (
            <div className='StudentMain'>
                <div className='row student_navigation'>
                    <div className='col'>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="/student">
                                <img src={require('../../assets/images/logo.png')} alt="imag" width={100} height={50} />
                            </Navbar.Brand>
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
                                                <Dropdown.Item href="/tat_test">TAT-1</Dropdown.Item>
                                                <Dropdown.Item href="/wat_test">WAT-1</Dropdown.Item>
                                                <Dropdown.Item href="/srt_test">SRT-1</Dropdown.Item>
                                                <Dropdown.Item href="/sd_test">SD-1</Dropdown.Item>
                                                <Dropdown.Item href="/psych_test">PSYCH Test Complete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('IO')}>IO Tests</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('GTO')}>GTO Tests</Button></NavDropdown.Item>
                                    </NavDropdown>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('Instruction')}>Instruction</Nav.Link>
                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('PIQ')}>PIQ</Nav.Link>

                                    <NavDropdown title="Assessors" id="basic-nav-dropdown">
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('GTOA')}>GTO Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("IOA")}>IO Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("PSYCHA")}>Psych Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("PDA")}>PD Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("ITA")}>Intt Test</Button> Dept</NavDropdown.Item>
                                    </NavDropdown>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('TS')}>Training Schedule</Nav.Link>
                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('SFD')}>Schedule For Today</Nav.Link>

                                    <NavDropdown title="Tests" id="basic-nav-dropdown">
                                        <NavDropdown.Item href='/gto_dept_test'>GTO Dept</NavDropdown.Item>
                                        <NavDropdown.Item href='/io_dept_test'>IO Dept</NavDropdown.Item>
                                        <NavDropdown.Item href='/psych_dept_test'>Psych Dept</NavDropdown.Item>
                                        <NavDropdown.Item href='/pd_dept_test'>PD Dept</NavDropdown.Item>
                                        <NavDropdown.Item href='/itd_dept_test'>Intt Test Dept</NavDropdown.Item>
                                    </NavDropdown>

                                    <Nav.Link id="basic-nav-dropdown" onClick={(e) => this.onClickOption('TSS')}>Tests Status</Nav.Link>

                                    <NavDropdown title="Tests Reports" id="basic-nav-dropdown">
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("GTOTR")}>GTO Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("IOTR")}>IO Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("PSYCHTR")}>Psych Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("PDTR")}>PD Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("ITTR")}>Intt Test</Button> Dept</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="Progress Report" id="basic-nav-dropdown">
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("GTOPR")}>GTO Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("IOPR")}>IO Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("PSYCHPR")}>Psych Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("PDPR")}>PD Dept</Button></NavDropdown.Item>
                                        <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption("ITPR")}>Intt Test</Button> Dept</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
                <br />
                <div className='row container-fluid'>
                    <div className='col'>
                        <span className='float-left'>Welcome, <b>Mr. {this.state.user}</b> </span>
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
                    <StudentAssessorGTO code='GTO' />
                </div>
                <div hidden={this.state.globalview.is_ITA_hidden}>
                    <StudentAssessorGTO code='ITD' />
                    {/* <StudentAssessorITD /> */}
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
                <div hidden={this.state.globalview.is_GTOPR_hidden}>
                    <StudentProgressReportGTO />
                </div>
                <div hidden={this.state.globalview.is_ITPR_hidden}>
                    <StudentProgressReportITD />
                </div>
                <div hidden={this.state.globalview.is_IOPR_hidden}>
                    <StudentProgressReportIO />
                </div>
                <div hidden={this.state.globalview.is_PDPR_hidden}>
                    <StudentProgressReportPD />
                </div>
                <div hidden={this.state.globalview.is_PSYCHPR_hidden}>
                    <StudentProgressReportPsych />
                </div>
                <div hidden={this.state.globalview.is_GTOTR_hidden}>
                    <StudentTestReportGTO />
                </div>
                <div hidden={this.state.globalview.is_ITTR_hidden}>
                    <StudentTestReportITD />
                </div>
                <div hidden={this.state.globalview.is_IOTR_hidden}>
                    <StudentTestReportIO />
                </div>
                <div hidden={this.state.globalview.is_PDTR_hidden}>
                    <StudentTestReportPD />
                </div>
                <div hidden={this.state.globalview.is_PSYCHTR_hidden}>
                    <StudentTestReportPsych />
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
                    <div className='container-fluid'>
                        <p>
                            Home Content Will Showed Here.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentMain;
