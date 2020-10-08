import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'
import AssessorAvailablityCheck from '../assessor_availability.js'


class StudentAssessorIO extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Card>
          <Card.Header>IO Dept. Assessors</Card.Header>
          <Card.Body>
            <div className='row'>
              <div className='col'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" alt='User_Image' />
                  <Card.Body>
                    <Card.Title>Col Mr. XXXX</Card.Title>
                    <Card.Text>
                      BioData Details.
                    </Card.Text>
                    <Button variant="primary" data-toggle="modal" data-target="#availabilityModal">See Availability</Button>
                  </Card.Body>
                </Card>                
              </div>
              <div className='col'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" alt='User_Image' />
                  <Card.Body>
                    <Card.Title>Col Mr. XXXX</Card.Title>
                    <Card.Text>
                      BioData Details.
                    </Card.Text>
                    <Button variant="primary" data-toggle="modal" data-target="#availabilityModal">See Availability</Button>
                  </Card.Body>
                </Card>                
              </div>
              <AssessorAvailablityCheck />

            </div>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}

export default StudentAssessorIO;
