import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap'
import UploadDocument from './upload_dcument.js'
import axios from 'axios';
import '../../assets/css/assesor.css'
import CachedIcon from '@material-ui/icons/Cached';

class AssessorBriefcase extends Component {

  constructor(props) {
    super(props);
    this.state = {
        Video : [],
        Document : [],
        Image : []
    }
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    const token = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    };

    axios.get(`/assessor_api/breifcase/`, {
      headers : headers
    })
    .then((data) => {
      const images = []
      const videos = []
      const documents = []
      data.data.briefcases.map((file) => {
        // debugger
        if (file.file_type === 1) {
          videos.push({
            'file_url':file.file_url,
            'file_name':file.file_name,
            'file_size':file.file_size
          })
        } else if (file.file_type === 3) {
          documents.push({
            'file_url':file.file_url,
            'file_name':file.file_name,
            'file_size':file.file_size
          })
        } else {
          documents.push({
            'file_url':file.file_url,
            'file_name':file.file_name,
            'file_size':file.file_size
          })
        }
      });
      this.setState({
        Video: videos,
        Document: documents,
        Image: images
      });
    })
    .catch((error) => {
      // console.log(error.message);
    });
  }

  render() {
    const videos = (
      <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Videos
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="row">
              {this.state.Video.map((video) => (
                <div className="col">
                  <h4>File Details:</h4> 
                  <p>File Name: {video.file_name}</p> 
                  <p>File Location: {video.file_url}</p> 
                  <p>File Size: {video.file_size}</p> 
                </div>
              ))}
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    );

    const documents = (
      <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Documents
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="row">
              {this.state.Document.map((doc) => (
                <div className="col">
                  <h4>File Details:</h4> 
                  <p>File Name: {doc.file_name}</p> 
                  <p>File Location: {doc.file_url}</p> 
                  <p>File Size: {doc.file_size}</p> 
                </div>
              ))}
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    );

    const images = (
      <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Images
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="row">
              {this.state.Image.map((image) => (
                <div className="col">
                  <h4>File Details:</h4> 
                  <p>File Name: {image.file_name}</p> 
                  <p>File Location: {image.file_url}</p> 
                  <p>File Size: {image.file_size}</p> 
                </div>
              ))}
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    );

    return (
      <div className="row container-fluid">
        <div className="col">
          <hr />
          <div className="container-fluid row">
            <div className="col">
              <button className='btn btn-rounded btn-info float-left' data-toggle="modal" data-target="#uploadnew">Upload New</button>
            </div>
            <div className="col">
              <button className='btn btn-rounded btn-danger float-right' onClick={this.fetchData}><CachedIcon /></button>
            </div>
          </div>
          <br />

          {this.state.Video.length >0 
          ? videos : 
          <div className='no_data'> No Video Data </div>}
          <br />
          {this.state.Document.length >0 
          ? documents : 
          <div className='no_data'> No Document Data </div>}
          <br />
          {this.state.Image.length >0 
          ? images : 
          <div className='no_data'> No Image Data </div>}
          <br />
          <UploadDocument />
        </div>
      </div>
      );
  }
}
export default AssessorBriefcase;
