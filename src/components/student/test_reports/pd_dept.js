import React, { Component } from 'react';
import { Table } from "react-bootstrap";

class StudentTestReportPD extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'reports': []
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    }
    axios.get(`/student_api/tests/GTO/reports/`, {
      headers: headers
    })
    .then((data) => {
      // console.log(data);
      if (data.data.is_data) {
        this.setState({'reports':data.data.reports})
      } else {
        this.setState({'reports':[]})
      }
    })
    .catch((error) => {
      // console.log(error.message);
    });
  }

  
  render() {
    const reports_content = (
      <Table bordered size="md">
      <thead>
        <tr  style={{backgroundColor:'brown', color:'white'}}>
          <th>S/NO</th>
          <th>Test</th>
          <th>Remark</th>
          <th>Comment by Assessor</th>
        </tr>
      </thead>
      <tbody>
        {this.state.reports.map((report) => (
          <tr>
            <td>{report.id}</td>
            <td>{report.test.code}</td>
            <td>{report.remark}</td>
            <td>{report.comment}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    )
    return (
      <div className="row container-fluid">
        <div className='col'>
            {reports_content}    
        </div>
      </div>
    );
  }
}

export default StudentTestReportPD;
