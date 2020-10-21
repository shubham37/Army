import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'
import AssessorAvailablityCheck from '../assessor_availability.js'
import axios from 'axios';

class StudentAssessorGTO extends Component {

  constructor(props) {
    super(props);
    this.state = {
      is_assessor : false,
      assessors : [],
      display_message:'',
      current_assessor: {}
    }
    // this.openModal = this.openModal.bind(this);
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    }

    axios.get(`/assessor_api/dept/GTO`, {
        headers: headers
    })
    .then((data) =>{
        if (data.status === 200){
          this.setState({
            is_assessor:data.data.is_exist,
            assessors:data.data.assessors
          });
        } else {
          this.setState({
            is_assessor:false,
            assessors:[],
            display_message:'No Assessor Will be Found'
          });
        }
    })
    .catch((error) => {
      this.setState({
        is_assessor:false,
        assessors:[],
        display_message:error.message
      });
    });
  }

  // openModal (e) {
  //   e.preventDefault();
  //   const token = localStorage.getItem('token');
  //   const headers = {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Token ${token}`
  //   }

  //   axios.get(`/assessor_api/availablity/2/assessor_list`, {headers:headers})
  //   .then((data) =>{
  //     if (data.status === 200){
  //       const assessor_data = {
  //         available: data.data.availabilities,
  //         freeze: data.data.not_availabilities
  //       }
  //       this.setState({
  //         current_assessor:assessor_data
  //       });
  //     } else {
  //       this.setState({
  //         current_assessor:{}
  //       });
  //     }
  // })
  // .catch((error) => {
  //   console.log(error.message);
  // });
  // }

  render() {
    return (
      <div className="container-fluid">
        <Card>
          <Card.Header>GTO Dept. Assessors</Card.Header>
          <Card.Body>
            <div className='row'>
              {this.state.assessors.map((assessor) => 
                <div className='col'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{assessor.first_name} {assessor.middle_name}</Card.Title>
                      <Card.Text>
                        BioData Details.
                      </Card.Text>
                      <Button variant="primary" data-toggle="modal" data-target="#availabilityModal" data-id={assessor.id}>See Availability</Button>
                    </Card.Body>
                  </Card>
                </div>
              )}
              <AssessorAvailablityCheck />
            </div>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}

export default StudentAssessorGTO;
