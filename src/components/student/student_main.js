import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StudentNavigation from './student_navigation.js'

import StudentAssessorGTO from './assessors/gto_dept.js'
import StudentAssessorITD from './assessors/intt_test_dept.js'
import StudentAssessorIO from './assessors/io_dept.js'
import StudentAssessorPD from './assessors/pd_dept.js'
import StudentAssessorPsych from './assessors/psych_dept.js'

import StudentDashboardGTO from './dashboard/gto_tests.js'
import StudentDashboardIO from './dashboard/io_tests.js'
import StudentDashboardPIQ from './dashboard/piq_form.js'

import StudentProgressReportGTO from './progress_report/gto_dept.js'
import StudentProgressReportITD from './progress_report/intt_test_dept.js'
import StudentProgressReportIO from './progress_report/io_dept.js'
import StudentProgressReportPD from './progress_report/pd_dept.js'
import StudentProgressReportPsych from './progress_report/psych_dept.js'

import StudentTestReportGTO from './test_reports/gto_dept.js'
import StudentTestReportITD from './test_reports/intt_test_dept.js'
import StudentTestReportIO from './test_reports/io_dept.js'
import StudentTestReportPD from './test_reports/pd_dept.js'
import StudentTestReportPsych from './test_reports/psych_dept.js'

import StudentTestGTO from './tests/gto_dept.js'
import StudentTestITD from './tests/intt_test_dept.js'
import StudentTestIO from './tests/io_dept.js'
import StudentTestPD from './tests/pd_dept.js'
import StudentTestPsych from './tests/psych_dept.js'

import StudentIntruction from './instruction.js'
import StudentScheduleToday from './schedule_for_today.js'
import StudentTestPending from './tests_pending.js'
import StudentTrainingSchedule from './training_schedule.js'


class StudentMain extends Component {
  render() {
    return (
        <div className='StudentMain'>
            <div className='row'>
                <div className='col'>
                    <StudentNavigation />
                </div>
            </div>
            <div className='container-fluid'>
                <p>Welcome Mr.Shubham<span className='float-right'><button className='btn-danger'>Logout</button></span></p>
            </div>
            <br />
            <BrowserRouter>
                <Switch>
                    <Route path='/student/assessor/gto' component={StudentAssessorGTO} />
                    <Route path='/student/assessor/itd' component={StudentAssessorITD} />
                    <Route path='/student/assessor/io' component={StudentAssessorIO} />
                    <Route path='/student/assessor/pd' component={StudentAssessorPD} />
                    <Route path='/student/assessor/psych' component={StudentAssessorPsych} />

                    <Route path='/student/dashboard/gto' component={StudentDashboardGTO} />
                    <Route path='/student/dashboard/io' component={StudentDashboardIO} />
                    <Route path='/student/dashboard/piq' component={StudentDashboardPIQ} />

                    <Route path='/student/progress_report/gto' component={StudentProgressReportGTO} />
                    <Route path='/student/progress_report/itd' component={StudentProgressReportITD} />
                    <Route path='/student/progress_report/io' component={StudentProgressReportIO} />
                    <Route path='/student/progress_report/pd' component={StudentProgressReportPD} />
                    <Route path='/student/progress_report/psych' component={StudentProgressReportPsych} />

                    <Route path='/student/test_reports/gto' component={StudentTestReportGTO} />
                    <Route path='/student/test_reports/itd' component={StudentTestReportITD} />
                    <Route path='/student/test_reports/io' component={StudentTestReportIO} />
                    <Route path='/student/test_reports/pd' component={StudentTestReportPD} />
                    <Route path='/student/test_reports/psych' component={StudentTestReportPsych} />

                    <Route path='/student/tests/gto' component={StudentTestGTO} />
                    <Route path='/student/tests/itd' component={StudentTestITD} />
                    <Route path='/student/tests/io' component={StudentTestIO} />
                    <Route path='/student/tests/pd' component={StudentTestPD} />
                    <Route path='/student/tests/psych' component={StudentTestPsych} />

                    <Route path='/student/instruction' component={StudentIntruction} />
                    <Route path='/student/schedule_for_day' component={StudentScheduleToday} />
                    <Route path='/student/pending_test' component={StudentTestPending} />
                    <Route path='/student/training_schedule' component={StudentTrainingSchedule} />
                </Switch>
            </BrowserRouter>
        </div>
    );
  }
}

export default StudentMain;
