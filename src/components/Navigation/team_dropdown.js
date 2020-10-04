import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class TeamNavigation extends Component {
  render() {
    return (
    <NavDropdown title="Team" id="basic-nav-dropdown">
        <NavDropdown.Item href="/team/gto_dept">GTO Dept</NavDropdown.Item>
        <NavDropdown.Item href="/team/io_dept">IO Dept</NavDropdown.Item>
        <NavDropdown.Item href="/team/psych_dept">PSYCH Dept</NavDropdown.Item>
        <NavDropdown.Item href="/team/pd_dept">PD Dept</NavDropdown.Item>
        <NavDropdown.Item href="/team/intt_test_dept">Intt Test Dept</NavDropdown.Item>
    </NavDropdown>
    );
  }
}

export default TeamNavigation;
