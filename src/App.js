import React, { Component } from 'react';
// import './App.css';
import './assets/css/main.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={require('./assets/images/flag.jpg')} alt='flag.jpg' className='img-fluid float-right' height='15%' />
        <img src={require('./assets/images/flag.jpg')} alt='flag.jpg' className='img-responsive float-left' width='60%' height={150} />
      </div>
    );
  }
}

export default App;
