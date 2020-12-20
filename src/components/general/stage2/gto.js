import React, { Component } from 'react';
import { Card, Accordion, Button, Modal } from 'react-bootstrap'
import axios from 'axios'
import VideoPlayer from '../video_player.js'


class Stage2GTO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      training: [],
      practice: [],
      show: false,
      current: {},
      title: 'Video'
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow(video) {
    this.setState({
      show: true,
      current: video.video,
      title: video.title
    })
  }

  handleClose() {
    this.setState({
      show: false
    })
  }



  componentWillMount() {
    axios.get(`/api/videos/GTO`)
    .then((data) => {
      if (data.status === 200) {
        console.log(data);
          this.setState({
            training: data.data.training,
            practice: data.data.practice
          })
      }
    }).catch((e) => {
      console.log(e);
    });
  }

  render() {
    const trainingBlock = (
      <Accordion defaultActiveKey="1">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
        Training Videos
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className='row'>
              {this.state.training.map((video) =>
                <div className='col'>
                  <Button variant="warning" onClick={(e) => this.handleShow(video)}>
                    { video.title }
                  </Button>
                </div>
              )}
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    );

    const practiceBlock = (
      <Accordion defaultActiveKey="1">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
        Practice Videos
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className='row'>
              {this.state.practice.map((video) =>
                <div className='col'>
                  <Button variant="warning" onClick={(e) => this.handleShow(video)}>
                    { video.title }
                  </Button>
                </div>
              )}
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    );

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <h4>GTO</h4>
            <hr />            
          </div>
        </div>

        <div className='row'>
          <div className='col'>
          {
            this.state.training.length > 0
            ? trainingBlock :
            <div></div>
          }
          </div>
        </div>
        <br />

        <div className='row'>
          <div className='col'>
            {
             this.state.practice.length > 0
             ? practiceBlock :
             <div></div>
            }
          </div>
        </div>
        <br />    
        <Modal show={this.state.show} onHide={(e) => this.handleClose()} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title> { this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <VideoPlayer video={this.state.current} />
          </Modal.Body>
        </Modal>

      </div>
      );
  }
}

export default Stage2GTO;
