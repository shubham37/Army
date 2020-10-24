import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class StudentProgressReportITD extends Component {

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
    axios.get(`/student_api/dept_wise/IO/reports/`, {
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
      <div className='row'>
        <div className='col' style={{width:'100%', textAlign:'center'}}>
          <p>No Report Exist From GTO Department</p>
        </div>
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

export default StudentProgressReportITD;
