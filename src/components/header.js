import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header row">
        <div className="col-md-8 col-6 col-s-8">
          <img src={require('../assets/images/flag.jpg')} className='img-responsive float-left' alt='flag' width='100%' height='100%' />
        </div>
        <div className="col-md-4 col-6 col-s-4">
          <img src={require('../assets/images/ssb_logo.png')} className='img-responsive float-left' alt='flag' width='100%' height='100%' />
        </div>
      </div>
    );
  }
}

export default Header;
