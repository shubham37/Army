import React, { Component } from 'react';
import { Card, Accordion } from 'react-bootstrap'

class Stage1DT extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <h4>DT</h4>
            <hr />
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <Accordion defaultActiveKey="1">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Training Videos
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
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
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col'>
            <Accordion defaultActiveKey="1">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Training Videos
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
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
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
        <br />    
      </div>
      );
  }
}

export default Stage1DT;
