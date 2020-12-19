import React, { Component } from 'react';
import {Button} from  'react-bootstrap'
import  '../assets/css/free_test.css'

class FreeTest extends Component {
  render() {
    return (
      <div className="FreeTest">
        <div  className='row'>
          <div className='col-md-11 offset-md-1'>
            <img src={require('../assets/images/meter.jpg')} alt='meter' width='100%' />
          </div>
        </div>
        <div  className='row'>
          <div className='col-md-11 offset-md-1' style={{textAlign:'center'}}>
            <a href='/free'><Button className='free_btn'>Take Military Apptitute Test</Button></a>
          </div>
        </div>
    </div>
    );
  }
}

export default FreeTest;
