import React, { Component } from 'react';
import AssessorNavigation from './assessors_navigation.js'
import AssessorAccount  from './accounts.js'
import AssessorBriefcase from './briefcase.js'
import AssessorInstruction from './instruction.js'
import AssessorProgressReport from './progress_reports.js'
import AssessorRating from './ratings.js'
import AssessorScheduleToday from './schedule_for_today.js'
import AssessorStatistics  from './statistics.js'
import AssessorTestReport from './test_reports.js'
import AssessorTrainingSchedule  from './training_schedule.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class AssessorMain extends Component {
  render() {
    return (
        <div className='AssessorMain'>
            <div className='row'>
                <div className='col'>
                    <AssessorNavigation />
                </div>
            </div>
            <br />
            <div className='row container-fluid'>
                <div className='col'>
                    <span className='float-left'>Welcome, Mr. Shubham Pratap Singh</span>
                </div>
                <div className='col'>
                    <span className='float-right'><button className='btn-danger'>Logout</button></span>
                </div>
            </div>
            <br />
            <BrowserRouter>
                <Switch>
                    <Route path='/assessor/briefcase' component={AssessorBriefcase} />
                    <Route path='/assessor/instruction' component={AssessorInstruction} />
                    <Route path='/assessor/training_schedule' component={AssessorTrainingSchedule} />
                    <Route path='/assessor/schedule_for_day' component={AssessorScheduleToday} />
                    <Route path='/assessor/test_report' component={AssessorTestReport} />
                    <Route path='/assessor/progress_report' component={AssessorProgressReport} />
                    <Route path='/assessor/rating' component={AssessorRating} />
                    <Route path='/assessor/account' component={AssessorAccount} />
                    <Route path='/assessor/statistics' component={AssessorStatistics} />
                </Switch>
            </BrowserRouter>

        </div>
    );
  }
}

export default AssessorMain;
