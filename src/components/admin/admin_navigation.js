import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class AdminNavigation extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Brand</Navbar.Brand>
            <Navbar.Toggle label='Home' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <Nav.Link href="#home">Briefcase</Nav.Link>

                    <Nav.Link href="#home">Instructions</Nav.Link>

                    <Nav.Link href="#home">Accounts</Nav.Link>

                    <Nav.Link href="#home">Training</Nav.Link>

                    <Nav.Link href="#home">Marketing</Nav.Link>

                    <Nav.Link href="#home">HR</Nav.Link>

                    <Nav.Link href="#home">Finance</Nav.Link>

                    <Nav.Link href="#home">Misc</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default AdminNavigation;
