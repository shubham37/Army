import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class AssessorNavigation extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg" sticky='top'>
            <Navbar.Brand href="/assessor">Brand</Navbar.Brand>
            <Navbar.Toggle label='Home' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/assessor/briefcase">Briefcase</Nav.Link>

                    <Nav.Link href="/assessor/instruction">Instructions</Nav.Link>

                    <Nav.Link href="/assessor/training_schedule">Training Schedule</Nav.Link>

                    <Nav.Link href="/assessor/schedule_for_day">Schedule For Today</Nav.Link>

                    <Nav.Link href="/assessor/test_report">Test Reports</Nav.Link>

                    <Nav.Link href="/assessor/progress_report">Progress Report</Nav.Link>

                    <Nav.Link href="/assessor/rating">Ratings</Nav.Link>

                    <Nav.Link href="/assessor/account">Accounts</Nav.Link>

                    <Nav.Link href="/assessor/statistics">Statistics</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default AssessorNavigation;
