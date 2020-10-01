import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class CurrentAffairNavigation extends Component {
  render() {
    return (
        <NavDropdown title="Current Affairs" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">NATIONAL</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">INTERNATIONAL</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">ECONOMY</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">DEFENCE</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">SCIENCE AND TECH</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default CurrentAffairNavigation;
