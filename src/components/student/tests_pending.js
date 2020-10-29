import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import axios from 'axios'

class StudentTestPending extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'status': []
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    }
    axios.get(`/student_api/tests/`, {
      headers: headers
    })
    .then((data) => {
      if (data.data.is_data) {
        this.setState({'status':data.data.status})
      } else {
        this.setState({'status':[]})
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  render() {
    const status_content = (
      <Table>
        <thead>
          <tr style={{backgroundColor:'brown', color:'white'}}>
            <th>S/NO</th>
            <th>Test</th>
            <th>Taken On</th>
            <th>Pending</th>
          </tr>
        </thead>
        <tbody>
          {this.state.status.map((st, i) => {
            return (
              <tr>
                <td style={{fontWeight:'bolder'}}>{i+1}</td>
                <td> {st.code} </td>
                <td>{st.testsubmission__submission_date? st.testsubmission__submission_date: 'Not Yet'}</td>
                <td>{st.testsubmission__submission_date?"No":'YES'}</td> 
              </tr>
            )
          })}
        </tbody>
    </Table>
    )

    
    return (
      <div className="container">
        { this.state.status.length > 0 
          ? status_content :
          <div> No Data</div>    
        }
      </div>
    );
  }
}

export default StudentTestPending;
