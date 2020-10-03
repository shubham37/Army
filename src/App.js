import React, { Component } from 'react';
import Navigation from './components/navigation.js'
import Footer from './components/footer.js'
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header.js';
import Main from './components/main.js'
import StudentMain from './components/student/student_main.js'
import FreeTestInstruction from './components/free_test_instruction.js'
import AssessorMain from './components/assessors/assessors_main.js'
import AdminMain from './components/admin/admin_main.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/student'>
            <StudentMain />
          </Route>
          <Route path='/assessors'>
            <AssessorMain />
          </Route>
          <Route path='/admin_user'>
            <AdminMain />
          </Route>
          <Route path='/free_test'>
            <FreeTestInstruction />
          </Route>
          <Route path='/'>
            <Navigation />
            <Main />
            <br/>
            <div className='scroll_message container-fluid'>
              <marquee behavior="scroll" direction="left">Here is some scrolling text... </marquee>
            </div>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
