import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class Stage1Navigation extends Component {
  render() {
    return (
        <NavDropdown title="Stage1" id="basic-nav-dropdown">
            <NavDropdown.Item href="/stage1/oir">OIR</NavDropdown.Item>
            <NavDropdown.Item href="/stage1/pp">PP</NavDropdown.Item>
            <NavDropdown.Item href="/stage1/dt">DT</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default Stage1Navigation;
