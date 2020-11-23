import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return (
      <div className='container'>
          <p style={{ fontSize: 'larger', fontWeight: 'bold', textAlign: 'center', borderBottom: '1px solid gray', padding: '2% 0' }}>
              Cheif Executive Officer
          </p>
            <div className='row'>
              <div className='col-md-4 col-6'>
                <img class="img-fluid rounded-circle" src={require('../../assets/images/user.jpg')} alt="Chania" width='100%' height='150' style={{border:'1px solid gray'}} />
              </div>
              <div className='col-md-8 col-6' style={{padding:'2%'}}>
                <span>Full Name</span><br />
                <span>Date of Birth || Date of Joining</span><br />
                <span>Gender || Department || Designation</span><br />
              </div>
            </div>

        <br />

        <p style={{ fontSize: 'larger', fontWeight: 'bold', textAlign: 'center', borderBottom: '1px solid gray', padding: '2% 0' }}>
            Chief Marketing Officer
          </p>
            <div className='row'>
              <div className='col-md-4 col-6'>
                <img class="img-fluid rounded-circle" src={require('../../assets/images/user.jpg')} alt="Chania" width='100%' height='75%' style={{border:'1px solid gray'}} />
              </div>
              <div className='col-md-8 col-6' style={{padding:'2%'}}>
                <span>Full Name</span><br />
                <span>Date of Birth || Date of Joining</span><br />
                <span>Gender || Department || Designation</span><br />
              </div>
            </div>

        <br />

        <p style={{ fontSize: 'larger', fontWeight: 'bold', textAlign: 'center', borderBottom: '1px solid gray', padding: '2% 0' }}>
        Chief Operating Officer
          </p>
            <div className='row'>
              <div className='col-md-4 col-6'>
                <img class="img-fluid rounded-circle" src={require('../../assets/images/user.jpg')} alt="Chania" width='100%' height='75%' style={{border:'1px solid gray'}} />
              </div>
              <div className='col-md-8 col-6' style={{padding:'2%'}}>
                <span>Full Name</span><br />
                <span>Date of Birth || Date of Joining</span><br />
                <span>Gender || Department || Designation</span><br />
              </div>
            </div>

        <br />
      </div>
    );
  }
}

export default Contact;
