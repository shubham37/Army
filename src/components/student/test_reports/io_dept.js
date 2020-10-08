import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class StudentTestReportIO extends Component {
  render() {
    return (
      <div className="row container-fluid">
        <div className='col'>
          <Table bordered size="md">
            <thead>
              <tr>
                <th>S/NO</th>
                <th>Test</th>
                <th>Remark</th>
                <th>Comment by Assessor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>OIR 1</td>
                <td>Good</td>
                <td>Need More</td>
              </tr>
              <tr>
                <td>2</td>
                <td>PPDT -2</td>
                <td>Satisfactory</td>
                <td>Perfect</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default StudentTestReportIO;
