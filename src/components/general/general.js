import React, { Component } from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Main from '../main.js'
import CurrentAffairDefence  from '../general/current_affair/defence.js'
import CurrentAffairEconomy from '../general/current_affair/economy.js'
import CurrentAffairInternational from '../general/current_affair/international.js'
import CurrentAffairNational from '../general/current_affair/national.js'
import CurrentAffairScienceTech from '../general/current_affair/science_tech.js'
import PDBodyLanguage from '../general/pd/body_langauge.js'
import PDDAD from  '../general/pd/do_and_dont.js'
import PDDFS1S2 from '../general/pd/dress_for_s1_s2.js'
import PDSpokenLanguage from '../general/pd/dress_for_s1_s2.js'
import Stage1DT from '../general/stage1/dt.js'
import Stage1OIR from '../general/stage1/oir.js'
import Stage1PP from '../general/stage1/pp.js'
import Stage2GTO from '../general/stage2/gto.js'
import Stage2IO from '../general/stage2/io.js'
import Stage2Psych from '../general/stage2/psych.js'
import TeamGTO from  '../general/team/gto_dept.js'
import TeamITD from  '../general/team/intt_test_dept.js'
import TeamIO  from '../general/team/io_dept.js'
import TeamPD from '../general/team/pd_dept.js'
import TeamPsych from '../general/team/psych_dept.js'
import CoursesAgain from '../general/courses/courses.js'
import CoursesFeeStructure from '../general/courses/fee_structure.js'
import ContactForm from '../forms/contact.js'
import { NavDropdown, Navbar,Nav, Button } from 'react-bootstrap'
import '../../assets/css/general.css'
import axios from 'axios';


