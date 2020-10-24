import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'
import AssessorAvailablityCheck from '../assessor_availability.js'
import axios from 'axios'

class StudentAssessorPD extends Component {

  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      is_assessor : false,
      assessors : [],
      display_message:'',
      current_assessor: null
    }
  }

  componentWillMount() {
    axios.get(`/assessor_api/dept/PD`)
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

  render() {
    const assessor_content = (
      <div className='row'>
        {this.state.assessors.map((assessor) => 
          <div className='col'>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{assessor.first_name} {assessor.middle_name}</Card.Title>
                <Card.Text>
                  <p>Gender : {assessor.gender === 1? 'Male' : 'FeMale'}</p>
                  <p>Designation : {assessor.position.designation}</p>
                </Card.Text>
                <Button variant="primary" data-toggle="modal" data-target="#availabilityModal" data-id={assessor.id} onClick={(e) => this.setState({current_assessor:assessor.id})}>See Availability</Button>
              </Card.Body>
            </Card> 
          </div>
        )}
      </div>
    )

    const no_content = (
      <div className='row'>
        <div className='col' style={{width:'100%', textAlign:'center'}}>
          <p>No Assessor For GTO</p>
        </div>
      </div>
    )

    return (
      <div className="container-fluid">
        <Card>
          <Card.Header>PD Dept. Assessors</Card.Header>
          <Card.Body>
          {this.state.is_assessor
            ? assessor_content :
            no_content}
            <AssessorAvailablityCheck id={this.state.current_assessor} />
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}

export default StudentAssessorPD;
