import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap'
import UploadDocument from './upload_dcument.js'
import axios from 'axios';


class AssessorBriefcase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos : [],
      documents : []
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    };

    axios.get(`/assessor_api/breifcase/`, {
      headers : headers
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  render() {
    return (
      <div className="row container-fluid">
        <div className="col">
          <hr />
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
          </Accordion>
          <br />
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Document
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
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
          <button className='btn btn-rounded btn-info float-right' data-toggle="modal" data-target="#uploadnew">Upload New</button>
          <br />
          <br />
          <UploadDocument />
        </div>
      </div>
      );
  }
}

export default AssessorBriefcase;
