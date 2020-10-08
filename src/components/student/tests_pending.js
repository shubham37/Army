import React, { Component } from 'react';
import {Table} from 'react-bootstrap'

class StudentTestPending extends Component {
  render() {
    return (
      <div className="row container-fluid">
        <div className='col'>
          <Table bordered size="md">
            <thead>
              <tr style={{backgroundColor:'brown', color:'white'}}>
                <th>S/NO</th>
                <th>Test</th>
                <th>Taken On</th>
                <th>Pending</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{fontWeight:'bolder'}}>1</td>
                <td>OIR 1</td>
                <td>Mr. XXXXX</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td style={{fontWeight:'bolder'}}>2</td>
                <td>PPDT -2</td>
                <td>Mr. XXX</td>
                <td>No</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default StudentTestPending;
