import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class CurrentAffairNavigation extends Component {
  render() {
    return (
        <NavDropdown title="Current Affairs" id="basic-nav-dropdown">
            <NavDropdown.Item href="/current_affair/national">NATIONAL</NavDropdown.Item>
            <NavDropdown.Item href="/current_affair/international">INTERNATIONAL</NavDropdown.Item>
            <NavDropdown.Item href="/current_affair/economy">ECONOMY</NavDropdown.Item>
            <NavDropdown.Item href="/current_affair/defence">DEFENCE</NavDropdown.Item>
            <NavDropdown.Item href="/current_affair/science_tech">SCIENCE AND TECH</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default CurrentAffairNavigation;
