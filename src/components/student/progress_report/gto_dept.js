import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import  axios from 'axios'

class StudentProgressReportGTO extends Component {

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
      console.log(error.message);
    });
  }


  render() {
    return (
      <div className="row container-fluid">
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
    );
  }
}

export default StudentProgressReportGTO;
