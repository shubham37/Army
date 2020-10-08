import React, { Component } from 'react';


class SDTest3 extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <br />
        <div className="row">
          <div className='col float-left'>
            <h3>TAT-1</h3>
          </div>
          <div className='col'>
            <h1 className='float-right'>04:00</h1>
          </div>
        </div>
        <br />
        <div className='row container'>
          <div className='col'>
            <textarea cols='120' rows='15' placeholder='Write Your Story Here ...' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md'>
            <a href='/'><button className='btn btn-info  btn-rounded'>SUBMIT TEST</button></a>
          </div>
        </div>

      </div>
    );
  }
}

export default SDTest3;
