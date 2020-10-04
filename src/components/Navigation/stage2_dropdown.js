import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class Stage2Navigation extends Component {
  render() {
    return (
        <NavDropdown title="Stage2" id="basic-nav-dropdown">
            <NavDropdown.Item href="/stage2/psych">PSYCH</NavDropdown.Item>
            <NavDropdown.Item href="/stage2/gto">GTO</NavDropdown.Item>
            <NavDropdown.Item href="/stage2/io">IO</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default Stage2Navigation;
