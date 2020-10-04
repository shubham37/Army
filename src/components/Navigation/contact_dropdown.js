import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class ContactNavigation extends Component {
  render() {
    return (
        <NavDropdown title="Contact us" id="basic-nav-dropdown">
            <NavDropdown.Item href="/contact_us/ceo">Chief Executive Offier</NavDropdown.Item>
            <NavDropdown.Item href="/contact_us/coo">Chief Operations Offier</NavDropdown.Item>
            <NavDropdown.Item href="/contact_us/cmo">Chief Marketing Offier</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default ContactNavigation;
