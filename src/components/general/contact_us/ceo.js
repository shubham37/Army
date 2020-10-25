import React, { Component } from 'react';
import { Card } from 'react-bootstrap'

class ContactCEO extends Component {
  render() {
    return (
      <div className='container'>
        <Card>
          <Card.Header>CEO</Card.Header>
          <Card.Body>
            <div className='row'>
              <div className='col-md'>
                <img class="img-fluid rounded-circle" src={require('../../../assets/images/meter.jpg')} alt="Chania" />
              </div>
              <div className='col-md'>
              <ol>
                <li>Full Name</li><br />
                <li>Date of Birth || Date of Joining</li><br />
                <li>Gender || Department || Designation</li><br />
              </ol>
              </div>
            </div>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}

export default ContactCEO;
