import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import HomeNavigation from './Navigation/home_dropdown.js'
import TeamNavigation from './Navigation/team_dropdown.js'
import Stage1Navigation from './Navigation/stage1_dropdown.js'
import Stage2Navigation from './Navigation/stage2_dropdown.js'
import PDNavigation from './Navigation/pd_dropdown.js'
import CurrentAffairNavigation from './Navigation/current_affair_dropdown.js'
import CoursesNavigation from './Navigation/courses_dropdown.js'
import RollOfHonorNavigation from './Navigation/roll_of_honor_dropdown.js'
import ContactNavigation from './Navigation/contact_dropdown.js'
import '../assets/css/general.css'

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <HomeNavigation />
                <TeamNavigation />
                <Stage1Navigation />
                <Stage2Navigation />
                <PDNavigation />
                <CurrentAffairNavigation />
                <CoursesNavigation />
                <RollOfHonorNavigation />
                <ContactNavigation />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
