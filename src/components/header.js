import React, { Component } from 'react';
import '../assets/css/header.css'

class Header extends Component {
  render() {
    return (
      <div className="Header row">
        <div className="col-md-8 col-6 col-s-8">
          <div id="carouselExampleSlides" class="carousel slide carousel-fade" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={require('../assets/images/img1.jpeg')} className='img-responsive flag' alt='flag' data-toggle='modal' data-target='#firstModal' />
                </div>
                <div class="carousel-item">
                  <img src={require('../assets/images/img2.jpeg')} className='img-responsive flag' alt='flag' data-toggle='modal' data-target='#secondModal' />
                </div>
                <div class="carousel-item">
                  <img src={require('../assets/images/img3.jpeg')} className='img-responsive flag' alt='flag' data-toggle='modal' data-target='#threeModal' />
                </div>
                <div class="carousel-item">
                  <img src={require('../assets/images/img4.jpeg')} className='img-responsive flag' alt='flag' data-toggle='modal' data-target='#fourModal' />
                </div>
              </div>
            </div>
          </div>
        <div className="col-md-4 col-6 col-s-4">
          <a href='/'>
            <img src={require('../assets/images/ssb_logo.png')} className='img-responsive float-left' alt='flag' width='100%' height='100%' />
          </a>            
        </div>

        <div class="modal fade bd-example-modal-lg mdl" id="firstModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" role="document">
              <div class="modal-content modatent">
                <img src={require('../assets/images/img1.jpeg')} className='img-responsive modalimg' alt='flag' />
            </div>
          </div>
        </div>

        <div class="modal fade bd-example-modal-lg mdl" id="secondModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" role="document">
              <div class="modal-content modatent">
                <img src={require('../assets/images/img2.jpeg')} className='img-responsive modalimg' alt='flag' />
            </div>
          </div>
        </div>

        <div class="modal fade bd-example-modal-lg mdl" id="threeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" role="document">
              <div class="modal-content modatent">
                <img src={require('../assets/images/img3.jpeg')} className='img-responsive modalimg' alt='flag' />
            </div>
          </div>
        </div>

        <div class="modal fade bd-example-modal-lg mdl" id="fourModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" role="document">
              <div class="modal-content modatent">
                <img src={require('../assets/images/img4.jpeg')} className='img-responsive modalimg' alt='flag' />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Header;
