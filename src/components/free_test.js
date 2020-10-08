import React, { Component } from 'react';
import {Button} from  'react-bootstrap'
import  '../assets/css/free_test.css'

class FreeTest extends Component {
  render() {
    return (
      <div className="FreeTest">
        <div  className='row'>
          <div className='col-md-8 offset-md-2 float-right  free_btn'>
            <img src={require('../assets/images/meter.jpg')} alt='meter' width='100%' />
            <br />
            <a href='/free'><Button variant="primary">Free Test Me</Button></a>
            <br />
          </div>
        </div>
    </div>
    );
  }
}

export default FreeTest;
