import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class PDNavigation extends Component {
  render() {
    return (
        <NavDropdown title="PD" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">SPOKEN ENGLISH</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">BODY LANGUAGE</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">DRESS FOR STAGE1 AND STAGE2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">DO'S AND DON'T</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default PDNavigation;
