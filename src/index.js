import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './test'
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/test'>
        <Test />
      </Route>
      <Route path='/'>
        <App />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
