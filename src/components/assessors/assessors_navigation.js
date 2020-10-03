import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

class AssessorNavigation extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Brand</Navbar.Brand>
            <Navbar.Toggle label='Home' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <Nav.Link href="#home">Briefcase</Nav.Link>

                    <Nav.Link href="#home">Instructions</Nav.Link>

                    <Nav.Link href="#home">Training Schedule</Nav.Link>

                    <Nav.Link href="#home">Schedule For Today</Nav.Link>

                    <Nav.Link href="#home">Test Reports</Nav.Link>

                    <Nav.Link href="#home">Progress Report</Nav.Link>

                    <Nav.Link href="#home">Ratings</Nav.Link>

                    <Nav.Link href="#home">Accounts</Nav.Link>

                    <Nav.Link href="#home">Statistics</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default AssessorNavigation;
