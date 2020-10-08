import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'

class StudentAssessorIO extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Card>
          <Card.Header>GTO Dept. Assessors</Card.Header>
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
                    <a href='/'><Button variant="primary">See Availability</Button></a>
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
                    <a href='/'><Button variant="primary">See Availability</Button></a>
                  </Card.Body>
                </Card>                
              </div>

            </div>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}

export default StudentAssessorIO;
