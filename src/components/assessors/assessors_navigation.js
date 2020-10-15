import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class AssessorNavigation extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg" sticky='top'>
            <Navbar.Brand href="/assessor"><img src={require('../../assets/images/logo.png')} alt="imag" width={100} height={50} /></Navbar.Brand>
            <Navbar.Toggle label='Home' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link id="basic-nav-dropdown" href="/assessor/briefcase">Briefcase</Nav.Link>

                    <Nav.Link id="basic-nav-dropdown" href="/assessor/instruction">Instructions</Nav.Link>

                    <Nav.Link id="basic-nav-dropdown" href="/assessor/training_schedule">Training Schedule</Nav.Link>

                    <Nav.Link id="basic-nav-dropdown" href="/assessor/schedule_for_day">Schedule For Today</Nav.Link>

                    <Nav.Link id="basic-nav-dropdown" href="/assessor/test_report">Test Reports</Nav.Link>

                    <Nav.Link id="basic-nav-dropdown" href="/assessor/progress_report">Progress Report</Nav.Link>

                    <Nav.Link id="basic-nav-dropdown" href="/assessor/rating">Ratings</Nav.Link>

                    <Nav.Link id="basic-nav-dropdown" href="/assessor/account">Accounts</Nav.Link>

                    <Nav.Link id="basic-nav-dropdown" href="/assessor/statistics">Statistics</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default AssessorNavigation;
