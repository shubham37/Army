import React, { Component } from 'react';
import Navigation from './components/navigation.js'
import Footer from './components/footer.js'
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header.js';
import Main from './components/main.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/student'>
            <Header />
          </Route>
          <Route path='/assessors'>
            <h1>Assessors</h1>
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
