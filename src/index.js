import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './test'
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/test' component={Test}>
      </Route>
      <Route path='/' component={App}>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
