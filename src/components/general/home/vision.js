import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Vision extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Card>
          <Card.Header>Vission</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.
              </p>
            </blockquote>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}

export default Vision;
