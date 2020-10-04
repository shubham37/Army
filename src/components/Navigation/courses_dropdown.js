import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class CoursesNavigation extends Component {
  render() {
    return (
        <NavDropdown title="Courses" id="basic-nav-dropdown">
            <NavDropdown.Item href="/courses/courses">COURSES</NavDropdown.Item>
            <NavDropdown.Item href="/courses/fee_structure">FEE STRUCTURE</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default CoursesNavigation;
