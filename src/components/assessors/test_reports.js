import React, { Component } from 'react';
import CachedIcon from '@material-ui/icons/Cached';
import axios from 'axios'
import {Card} from 'react-bootstrap'

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
          <div className='col-md-6'>
            <Card text style={{padding:'5%'}}>
              <p>
                <span>{test.student.first_name}</span>
                <span>{test.student.gender===1?'Male':'Female'}</span>
              </p>
              <p style={{border:'1px solid grey', padding:'2%'}}>{test.answer}</p>
              <p> Remark: <input type='text' /></p>
              <p> Comment: <input type='text' /></p>
              <button> Submit</button>
            </Card>
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
        <br />
      </div>
    );
  }
}

export default AssessorTestReport;


// /assessor_api/tests_check/
// /assessor_api/tests_check/update_reports/