class GeneralMain extends Component {
  constructor(props) {
    super(props);
    this.state ={
      globalview : {},
      star : [],
      stars : [],
      notification: 'Upcoming Soon'
    }
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && (role === '0')) {
      window.location.href = '/student'
    } else if (token && (role === '1')) {
      window.location.href = '/assessor'
    } else if (token && (role === '2')) {
      window.location.href = '/admin_user'
    }
    this.view = {
      is_GTOD_hidden:true,
      is_IOD_hidden:true,
      is_PSYCHD_hidden:true,
      is_PDD_hidden:true,
      is_ITD_hidden:true,
      is_OIR_hidden:true,
      is_PP_hidden:true,
      is_DT_hidden:true,
      is_PSYCH_hidden:true,
      is_GTO_hidden:true,
      is_IO_hidden:true,
      is_SE_hidden:true,
      is_BL_hidden:true,
      is_DFS_hidden:true,
      is_DAD_hidden:true,
      is_National_hidden:true,
      is_courses: true,
      is_fee_structure: true,
      is_contact: true,
      is_International_hidden:true,
      is_Economy_hidden:true,
      is_Defence_hidden:true,
      is_SAT_hidden:true,
      is_Home_hidden:true
    };
  }


  componentWillMount() {
    this.state.globalview = Object.assign({}, this.view);
    this.state.globalview.is_Home_hidden = false;
    axios.get(`/api/stars`)
    .then((data) =>{
        if (data.data.is_exist){
          console.log(data);
          this.setState({
            star: data.data.today,
            stars:data.data.evergreen,
            notification:data.data.notification
          });
        } else {
          this.setState({
            star:[],
            stars: []
          });
        }
    })
    .catch((error) => {
      this.setState({
        star:[],
        stars: []
      });
    });
  }

  onClickOption(title) {
    const view_local = Object.assign({}, this.view);
    switch(title) {
      case 'GTOD':
        view_local.is_GTOD_hidden = false;
        break;
      case 'IOD':
        view_local.is_IOD_hidden = false;
        break;
      case 'PSYCHD':
        view_local.is_PSYCHD_hidden = false;
        break;
      case 'PDD':
        view_local.is_PDD_hidden = false;
        break;
      case 'ITD':
        view_local.is_ITD_hidden = false;
        break;
      case 'OIR':
        view_local.is_OIR_hidden = false;
        break;
      case 'PP':
        view_local.is_PP_hidden = false;
        break;
      case 'DT':
        view_local.is_DT_hidden = false;
        break;      
      case 'PSYCH':
        view_local.is_PSYCH_hidden = false;
        break;
      case 'GTO':
        view_local.is_GTO_hidden = false;
        break;
      case 'IO':
        view_local.is_IO_hidden = false;
        break;
      case 'SE':
        view_local.is_SE_hidden = false;
        break;
      case 'BL':
        view_local.is_BL_hidden = false;
        break;
      case 'DFS':
        view_local.is_DFS_hidden = false;
        break;
      case 'DAD':
        view_local.is_DAD_hidden = false;
        break;
      case 'National':
        view_local.is_National_hidden = false;
        break;
      case 'International':
        view_local.is_International_hidden = false;
        break;        
      case 'Economy':
        view_local.is_Economy_hidden = false;
        break;
      case 'Defence':
        view_local.is_Defence_hidden = false;
        break;
      case 'SAT':
        view_local.is_SAT_hidden = false;
        break;
      case 'Courses':
        view_local.is_courses = false;
        break;
      case 'FeeStructure':
        view_local.is_fee_structure = false;
        break;
      case 'Contact':
        view_local.is_contact = false;
        break;
      default:
        view_local.is_Home_hidden = false;
    }
    this.setState({globalview :view_local});
  }

  render() {
    const visionPopover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Vision</Popover.Title>
        <Popover.Content>
          To be the best Launchpad for aspirants into the career of Indian Armed Forces & Coast Guards.
        </Popover.Content>
      </Popover>
    );

    const missionPopover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Mission</Popover.Title>
        <Popover.Content>
          Is to provide round the clock accessible and affordable quality mentoring to the SSB aspirants for military career. 
          Aim is imparting authentic and quality mentoring directly from experienced SSB Officer’s through one to one video based 
          interactive sessions with Interviewing Officer, GTO and Psychologist respectively. 
          The entire testing’s of the SSB are conducted for each aspirant along with dedicated one to one basis live interactive 
          sessions post each technique tests so as to provide the feedback about performance and mistakes committed by aspirant 
          while attempting the tests along with tips to overcome shortcomings, so that aspirant is confident before appearing for the SSB. 
          At SSB experts the aspirants can make their own time table and select the mentoring Officers of their own choice and the professional 
          quality mentoring to be provided at their door step.
        </Popover.Content>
      </Popover>
    );

    const wiuPopover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Why Its Unique</Popover.Title>
        <Popover.Content>
          Popover content <strong>some strong content</strong> Normal content again
        </Popover.Content>
      </Popover>
    );

    const coursesPopover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Courses</Popover.Title>
        <Popover.Content>
            <span>One to one - Diamond</span><br />
            <span>Group of 3 - Platinum</span><br />
            <span>Group of 10 - Gold</span><br />
            <span>Group of 20 - Silver</span><br />
        </Popover.Content>
      </Popover>
    );

    const sotdData = (
      <Popover.Content>
        {this.state.star.map((assessor) =>
          <div className='row'>
            <div className='col-4'>
              <img class="img-fluid img-circle" src={assessor.image || require('../../assets/images/bot.jpg')} alt="user" width='100%' height='100%' />
            </div>
            <div className='col'>
              <h6>{assessor.heading}</h6>
              <p>{assessor.text}</p>
            </div>
          </div>
      )}
      </Popover.Content>
    )

    const sotdPopover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Star Of The Day</Popover.Title>
        {
          this.state.star.length > 0
          ? sotdData :
          <Popover.Content>
            <p>No Assessor Exist For Today.</p>
          </Popover.Content>
        }
      </Popover>
    );

    const esData = (
      <Popover.Content>
        {this.state.stars.map((star) =>
          <div className='row'>
            <div className='col-4'>
              <img class="img-fluid img-circle" src={'/media/'+ star.image || require('../../assets/images/bot.jpg')} alt="profile" width='100%' height='100%' />
            </div>
            <div className='col'>
              <span>{star.heading}</span><br />
              <span>{star.text}</span><br />
            <hr />
            </div>
          </div>
      )}
      </Popover.Content>
    )

    const esPopover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Evergreen Star's</Popover.Title>
        {
          this.state.stars.length > 0
          ? esData :
          <Popover.Content>
            <p>No Assessor Exist.</p>
          </Popover.Content>
        }
      </Popover>
    );

    return (
      <div className='content_home'>

        <div className="Navigation">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">

                <NavDropdown title="Home" id="basic-nav-dropdown">
                    <OverlayTrigger trigger="click" rootClose placement="right" overlay={visionPopover}>
                      <Button variant="none" style={{width:'100%'}}>Vision</Button>
                    </OverlayTrigger>
                    <br />

                    <OverlayTrigger trigger="click" rootClose placement="right" overlay={missionPopover}>
                      <Button variant="none" style={{width:'100%'}}>Mission</Button>
                    </OverlayTrigger>
                    <br />

                    <OverlayTrigger trigger="click" rootClose placement="right" overlay={wiuPopover}>
                      <Button variant="none" style={{width:'100%'}}>Why Its Unique</Button>
                    </OverlayTrigger>
                    <br />

                    <OverlayTrigger trigger="click" rootClose placement="right" overlay={coursesPopover}>
                      <Button variant="none" style={{width:'100%'}}>Courses</Button>
                    </OverlayTrigger>

                </NavDropdown>


                <NavDropdown title="Team" id="basic-nav-dropdown">
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('GTOD')} >GTO Dept</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('IOD')} >IO Dept</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('PSYCHD')} >PSYCH Dept</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('PDD')} >PD Dept</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('ITD')} >Intt Test Dept</Button></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Stage1" id="basic-nav-dropdown">
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('OIR')} >OIR</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('PP')} >PP/DT</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('DT')} >GD(optional)</Button></NavDropdown.Item>
                </NavDropdown>
 
                <NavDropdown title="Stage2" id="basic-nav-dropdown">
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('PSYCH')} >PSYCH</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('GTO')} >GTO</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('IO')} >IO</Button></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="PD" id="basic-nav-dropdown">
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('BL')} >Personality Development</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('SE')} >Spoken English</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('DFS')} >Dress For Stage1 and Stage2</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('DAD')} >Do's and Don't</Button></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Current Affairs" id="basic-nav-dropdown">
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('National')} >NATIONAL</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('International')} >INTERNATIONAL</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('Economy')} >ECONOMY</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('Defence')} >DEFENCE</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('SAT')} >SCIENCE AND TECH</Button></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Courses" id="basic-nav-dropdown">
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('Courses')} >Courses</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('FeeStructure')} >Fee Structure</Button></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Roll of Honor" id="basic-nav-dropdown">
                  <OverlayTrigger trigger="click" rootClose placement="right" overlay={sotdPopover}>
                    <Button variant="none" style={{width:'100%'}}>Star Of The Day</Button>
                  </OverlayTrigger>
                  <br />
                  <OverlayTrigger trigger="click" rootClose placement="right" overlay={esPopover}>
                    <Button variant="none" style={{width:'100%'}}>Evergreen Star's</Button>
                  </OverlayTrigger>
                </NavDropdown>

                {/* <NavLink id="basic"> */}
                  <Button className='course' style={{fontWeight: 'bolder', color: 'gray'}} variant='None' onClick={(e) => this.onClickOption('Contact')} >Contact Us</Button>
                  {/* </NavLink> */}
 
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <br />

        <div hidden={this.state.globalview.is_Home_hidden}>
          <Main />
          <br/>
          <div className='scroll_message container-fluid'>
            <marquee behavior="scroll" direction="left">  {this.state.notification} </marquee>
          </div>
        </div>

        <div hidden={this.state.globalview.is_GTO_hidden}>
          <Stage2GTO />
        </div>

        <div hidden={this.state.globalview.is_IO_hidden}>
          <Stage2IO />
        </div>

        <div hidden={this.state.globalview.is_PSYCH_hidden}>
          <Stage2Psych />
        </div>

        <div hidden={this.state.globalview.is_DT_hidden}>
          <Stage1DT />
        </div>

        <div hidden={this.state.globalview.is_OIR_hidden}>
          <Stage1OIR />
        </div>

        <div hidden={this.state.globalview.is_PP_hidden}>
          <Stage1PP />
        </div>

        <div hidden={this.state.globalview.is_GTOD_hidden}>
          <TeamGTO />
        </div>

        <div hidden={this.state.globalview.is_ITD_hidden}>
          <TeamITD />
        </div>

        <div hidden={this.state.globalview.is_PDD_hidden}>
          <TeamPD />
        </div>

        <div hidden={this.state.globalview.is_IOD_hidden}>
          <TeamIO />
        </div>

        <div hidden={this.state.globalview.is_PSYCHD_hidden}>
          <TeamPsych />
        </div>

        <div hidden={this.state.globalview.is_National_hidden}>
          <CurrentAffairNational />
        </div>

        <div hidden={this.state.globalview.is_International_hidden}>
          <CurrentAffairInternational />
        </div>

        <div hidden={this.state.globalview.is_Economy_hidden}>
          <CurrentAffairEconomy />
        </div>

        <div hidden={this.state.globalview.is_Defence_hidden}>
          <CurrentAffairDefence />
        </div>

        <div hidden={this.state.globalview.is_SAT_hidden}>
          <CurrentAffairScienceTech />
        </div>

        <div hidden={this.state.globalview.is_BL_hidden}>
          <PDBodyLanguage />
        </div>

        <div hidden={this.state.globalview.is_DAD_hidden}>
          <PDDAD />
        </div>

        <div hidden={this.state.globalview.is_DFS_hidden}>
          <PDDFS1S2 />
        </div>

        <div hidden={this.state.globalview.is_SE_hidden}>
          <PDSpokenLanguage />
        </div>

        <div hidden={this.state.globalview.is_contact}>
          {/* <Contact /> */}
          <ContactForm />
        </div>

        <div hidden={this.state.globalview.is_courses}>
          <CoursesAgain />
        </div>

        <div hidden={this.state.globalview.is_fee_structure}>
          <CoursesFeeStructure />
        </div>

      </div>
    );
  }
}

export default GeneralMain;
