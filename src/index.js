import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import TATTest from './components/Tests/Tat/tat_test.js'
import WATTest from './components/Tests/Wat/wat_test.js'
import SRTTest from './components/Tests/SRT/srt_test.js'
import SDTest from './components/Tests/SD/sd_test.js'
import PSYCHTest from './components/Tests/PSYCH/psych_test.js'
import GTODT from './components/DeptTests/GTO/test.js'
import IODT from './components/DeptTests/IO/test.js'
import ITDDT from './components/DeptTests/ITD/test.js'
import PDDT from './components/DeptTests/PD/test.js'
import PSYCHDT from './components/DeptTests/PSYCH/test.js'

import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>

    <Route exact path='/gto_dept_test'>
        <GTODT />
      </Route>
      <Route exact path='/io_dept_test'>
        <IODT />
      </Route>
      <Route exact path='/itd_dept_test'>
        <ITDDT />
      </Route>
      <Route exact path='/pd_dept_test'>
        <PDDT />
      </Route>
      <Route exact path='/psych_dept_test'>
        <PSYCHDT />
      </Route>

      <Route exact path='/tat_test'>
        <TATTest />
      </Route>

      <Route exact path='/wat_test'>
        <WATTest />
      </Route>

      <Route exact path='/srt_test'>
        <SRTTest />
      </Route>

      <Route exact path='/sd_test'>
        <SDTest />
      </Route>

      <Route exact path='/psych_test'>
        <PSYCHTest />
      </Route>

      <Route path='/'>
        <App />
      </Route>

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
