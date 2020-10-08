import React, { Component } from 'react';


class WATTest2 extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <br />
        <div className="row">
          <div className='col float-left'>
            <h3>WAT-1</h3>
          </div>
          <div className='col'>
            <h1 className='float-right'>00:15</h1>
          </div>
        </div>

        <div className='row container'>
          <div className='col-md'>
            <img src={require('../../../assets/images/meter.jpg')} alt='TAT-PIC-1' width={600} height={400} />
          </div>
        </div>
      </div>
    );
  }
}

export default WATTest2;
