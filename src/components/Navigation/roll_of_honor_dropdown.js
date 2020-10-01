import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class RollOfHonorNavigation extends Component {
  render() {
    return (
        <NavDropdown title="Roll of Honor" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Star Of The Day</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Evergreen Star's</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default RollOfHonorNavigation;
