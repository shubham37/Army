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
        console.log(data)
        if (data.data.is_data) {
          setImage(data.data.images);
          setVideo(data.data.videos);
          setDocument(data.data.documents);
        }
        setHassData(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
    }
  })
  
  function Videos() {
    return (
      <div className="row">
        {video.map((video) => (
          <div className="col">
            <video
              height='250'
              width='250'
              src={video.file}
              preload="auto"
              controls
            >
            </video><br />
            <h4>{video.title}</h4>
          </div>
        ))}
      </div>
    )
  }

  function Documents() {
    return (
      <div className="row">
        {document.map((doc) => (
          <div className="col">
            <p><a href={doc.file} target='_blank'>{ doc.title }</a></p> 
          </div>
        ))}
      </div>
    )
  }

  function Images() {
    return (
      <div className="row">
        {image.map((image) => (
          <div className="col-md-4">
            <img src={image.file} alt="..." className='img-thumbnail img-responsive' style={{width:'200px', height:'200px'}} />
          </div>
        ))}
      </div>
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
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Images
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  { image.length > 0
                  ? <Images /> :
                  <p>No Image</p>
                  }
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <br />

          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Videos
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  { video.length > 0
                  ? <Videos /> :
                  <p>No Video</p>
                  }
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <br />
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Documents
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  { document.length > 0
                  ? <Documents /> :
                  <p>No Document</p>
                  }
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
    
          <br />
          <UploadDocument />
        </div>
      </div>
    );
}