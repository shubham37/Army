import React, { Component } from 'react';

class PSYCHTest extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className="row">
          <div className='col'>
            <h3>TAT-1</h3>
          </div>
        </div>
        <div className='row container'>
          <div className='col-md'>
            <h4><b><u>Instructions</u></b></h4>
            <ol>
              <li>1- Fill PIQ form</li><br />
              <li>2- Select Your Assessors</li><br />
              <li>3- Select Your Time Table</li><br />
              <li>4- Follow the Time Table</li><br />
            </ol>
            <br />
          </div>
        </div>
        <div className='row'>
          <div className='col-md'>
            <a href='/tat_test/2'><button className='btn btn-info  btn-rounded'>BEGIN TEST</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default PSYCHTest;
