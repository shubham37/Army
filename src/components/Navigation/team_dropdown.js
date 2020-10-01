import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class TeamNavigation extends Component {
  render() {
    return (
    <NavDropdown title="Team" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">GTO Dept</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">IO Dept</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">PSYCH Dept</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">PD Dept</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Intt Test Dept</NavDropdown.Item>
    </NavDropdown>
);
  }
}

export default TeamNavigation;
