import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class StudentProgressReportPD extends Component {
  render() {
    return (
      <div className="row container-fluid">
        <div className='col'>
          <Card body>
            <p>
              <blockquote>
                <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </blockquote>
            </p>
          </Card>
          <br />
        </div>
      </div>
    );
  }
}

export default StudentProgressReportPD;
