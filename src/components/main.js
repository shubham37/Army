import React, { Component } from 'react';
import '../assets/css/main.css'
import  FreeTest from './free_test.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LogInForm from  './forms/login_form.js'
import FreeTestForm from './forms/free_test_form.js'

class Main extends Component {
  render() {
    return (
      <div className="Main container-fluid row">
        <div className='col col-sm-6 col-md-6'>
          <FreeTest />
        </div>
        <div className='col col-sm-6 col-md-6'>
          <BrowserRouter>
            <Switch>
              <Route path='/free' >
                <FreeTestForm />
              </Route>
              <Route path='/' >
                <LogInForm />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default Main;
