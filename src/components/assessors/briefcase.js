import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap'

class AssessorBriefcase extends Component {
  render() {
    return (
      <div className="row container-fluid">
        <div className="col">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Videos
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="row">
                    <div className="col">
                      <h4>Video</h4>
                    </div>
                    <div className="col">
                      <h4>Video</h4>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Document
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <div className="row">
                    <div className="col">
                      <h4>PDF</h4>
                    </div>
                    <div className="col">
                      <h4>PPT</h4>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <br />
          <button className='btn btn-rounded btn-info float-right'>Upload New</button>
          <br />
          <br />
        </div>
      </div>
      );
  }
}

export default AssessorBriefcase;
