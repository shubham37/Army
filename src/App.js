import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/header.js';
import Footer from './components/footer.js'
import StudentMain from './components/student/student_main.js'
import FreeTestInstruction from './components/free_test_instruction.js'
import AssessorMain from './components/assessors/assessors_main.js'
import AdminMain from './components/admin/admin_main.js'
import GeneralMain from './components/general/general.js'
import CreateAccount from './components/forms/create_account.js'

import './App.css';


class App extends Component {

  render() {
    return (
      <div>
        <Header />
          <BrowserRouter>
            <Switch>
              <Route path='/create_account'>
                  <CreateAccount />
              </Route>
              <Route path='/student'>
                <StudentMain />
              </Route>
              <Route path='/assessor'>
                <AssessorMain />
              </Route>
              <Route path='/admin_user'>
                <AdminMain />
              </Route>
              <Route path='/free_test_instruction'>
                <FreeTestInstruction />
              </Route>
              <Route path='/'>
                <GeneralMain />
              </Route>
            </Switch>
          </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
