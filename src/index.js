import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Test from './components/student/test.js'
import DeoartmentTraining from './components/student/training.js'
import ResetPassword from './components/reset.js'
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/training/:dept'>
        <DeoartmentTraining />
      </Route>

      <Route exact path='/test/:code'>
        <Test />
      </Route>

      <Route path='/reset_password/:uuid/:id'>
        <ResetPassword />
      </Route>

      <Route path='/'>
        <App />
      </Route>

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

