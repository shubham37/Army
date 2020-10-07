import React, { Component } from 'react';
import { Card } from 'react-bootstrap'

class RollOfHonorStarDay extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Card>
          <Card.Header>Star of the day</Card.Header>
          <Card.Body>
            <div className='row'>
              <div className='col float-right'>
                <h4>Image</h4>
              </div>
              <div className='col float-left'>
                <h4>Bio Data</h4>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default RollOfHonorStarDay;
