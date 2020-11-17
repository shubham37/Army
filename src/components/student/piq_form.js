import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';


class StudentPIQForm extends Component {
  render() {
    return (
      <div className="row container-fluid">
        <div className='col'>
          <Card>
            <Card.Header>PIQ Form</Card.Header>
            <Card.Body>
              <button className="btn btn-danger" data-toggle='modal' data-target='#piqForm' >Click to fill PIQ Form</button>
              <div class="modal fade bd-example-modal-lg" id="piqForm" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title">PIQ Form</h3>
                    </div>
                    <div class="modal-body">
                      <p>PIQ Blank Form To FIll WIll Display Here.</p>
                    </div>
                    <div class="modal-footer">
                      <ButtonComponent data-dismiss="modal">Close</ButtonComponent>
                      <ButtonComponent>Submit</ButtonComponent>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <br />
        </div>
      </div>
    );
  }
}

export default StudentPIQForm;
