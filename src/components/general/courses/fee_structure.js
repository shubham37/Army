import React, { Component } from 'react';
import { Card } from 'react-bootstrap'

class CoursesFeeStructure extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Card>
          <Card.Header>FEES-</Card.Header>
          <Card.Body>
            <ol>
              <li>One to one - Diamond - 12,000 Per Head</li><br />
              <li>Group of 3 - Platinum 9,000 Per Head</li><br />
              <li>Group of 10 - Gold - 8,500 Per Head</li><br />
              <li>Group of 20 - Silver - 7,500 Per Head</li><br />
            </ol>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}

export default CoursesFeeStructure;
