import React, { useState, useEffect } from 'react';
import { Accordion, Card } from 'react-bootstrap'
import UploadDocument from './upload_dcument.js'
import axios from 'axios';
import '../../assets/css/assesor.css'

export default function AssessorBriefcase() {

  const [video, setVideo] = useState([]);
  const [document, setDocument] = useState([]);
  const [image, setImage] = useState([]);
  const [hasData, setHassData] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');


    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    };
    if (!hasData) {
      axios.get(`/assessor_api/breifcase/`, {
        headers : headers
      })
      .then((data) => {
        const images = []
        const videos = []
        const documents = []
        console.log(data)
        data.data.briefcases.map((file) => {
          images.push({
            'file_url': file.file
          })
        });
        setVideo(videos);
        setDocument(documents);
        setImage(images);
        setHassData(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
    }
  })
  
  function Videos() {
    return (
      <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Videos
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="row">
              {video.map((video) => (
                <div className="col">
                  <p>File Location: {video.file_url}</p> 
                </div>
              ))}
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    )
  }

  function Documents() {
    return (
      <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Documents
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="row">
              {document.map((doc) => (
                <div className="col">
                  <p>File Location: {doc.file_url}</p> 
                </div>
              ))}
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    )
  }

  function Images() {
    return (
      <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Images
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="row">
              {image.map((image) => (
                <div className="col-md-4">
                  <img src={image.file_url} alt="..." className='img-thumbnail' style={{width:'100%', height:'100%'}} />
                </div>
              ))}
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    )
  } 

  
    return (
      <div className="row container-fluid">
        <div className="col">
          <hr />
          <div className="container-fluid row">
            <div className="col">
              <button className='btn btn-rounded btn-info float-left' data-toggle="modal" data-target="#uploadnew">Upload New</button>
            </div>
          </div>
          <br />
          <Videos />
          <br />
          <Documents />
          <br />
          <Images /> 
          <br />
          <UploadDocument />
        </div>
      </div>
    );
}