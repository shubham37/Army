import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

class StudentNavigation extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Brand</Navbar.Brand>
            <Navbar.Toggle label='Home' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">    
                    <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">PIQ Form</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Psych Tests</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">IO Tests</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">GTO Tests</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="#home">Instruction</Nav.Link>
                    <Nav.Link href="#home">PIQ</Nav.Link>

                    <NavDropdown title="Assessors" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.3">GTO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">IO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Psych Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">PD Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Intt Test Dept</NavDropdown.Item>
                    </NavDropdown>


                    <Nav.Link href="#home">Training Schedule</Nav.Link>
                    <Nav.Link href="#home">Schedule For Today</Nav.Link>

                    <NavDropdown title="Tests" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.3">GTO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">IO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Psych Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">PD Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Intt Test Dept</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="#home">Tests Pending</Nav.Link>

                    <NavDropdown title="Tests Reports" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.3">GTO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">IO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Psych Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">PD Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Intt Test Dept</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Progress Report" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.3">GTO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">IO Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Psych Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">PD Dept</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Intt Test Dept</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default StudentNavigation;
