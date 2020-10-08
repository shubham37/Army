import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

class StudentNavigation extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/student">Brand</Navbar.Brand>
            <Navbar.Toggle label='Home' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">    
                    <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/student/dashboard/piq">PIQ Form</NavDropdown.Item>
                        <NavDropdown title="Psych Tests" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/student/dashboard/psych">TAT-1</NavDropdown.Item>
                            <NavDropdown.Item href="/student/dashboard/psych">WAT-1</NavDropdown.Item>
                            <NavDropdown.Item href="/student/dashboard/psych">SRT-1</NavDropdown.Item>
                            <NavDropdown.Item href="/student/dashboard/psych">SD-1</NavDropdown.Item>
                            <NavDropdown.Item href="/student/dashboard/psych">PSYCH Test Complete</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown.Item href="/student/dashboard/io">IO Tests</NavDropdown.Item>
                        <NavDropdown.Item href="/student/dashboard/gto">GTO Tests</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="/student/instruction">Instruction</Nav.Link>
                    <Nav.Link href="/student/piq">PIQ</Nav.Link>

                    <NavDropdown title="Assessors" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/student/assessor/gto">GTO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/assessor/io">IO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/assessor/psych">Psych Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/assessor/pd">PD Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/assessor/itd">Intt Test Dept</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="/student/training_schedule">Training Schedule</Nav.Link>
                    <Nav.Link href="/student/schedule_for_day">Schedule For Today</Nav.Link>

                    <NavDropdown title="Tests" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/student/tests/gto">GTO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/tests/io">IO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/tests/psych">Psych Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/tests/pd">PD Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/tests/itd">Intt Test Dept</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="/student/pending_test">Tests Status</Nav.Link>

                    <NavDropdown title="Tests Reports" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/student/test_reports/gto">GTO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/test_reports/io">IO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/test_reports/psych">Psych Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/test_reports/pd">PD Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/test_reports/itd">Intt Test Dept</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Progress Report" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/student/progress_report/gto">GTO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/progress_report/io">IO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/progress_report/psych">Psych Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/progress_report/pd">PD Dept</NavDropdown.Item>
                        <NavDropdown.Item href="/student/progress_report/itd">Intt Test Dept</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default StudentNavigation;
