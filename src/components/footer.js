import React, { Component } from 'react';
import '../assets/css/footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="row civil">
          <div className="col">
            <img src={require('../assets/images/civil.jpg')} className='img-responsive float-left' alt='flag' width='100%' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <ul>
              <li><img src={require('../assets/images/fb.png')} className='rounded' alt='Facebook' width='25px' height='25px' /></li>
              <li><img src={require('../assets/images/twitter.png')} className='rounded' alt='Twitter' width='25px' height='25px' /></li>
              <li><img src={require('../assets/images/yt.jpg')} className='rounded' alt='Youtube' width='25px' height='25px' /></li>
              <li><img src={require('../assets/images/ln.png')} className='rounded' alt='LinkedIn' width='25px' height='25px' /></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
