import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class StudentIntruction extends Component {
  render() {
    return (
      <div className="row container-fluid">
        <div className='col'>
          <Card>
            <Card.Header>Instructions For Candidate </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <ol>
                  <li>Step 1- Fill PIQ form</li><br />
                  <li>Step 2- Select Your Assessors</li><br />
                  <li>Step 3- Select Your Time Table</li><br />
                  <li>Step 4- Follow the Time Table</li><br />
                </ol>
                <p>See Demo Video to see the entire Procedure</p>
              </blockquote>
            </Card.Body>
          </Card>
          <br />
        </div>
      </div>
    );
  }
}

export default StudentIntruction;
