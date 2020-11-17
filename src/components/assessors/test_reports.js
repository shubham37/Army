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
    this.submitReport = this.submitReport.bind(this);
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
        console.log(response.data.tests);
        this.setState({ tests: response.data.tests})
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  submitReport(event) {
    event.preventDefault();
    let remark = event.target.remark.value;
    let comment = event.target.comment.value;
    let id = event.target.id.value;

    const token = localStorage.getItem('token')
    axios.post(`/assessor_api/tests_check/update_reports/`, 
    {
      'id': id,
      'remark': remark,
      'comment': comment
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`  
      }
    })
    .then((response) => {
      if (response.data.is_update) {
        console.log("Data Updated");
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
  }


  render() {
    const tests_content = (
      <div className='row'>
        {this.state.tests.map((test) => (
          <div className='col-md-6'>
            <Card text style={{padding:'5%'}}>
              <p>
                <span className='float-left'><b>{test.student.first_name}</b></span>
                <span className='float-right'>{test.student.gender===1?'Male':'Female'}</span>
              </p>
              <form onSubmit={this.submitReport}>
                <input type='number' class='form-control' name='id' value={test.id} style={{display: 'none'}} />
                <span>Answer</span><br />
                <p style={{border:'2px solid black', color: 'gray', fontWeight: 'bolder', padding:'2%'}}>{test.answer}</p>
                <span>Remark</span><br />
                <p><input type='text' style={{width: '100%', textIndent:'15px', padding: '2% 0'}} class='form-control' name='remark' /></p>
                <span>Comment</span><br />
                <p><input type='text' style={{width: '100%', textIndent:'15px', padding: '2% 0'}} class='form-control' name='comment' /></p>
                <button type='submit' style={{border:'none', padding: '2% 0', fontWeight: 'bolder', fontSize: 'larger', backgroundColor:'rgb(260, 160, 0)', color:'white'}}> Submit</button>
              </form>
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
