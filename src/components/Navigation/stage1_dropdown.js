import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class Stage1Navigation extends Component {
  render() {
    return (
        <NavDropdown title="Stage1" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">OIR</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">PP</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">DT</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default Stage1Navigation;
