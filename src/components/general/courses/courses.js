import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
class CoursesAgain extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Card>
          <Card.Header>Courses</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <ol>
                <li>One to one - Diamond</li><br />
                <li>Group of 3 - Platinum</li><br />
                <li>Group of 10 - Gold</li><br />
                <li>Group of 20 - Silver</li><br />
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

export default CoursesAgain;
