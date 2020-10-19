import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'
import AssessorAvailablityCheck from '../assessor_availability.js'


class StudentAssessorPsych extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Card>
          <Card.Header>PSYCH Dept. Assessors</Card.Header>
          <Card.Body>
            <div className='row'>
              <div className='col'>
                <Card style={{ width: '18rem' }}>
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
                  <Card.Body>
                    <Card.Title>Brig Mr. XXXX</Card.Title>
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

export default StudentAssessorPsych;
