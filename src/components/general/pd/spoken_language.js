import React, { Component } from 'react';
import { Card } from 'react-bootstrap'

class PDSpokenLanguage extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <h4>Spoken English</h4>
            <hr />            
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <Card>
              <Card.Header>Training Videos</Card.Header>
              <Card.Body>
                <div className='row'>
                  <div className='col'>
                    <h3>Video 1</h3>
                  </div>
                  <div className='col'>
                    <h3>Video 2</h3>
                  </div>
                  <div className='col'>
                    <h3>Video 3</h3>
                  </div>
                  <div className='col'>
                    <h3>Video 3</h3>
                  </div>
                </div>
                </Card.Body>
            </Card>
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col'>
            <Card>
              <Card.Header>Practice (45 Min)</Card.Header>
              <Card.Body>
                <div className='row'>
                  <div className='col'>
                    <h3>Video 1</h3>
                  </div>
                  <div className='col'>
                    <h3>Video 2</h3>
                  </div>
                  <div className='col'>
                    <h3>Video 3</h3>
                  </div>
                  <div className='col'>
                    <h3>Video 3</h3>
                  </div>
                </div>
                </Card.Body>
            </Card>
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col'>
            <Card>
              <Card.Header>Interactive Session-1 (30 Min)</Card.Header>
              <Card.Body>
                <div className='row'>
                  <div className='col'>
                    <h3>Video 1</h3>
                  </div>
                  <div className='col'>
                    <h3>Video 2</h3>
                  </div>
                  <div className='col'>
                    <h3>Video 3</h3>
                  </div>
                  <div className='col'>
                    <h3>Video 3</h3>
                  </div>
                </div>
                </Card.Body>
            </Card>
          </div>
        </div>    
      </div>
    );
  }
}

export default PDSpokenLanguage;
