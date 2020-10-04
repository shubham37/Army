import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class RollOfHonorNavigation extends Component {
  render() {
    return (
        <NavDropdown title="Roll of Honor" id="basic-nav-dropdown">
            <NavDropdown.Item href="/roll_of_honor/star_of_day">Star Of The Day</NavDropdown.Item>
            <NavDropdown.Item href="/roll_of_honor/evergreen_star">Evergreen Star's</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default RollOfHonorNavigation;
