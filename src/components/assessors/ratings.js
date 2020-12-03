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
        <div className='row'>
          <div className='col'>
            <Card body style={{padding: '2%', margin : '1%', border:'1px solid black'}}>
              <span style={{fontWeight: 'bolder', fontSize: 'larger', color: 'rgb(260, 160, 0)', margin: '0 2%', textAlign: 'right'}}>0 Star</span> 
              <span style={{fontWeight: 'bolder', fontSize: 'larger', paddingRight:'1%'}} className='float-right'>{this.state.ratings.ZERO}</span>
            </Card>
          </div>
          <div className='col'>
            <Card body style={{padding: '2%', margin : '1%', border:'1px solid black'}}>
              <span style={{fontWeight: 'bolder', fontSize: 'larger', color: 'rgb(260, 160, 0)', margin: '0 2%', textAlign: 'right'}}>1 Star</span> 
              <span style={{fontWeight: 'bolder', fontSize: 'larger', paddingRight:'1%'}} className='float-right'>{this.state.ratings.ONE}</span>
            </Card>
          </div>
          <div className='col'>
            <Card body style={{padding: '2%', margin : '1%', border:'1px solid black'}}>
              <span style={{fontWeight: 'bolder', fontSize: 'larger', color: 'rgb(260, 160, 0)', margin: '0 2%', textAlign: 'right'}}>2 Star</span> 
              <span style={{fontWeight: 'bolder', fontSize: 'larger', paddingRight:'1%'}} className='float-right'>{this.state.ratings.TWO}</span>
            </Card>
          </div>
          <div className='col'>
            <Card body style={{padding: '2%', margin : '1%', border:'1px solid black'}}>
              <span style={{fontWeight: 'bolder', fontSize: 'larger', color: 'rgb(260, 160, 0)', margin: '0 2%', textAlign: 'right'}}>3 Star</span> 
              <span style={{fontWeight: 'bolder', fontSize: 'larger', paddingRight:'1%'}} className='float-right'>{this.state.ratings.THREE}</span>
            </Card>
          </div>
          <div className='col'>
            <Card body style={{padding: '2%', margin : '1%', border:'1px solid black'}}>
              <span style={{fontWeight: 'bolder', fontSize: 'larger', color: 'rgb(260, 160, 0)', margin: '0 2%', textAlign: 'right'}}>4 Star</span> 
              <span style={{fontWeight: 'bolder', fontSize: 'larger', paddingRight:'1%'}} className='float-right'>{this.state.ratings.FOUR}</span>
            </Card>
          </div>
          <div className='col'>
            <Card body style={{padding: '2%', margin : '1%', border:'1px solid black'}}>
              <span style={{fontWeight: 'bolder', fontSize: 'larger', color: 'rgb(260, 160, 0)', margin: '0 2%', textAlign: 'right'}}>5 Star</span> 
              <span style={{fontWeight: 'bolder', fontSize: 'larger', paddingRight:'1%'}} className='float-right'>{this.state.ratings.FIVE}</span>
            </Card>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default AssessorRating;
