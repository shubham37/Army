import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class CoursesNavigation extends Component {
  render() {
    return (
        <NavDropdown title="Courses" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">COURSES</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">FEE STRUCTURE</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default CoursesNavigation;
