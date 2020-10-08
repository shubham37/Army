import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminNavigation from './admin_navigation.js'
import AdminAccount  from './accounts.js'
import AdminBriefcase from './briefcase.js'
import AdminFinance from './finance.js'
import AdminHR from './hr.js'
import AdminMarketing from './marketing.js'
import AdminMisc from './misc.js'
import AdminTraining  from './training.js'
import '../../assets/css/admin.css'

class AdminMain extends Component {
  render() {
    return (
        <div className='AdminMain container-fluid'>
            <div className='row admin_navigation'>
                <div className='col'>
                    <AdminNavigation />
                </div>
            </div>
            <br />                                                                                                                                              
            <div className='row container-fluid'>
                <div className='col'>
                    <span className='float-left'>Welcome Admin Office</span>
                    <span className='float-right'><button className='btn-danger'>Logout</button></span> 
                    <br />
                    <hr />                                                
                </div>
            </div>
            <BrowserRouter>
                <Switch>
                    <Route path='/admin_user/accounts' component={AdminAccount} />
                    <Route path='/admin_user/briefcase' component={AdminBriefcase} />
                    <Route path='/admin_user/finance' component={AdminFinance} />
                    <Route path='/admin_user/hr' component={AdminHR} />
                    <Route path='/admin_user/marketing' component={AdminMarketing} />
                    <Route path='/admin_user/misc' component={AdminMisc} />
                    <Route path='/admin_user/training' component={AdminTraining} />
                </Switch>
            </BrowserRouter>
        </div>
    );
  }
}

export default AdminMain;
