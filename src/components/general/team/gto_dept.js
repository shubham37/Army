import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import axios from 'axios'


class TeamGTO extends Component {

  constructor(props) {
    super(props);
    this.state = {
      is_assessor: false,
      assessors: []
    }
  }

  componentWillMount() {
    axios.get(`/assessor_api/dept/GTO`)
    .then((data) =>{
        if (data.status === 200){
          this.setState({
            is_assessor:data.data.is_exist,
            assessors:data.data.assessors
          });
        } else {
          this.setState({
            is_assessor:false,
            assessors:[]
          });
        }
    })
    .catch((error) => {
      this.setState({
        is_assessor:false,
        assessors:[]
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
      <div className='container-fluid'>
        <Card>
          <Card.Header>GTO Dept.</Card.Header>
          <Card.Body>
            {this.state.is_assessor
            ? assessor_content :
            no_content}
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}

export default TeamGTO;
