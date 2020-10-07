import React, { Component } from 'react';
import { Card } from 'react-bootstrap'

class CoursesFeeStructure extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Card>
          <Card.Header>FEES-</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <ol>
                <li>One to one - Diamond - 12,000 Per Head</li><br />
                <li>Group of 3 - Platinum 9,000 Per Head</li><br />
                <li>Group of 10 - Gold - 8,500 Per Head</li><br />
                <li>Group of 20 - Silver - 7,500 Per Head</li><br />
              </ol>
              <p>
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CoursesFeeStructure;
