import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header row">
        <div className="col">
          <img src={require('../assets/images/flag.jpg')} className='img-responsive float-left' alt='flag' width='100%' height='100%' />
        </div>
      </div>
    );
  }
}

export default Header;
