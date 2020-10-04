import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap'


class PDNavigation extends Component {
  render() {
    return (
        <NavDropdown title="PD" id="basic-nav-dropdown">
            <NavDropdown.Item href="/pd/spoken_language">SPOKEN ENGLISH</NavDropdown.Item>
            <NavDropdown.Item href="/pd/body_language">BODY LANGUAGE</NavDropdown.Item>
            <NavDropdown.Item href="/pd/dress_for_s1_s2">DRESS FOR STAGE1 AND STAGE2</NavDropdown.Item>
            <NavDropdown.Item href="/pd/do_and_donts">DO'S AND DON'T</NavDropdown.Item>
        </NavDropdown>
    );
  }
}

export default PDNavigation;
