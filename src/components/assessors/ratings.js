import React, { Component } from 'react';
import axios from 'axios'
import { Card } from '@material-ui/core';

class AssessorRating extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'ratings': []
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    }
    axios.get(`/assessor_api/ratings/`, {
      headers: headers
    })
    .then((data) => {
      if (data.data.is_data) {
        this.setState({'ratings':data.data.ratings})
      } else {
        this.setState({'ratings':[]})
      }
    })
    .catch((error) => {
      // console.log(error.message);
    });
  }

  render() {
    const ratings_content = (
      <div>
        {this.state.ratings.map((rating) => (
          <div className='col'>
            <Card body style={{padding:'2%'}}>
              <p>{rating.student.first_name}</p>
              <p>{rating.student.gender===1?'Male':'Female'}</p>
              <p>{rating.rating}</p>
            </Card>
            <Card body style={{padding:'2%'}}>
              <p>{rating.student.first_name}</p>
              <p>{rating.student.gender===1?'Male':'Female'}</p>
              <p>{rating.rating}</p>
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
      <div className='row container-fluid'>
        <div className='col'>
          <hr />
          {
            this.state.ratings.length > 0 
            ? ratings_content :
            no_content          
          }
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default AssessorRating;
