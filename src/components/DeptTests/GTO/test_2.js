import React, { Component } from 'react';


class GTODT extends Component {
  render() {
    return (
      <div>
        <div className="row" style={{backgroundColor:'blueviolet', color:'white', padding:'1%', boxShadow:'2px 2px 2px 2px grey'}}>
          <div className='col'>
            <h4 className='container-fluid'>GTO Department</h4>
          </div>
        </div>
        <br />
        <br />
        <div className='row container'>
          <div className='col-md' style={{textAlign:'center'}}>
            <span style={{margin:'1%', padding:'2%', backgroundColor:'blue', fontWeight:'bolder', color:'white'}}>00 : 30</span>
            <span style={{margin:'1%', padding:'2%', backgroundColor:'red', fontWeight:'bolder', color:'white'}}>Live</span>
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

export default GTODT;
