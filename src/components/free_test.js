import React, { Component } from 'react';
import {Button} from  'react-bootstrap'
import  '../assets/css/free_test.css'

class FreeTest extends Component {
  render() {
    return (
      <div className="FreeTest">
        <div  className='row'>
          <div className='col'>
            <img src={require('../assets/images/meter.jpg')} alt='meter' width='100%' />
            <br />
          </div>
          <div className='row'>
            <div className='col free_btn'>
              <Button variant="primary">Free Test Me</Button>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default FreeTest;
