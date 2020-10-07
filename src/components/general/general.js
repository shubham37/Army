import React, { Component } from 'react';
import Navigation from '../navigation.js'
import Main from '../main.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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


class GeneralMain extends Component {
  render() {
    return (
      <div className='content_home'>
        <Navigation />
        <br />
        <BrowserRouter>
          <Switch>

            <Route path='/home/vision' component={Vision} />
            <Route path='/home/mission'  component={Mission} />
            <Route path='/home/why_its_unique' component={WIU} />
            <Route path='/home/courses' component={Courses} />

            <Route path='/contact_us/ceo' component={ContactCEO} />
            <Route path='/contact_us/cmo' component={ContactCMO} />
            <Route path='/contact_us/coo' component={ContactCOO} />

            <Route path='/courses/courses' component={CoursesAgain} />
            <Route path='/courses/fee_structure' component={CoursesFeeStructure} />

            <Route path='/current_affair/defence' component={CurrentAffairDefence} />
            <Route path='/current_affair/economy' component={CurrentAffairEconomy} />
            <Route path='/current_affair/international' component={CurrentAffairInternational} />
            <Route path='/current_affair/national' component={CurrentAffairNational} />
            <Route path='/current_affair/science_tech' component={CurrentAffairScienceTech} />

            <Route path='/pd/body_language' component={PDBodyLanguage} />
            <Route path='/pd/do_and_donts' component={PDDAD} />
            <Route path='/pd/dress_for_s1_s2' component={PDDFS1S2} />
            <Route path='/pd/spoken_language' component={PDSpokenLanguage} />

            <Route path='/roll_of_honor/evergreen_star' component={RollOfHonorEvergreenStar} />
            <Route path='/roll_of_honor/star_of_day' component={RollOfHonorStarDay} />

            <Route path='/stage1/dt' component={Stage1DT} />
            <Route path='/stage1/oir' component={Stage1OIR} />
            <Route path='/stage1/pp' component={Stage1PP} />

            <Route path='/stage2/gto' component={Stage2GTO} />
            <Route path='/stage2/io' component={Stage2IO} />
            <Route path='/stage2/psych' component={Stage2Psych} />

            <Route path='/team/gto_dept' component={TeamGTO} />
            <Route path='/team/intt_test_dept' component={TeamITD} />
            <Route path='/team/io_dept' component={TeamIO} />
            <Route path='/team/pd_dept' component={TeamPD} />
            <Route path='/team/psych_dept' component={TeamPsych} />

            <Route path='/'>
              <Main />
              <br/>
              <div className='scroll_message container-fluid'>
                <marquee behavior="scroll" direction="left">Here is some scrolling text... </marquee>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      );
  }
}

export default GeneralMain;
