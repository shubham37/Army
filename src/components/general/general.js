import React, { Component } from 'react';
import Main from '../main.js'
import Vision from '../general/home/vision.js'
import Mission from '../general/home/mission.js'
import WIU from '../general/home/wiu.js'
import Courses from '../general/home/courses.js'
import ContactCEO from '../general/contact_us/ceo.js'
import ContactCMO from '../general/contact_us/cmo.js'
import ContactCOO from '../general/contact_us/coo.js'
import CoursesAgain from '../general/courses/courses.js'
import CoursesFeeStructure from '../general/courses/fee_structure.js'
import CurrentAffairDefence  from '../general/current_affair/defence.js'
import CurrentAffairEconomy from '../general/current_affair/economy.js'
import CurrentAffairInternational from '../general/current_affair/international.js'
import CurrentAffairNational from '../general/current_affair/national.js'
import CurrentAffairScienceTech from '../general/current_affair/science_tech.js'
import PDBodyLanguage from '../general/pd/body_langauge.js'
import PDDAD from  '../general/pd/do_and_dont.js'
import PDDFS1S2 from '../general/pd/dress_for_s1_s2.js'
import PDSpokenLanguage from '../general/pd/dress_for_s1_s2.js'
import RollOfHonorEvergreenStar from '../general/roll_of_honor/evergreen_star.js'
import RollOfHonorStarDay from '../general/roll_of_honor/star_of_day.js'
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
import {NavDropdown, Navbar,Nav, Button} from 'react-bootstrap'
import '../../assets/css/general.css'

class GeneralMain extends Component {
  constructor(props) {
    super(props);
    this.state ={
      globalview : {}
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
      is_Vision_hidden:true,
      is_Mission_hidden:true,
      is_Wiu_hidden:true,
      is_Courses_hidden:true,
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
      is_International_hidden:true,
      is_Economy_hidden:true,
      is_Defence_hidden:true,
      is_SAT_hidden:true,
      is_CC_hidden:true,
      is_FS_hidden:true,
      is_SOD_hidden:true,
      is_ES_hidden:true,
      is_CEO_hidden:true,
      is_CMO_hidden:true,
      is_COO_hidden:true,
      is_Home_hidden:true
    };
  
  }

  componentWillMount() {
    this.state.globalview = Object.assign({}, this.view);
    this.state.globalview.is_Home_hidden = false;
  }

  onClickOption(title) {
    const view_local = Object.assign({}, this.view);
    switch(title) {
      case 'Vision':
        view_local.is_Vision_hidden = false;
        break;
      case 'Mission':
        view_local.is_Mission_hidden = false;
        break;
      case 'Wiu':
        view_local.is_Wiu_hidden = false;
        break;
      case 'Courses':
        view_local.is_Courses_hidden = false;
        break;
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
      case 'CC':
        view_local.is_CC_hidden = false;
        break;        
      case 'FS':
        view_local.is_FS_hidden = false;
        break;        
      case 'SOD':
        view_local.is_SOD_hidden = false;
        break;        
      case 'ES':
        view_local.is_ES_hidden = false;
        break;        
      case 'CEO':
        view_local.is_CEO_hidden = false;
        break;        
      case 'CMO':
        view_local.is_CMO_hidden = false;
        break;        
      case 'COO':
        view_local.is_COO_hidden = false;
        break;
      default:
        view_local.is_Home_hidden = false;
    }
    this.setState({globalview :view_local});
  }

