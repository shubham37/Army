import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class StudentPIQForm extends Component {
  render() {
    return (
      <div className="row container-fluid">
        <div className='col'>
          <Card>
            <Card.Header>PIQ Form</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <button className="btn btn-danger" >Click to fill PIQ Form</button>
              </blockquote>
            </Card.Body>
          </Card>
          <br />
        </div>
      </div>
    );
  }
}

export default StudentPIQForm;
