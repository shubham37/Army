import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class ContactNavigation extends Component {
  render() {
    return (
        <NavDropdown title="Contact us" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Chief Executive Offier</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Chief Operations Offier</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Chief Marketing Offier</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default ContactNavigation;
