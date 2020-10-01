import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class HomeNavigation extends Component {
  render() {
    return (
        <NavDropdown title="Home" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Vision</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Mission</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Why its unique</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Courses</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default HomeNavigation;
