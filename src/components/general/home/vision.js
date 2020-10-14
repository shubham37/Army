import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Vision extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Card>
          <Card.Header><b>Vission</b></Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                To be the best Launchpad for aspirants into the career of Indian Armed Forces & Coast Guards.
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
