import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class IODT extends Component {
  render() {
    return (
      <div>
        <div className="row" style={{backgroundColor:'blueviolet', color:'white', padding:'1%', boxShadow:'2px 2px 2px 2px grey'}}>
          <div className='col'>
            <h4 className='container-fluid'>IO Department</h4>
          </div>
        </div>
        <br />
        <div className='row container'>
          <div className='col-md'>
            <Card body>
              <p>
                Welcome Mr/Ms XXXXX,<br />
                Your Test is scheduled at XXXXX Hrs on XXXX date.<br />
                Before appearing for the tests , you must go through the training videos given in your dashboard atleast once.<br />
                See You after XX Hr xx Minutes <br />
                <footer className='float-right'>Col XXXXXX</footer>
              </p>
            </Card>
          </div>
        </div>
        <br />
        <div className='row container'>
          <div className='col-md' style={{textAlign:'center'}}>
            <span style={{marginTop:'1%', padding:'2%', backgroundColor:'blue', fontWeight:'bolder', color:'white'}}>00 : 30</span>
          </div>
        </div>
        <br />
        <br />
        <div className='row container'>
          <div className='col-md col-xs' style={{textAlign:'center'}}>
            <img src={require('../../../assets/images/meter.jpg')} alt='MrXXX' style={{width:'75%', border:'1px solid black', borderRadius:'4px'}} /><br />
            <h4>Mr. XXXXXX</h4>
          </div>
          <div className='col-md col-xs' style={{textAlign:'center'}}>
            <img src={require('../../../assets/images/meter.jpg')} alt='MrXXX' style={{width:'75%', border:'1px solid black', borderRadius:'4px'}} /><br />
            <h4>COL XXXXXX</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default IODT;
