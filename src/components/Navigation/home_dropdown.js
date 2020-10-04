import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class HomeNavigation extends Component {
  render() {
    return (
        <NavDropdown title="Home" id="basic-nav-dropdown">
            <NavDropdown.Item href="/home/vision">Vision</NavDropdown.Item>
            <NavDropdown.Item href="/home/mission">Mission</NavDropdown.Item>
            <NavDropdown.Item href="/home/why_its_unique">Why its unique</NavDropdown.Item>
            <NavDropdown.Item href="/home/courses">Courses</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default HomeNavigation;
