import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Mission extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Card>
          <Card.Header><b>Mission</b></Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                Is to provide round the clock accessible and affordable quality mentoring to the SSB aspirants for military career. 
                Aim is imparting authentic and quality mentoring directly from experienced SSB Officer’s through one to one video based 
                interactive sessions with Interviewing Officer, GTO and Psychologist respectively. 
                The entire testing’s of the SSB are conducted for each aspirant along with dedicated one to one basis live interactive 
                sessions post each technique tests so as to provide the feedback about performance and mistakes committed by aspirant 
                while attempting the tests along with tips to overcome shortcomings, so that aspirant is confident before appearing for the SSB. 
                At SSB experts the aspirants can make their own time table and select the mentoring Officers of their own choice and the professional 
                quality mentoring to be provided at their door step.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <br />
      </div>
      );
  }
}

export default Mission;
