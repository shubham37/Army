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
              <li><a href='https://facebook.com'><img src={require('../assets/images/fb.png')} className='rounded' alt='Facebook' width='25px' height='25px' /></a></li>
              <li><a href='https://twitter.com'><img src={require('../assets/images/twitter.png')} className='rounded' alt='Twitter' width='25px' height='25px' /></a></li>
              <li><a href='https://youtube.com'><img src={require('../assets/images/yt.jpg')} className='rounded' alt='Youtube' width='25px' height='25px' /></a></li>
              <li><a href='https://linkedin.com'><img src={require('../assets/images/ln.png')} className='rounded' alt='LinkedIn' width='25px' height='25px' /></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
