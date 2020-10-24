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
      // console.log(data);
      if (data.data.is_data) {
        this.setState({'status':data.data.status})
      } else {
        this.setState({'status':[]})
      }
    })
    .catch((error) => {
      // console.log(error.message);
    });
  }

  render() {
    const status_content = (
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

      {this.state.status.map((st) => (
        <tr>
          <td style={{fontWeight:'bolder'}}>1</td>
          <td>OIR 2</td>
          <td>Mr. XXXXX</td>
          <td>Yes</td>
        </tr>
        )
      )}
        </tbody>
    </Table>
    )

    
    return (
      <div className="container-fluid">
          <div className='col'>
            { this.state.status.length > 0 
              ? status_content :
              <div> No Data</div>    
            }
          </div>
        </div>
      // </div>    
    );
  }
}

export default StudentTestPending;
