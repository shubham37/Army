import React, { Component } from 'react';
import axios from 'axios'
import { Card } from '@material-ui/core';

class AssessorRating extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'ratings': {}
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
        this.setState({'ratings':{}})
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <hr />
        <Card body style={{padding: '2% 5%', margin: '2%'}}>
          <p>
            <span style={{fontWeight: 'bolder', fontSize: 'larger', color: 'rgb(260, 160, 0)', margin: '0 2%', textAlign: 'right'}}>No Star</span> <span style={{fontWeight: 'bolder', fontSize: 'larger'}}>{this.state.ratings.ZERO}</span>
          </p>
          <p>
            <span style={{fontWeight: 'bolder', fontSize: 'larger', color: 'rgb(260, 160, 0)', margin: '0 2%', textAlign: 'right'}}>1 Star</span> <span style={{fontWeight: 'bolder', fontSize: 'larger'}}>{this.state.ratings.ONE}</span>
          </p>
          <p>
            <span style={{fontWeight: 'bolder', fontSize: 'larger', color: 'rgb(260, 160, 0)', margin: '0 2%', textAlign: 'right'}}>2 Star</span> <span style={{fontWeight: 'bolder', fontSize: 'larger'}}>{this.state.ratings.TWO}</span>
          </p>
          <p>
            <span style={{fontWeight: 'bolder', fontSize: 'larger', color: 'rgb(260, 160, 0)', margin: '0 2%', textAlign: 'right'}}>3 Star</span> <span style={{fontWeight: 'bolder', fontSize: 'larger'}}>{this.state.ratings.THREE}</span>
          </p>
          <p>
            <span style={{fontWeight: 'bolder', fontSize: 'larger', color: 'rgb(260, 160, 0)', margin: '0 2%', textAlign: 'right'}}>4 Star</span> <span style={{fontWeight: 'bolder', fontSize: 'larger'}}>{this.state.ratings.FOUR}</span>
          </p>
          <p>
            <span style={{fontWeight: 'bolder', fontSize: 'larger', color: 'rgb(260, 160, 0)', margin: '0 2%', textAlign: 'right'}}>5 Star</span> <span style={{fontWeight: 'bolder', fontSize: 'larger'}}>{this.state.ratings.FIVE}</span>
          </p>
        </Card>
        <br />
      </div>
    );
  }
}

export default AssessorRating;
