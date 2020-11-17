import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios'

class StudentProgressReportPsych extends Component {

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
    axios.get(`/student_api/dept_wise/GTO/reports/`, {
      headers: headers
    })
    .then((data) => {
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
      <div className='row'>
        <div className='col'>
          <Card body>
            {this.state.reports.map((report) => (
              <p>
                <blockquote>
                  <b>{report.assessor.department.code}</b> 
                  {report.report}
                </blockquote>
                <br />
                {report.reporting_date}
            </p>
            ))}
          </Card>
          <br />
        </div>
      </div>
    )

    const no_content = (
      <div className='container'>
        <div style={{textAlign:'center', padding:'2%', fontSize:'larger', color:'rgb(168, 162, 162)', backgroundColor:'rgb(236, 238, 240)', border:'1px solid rgb(172, 168, 168)', borderRadius:'5px'}}>
          <p>No Report Exist From GTO Department</p>
        </div>
        <br />
      </div>
    )

    return (
      <div className="container-fluid">
        {this.state.reports.length > 0
        ? reports_content :
        no_content}
      </div>
    );
  }
}

export default StudentProgressReportPsych;