  render() {
    return (
      <div className='content_home'>

        <div className="Navigation">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img src={require('../../assets/images/logo.png')} alt="imag" width={100} height={50} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">

                {/* <HomeNavigation /> */}
                <NavDropdown title="Home" id="basic-nav-dropdown">
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('Vision')}>Vision</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('Mission')} >Mission</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('Wiu')} >Why its unique</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('Courses')} >Courses</Button></NavDropdown.Item>
                </NavDropdown>


                {/* <TeamNavigation /> */}
                <NavDropdown title="Team" id="basic-nav-dropdown">
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('GTOD')} >GTO Dept</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('IOD')} >IO Dept</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('PSYCHD')} >PSYCH Dept</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('PDD')} >PD Dept</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('ITD')} >Intt Test Dept</Button></NavDropdown.Item>
                </NavDropdown>

                {/* <Stage1Navigation /> */}
                <NavDropdown title="Stage1" id="basic-nav-dropdown">
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('OIR')} >OIR</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('PP')} >PP</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('DT')} >DT</Button></NavDropdown.Item>
                </NavDropdown>
 
                {/* <Stage2Navigation /> */}
                <NavDropdown title="Stage2" id="basic-nav-dropdown">
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('PSYCH')} >PSYCH</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('GTO')} >GTO</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('IO')} >IO</Button></NavDropdown.Item>
                </NavDropdown>

                {/* <PDNavigation /> */}
                <NavDropdown title="PD" id="basic-nav-dropdown">
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('SE')} >SPOKEN ENGLISH</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('BL')} >BODY LANGUAGE</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('DFS')} >DRESS FOR STAGE1 AND STAGE2</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('DAD')} >DO'S AND DON'T</Button></NavDropdown.Item>
                </NavDropdown>

                {/* <CurrentAffairNavigation /> */}
                <NavDropdown title="Current Affairs" id="basic-nav-dropdown">
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('National')} >NATIONAL</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('Internation')} >INTERNATIONAL</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('Economy')} >ECONOMY</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('Defence')} >DEFENCE</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('SAT')} >SCIENCE AND TECH</Button></NavDropdown.Item>
                </NavDropdown>

                {/* <CoursesNavigation /> */}
                <NavDropdown title="Courses" id="basic-nav-dropdown">
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('CC')} >COURSES</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('FS')} >FEE STRUCTURE</Button></NavDropdown.Item>
                </NavDropdown> 

                {/* <RollOfHonorNavigation /> */}
                <NavDropdown title="Roll of Honor" id="basic-nav-dropdown">
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('SOD')} >Star Of The Day</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('ES')} >Evergreen Star's</Button></NavDropdown.Item>
                </NavDropdown>


                {/* <ContactNavigation /> */}
                <NavDropdown title="Contact us" id="basic-nav-dropdown">
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('CEO')} >Chief Executive Offier</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('COO')} >Chief Operations Offier</Button></NavDropdown.Item>
                  <NavDropdown.Item><Button variant='None' onClick={(e) => this.onClickOption('CMO')} >Chief Marketing Offier</Button></NavDropdown.Item>
                </NavDropdown>
 
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <br />

        <div hidden={this.state.globalview.is_Home_hidden}>
          <Main />
          <br/>
          <div className='scroll_message container-fluid'>
            <marquee behavior="scroll" direction="left">Here is some scrolling text... </marquee>
          </div>
        </div>

        <div hidden={this.state.globalview.is_Vision_hidden}>
          <Vision />
        </div>

        <div hidden={this.state.globalview.is_Mission_hidden}>
          <Mission />
        </div>

        <div hidden={this.state.globalview.is_Wiu_hidden}>
          <WIU />
        </div>

        <div hidden={this.state.globalview.is_Courses_hidden}>
          <Courses />
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

        <div hidden={this.state.globalview.is_CC_hidden}>
          <CoursesAgain />
        </div>

        <div hidden={this.state.globalview.is_FS_hidden}>
          <CoursesFeeStructure />
        </div>

        <div hidden={this.state.globalview.is_ES_hidden}>
          <RollOfHonorEvergreenStar />
        </div>

        <div hidden={this.state.globalview.is_SOD_hidden}>
          <RollOfHonorStarDay />
        </div>

        <div hidden={this.state.globalview.is_CEO_hidden}>
          <ContactCEO />
        </div>

        <div hidden={this.state.globalview.is_CMO_hidden}>
          <ContactCMO />
        </div>

        <div hidden={this.state.globalview.is_COO_hidden}>
          <ContactCOO />
        </div>
      </div>
    );
  }
}

export default GeneralMain;
