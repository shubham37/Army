import React, { Component } from 'react';
import CachedIcon from '@material-ui/icons/Cached';
import axios from 'axios'

class AssessorTestReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: []
    }
    this.onRefresh = this.onRefresh.bind(this);
  }

  onRefresh() {
    const token = localStorage.getItem('token')
    axios.get(`/assessor_api/tests_check/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`  
      }
    })
    .then((response) => {
      if (response.data.is_data) {
        this.setState({ tests: response.data.tests})
      }
    })
    .catch((error) => {
      // console.log(error.message);
    });
  }


  render() {
    const tests_content = (
      <div className='row'>
        {this.state.tests.map((test) => (
          <div className='col'>
              <p>{test.student.first_name}</p>
              <p>{test.student.gender===1?'Male':'Female'}</p>
              <p>{test.answer}</p>
              <p>Enter Your Remark: <input type='text' /></p>
              <p>Enter Any Comment: <input type='text' /></p>
          </div>
        ))}
      </div>
    )
    const no_content = (
      <div className='col'>
            <p>No Data Exists</p>
      </div>
    )

    return (
      <div className='container-fluid'>
        <hr />
          <div className='float-right' style={{width:'100%'}}>
            <span style={{marginRight:'1%'}}><button className='btn btn-warning' onClick={this.onRefresh}><CachedIcon /></button></span>
          </div>
        <br />
        <br />
          {
            this.state.tests.length > 0 
            ? tests_content :
            no_content          
          }
      </div>
    );
  }
}

export default AssessorTestReport;


// /assessor_api/tests_check/
// /assessor_api/tests_check/update_reports/
