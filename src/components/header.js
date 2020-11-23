import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header row">
        <div className="col-md-8 col-6 col-s-8">
          <div id="carouselExampleSlides" class="carousel slide carousel-fade" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={require('../assets/images/flag.jpg')} className='img-responsive flag' alt='flag' />
                </div>
                <div class="carousel-item">
                  <img src={require('../assets/images/logo.png')} className='img-responsive flag' alt='flag' />
                </div>
                <div class="carousel-item">
                  <img src={require('../assets/images/ssb_logo.png')} className='img-responsive flag' alt='flag' />
                </div>
              </div>
            </div>
          </div>
        <div className="col-md-4 col-6 col-s-4">
          <a href='/'>
            <img src={require('../assets/images/ssb_logo.png')} className='img-responsive float-left' alt='flag' width='100%' height='100%' />
          </a>            
        </div>
      </div>
    );
  }
}

export default Header;
