import React, { Component } from 'react';
import { Card, Accordion } from 'react-bootstrap'
import axios from 'axios'

class Stage2IO extends Component {

  constructor(props) {
    super(props);
    this.state = {
      training: [],
      practice: []
    }
  }

  componentWillMount() {
    axios.get(`/api/videos/IO`)
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
                  <h3>Video 1</h3>
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
                  <h3>Video 1</h3>
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
            <h4>IO</h4>
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
      </div>
      );
  }
}

export default Stage2IO;
