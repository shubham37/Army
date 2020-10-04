import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class AdminNavigation extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/admin_user">Brand</Navbar.Brand>
            <Navbar.Toggle label='Home' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <Nav.Link href="/admin_user/briefcase">Briefcase</Nav.Link>

                    <Nav.Link href="/admin_user/instruction">Instructions</Nav.Link>

                    <Nav.Link href="/admin_user/accounts">Accounts</Nav.Link>

                    <Nav.Link href="/admin_user/training">Training</Nav.Link>

                    <Nav.Link href="/admin_user/marketing">Marketing</Nav.Link>

                    <Nav.Link href="/admin_user/hr">HR</Nav.Link>

                    <Nav.Link href="/admin_user/finance">Finance</Nav.Link>

                    <Nav.Link href="/admin_user/misc">Misc</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default AdminNavigation;