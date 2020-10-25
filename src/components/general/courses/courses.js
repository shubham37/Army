import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
class CoursesAgain extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Card>
          <Card.Header>Courses Available</Card.Header>
          <Card.Body>
            <p>
              <ol>
                <li>One to one - Diamond</li><br />
                <li>Group of 3 - Platinum</li><br />
                <li>Group of 10 - Gold</li><br />
                <li>Group of 20 - Silver</li><br />
              </ol>
            </p>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}

export default CoursesAgain;
