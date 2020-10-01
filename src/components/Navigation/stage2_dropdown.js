import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class Stage2Navigation extends Component {
  render() {
    return (
        <NavDropdown title="Stage2" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">PSYCH</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">GTO</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">IO</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default Stage2Navigation;
