import React, { Component } from 'react';
import { Card } from 'react-bootstrap'

class RollOfHonorEvergreenStar extends Component {
  render() {
    return (
      <div className='container'>
        <Card>
          <Card.Header>Evergreen Star's</Card.Header>
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
            <hr />
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
          <br />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default RollOfHonorEvergreenStar;
