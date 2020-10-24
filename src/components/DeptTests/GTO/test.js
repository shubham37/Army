import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import VideoApp from './video.js'

class GTODT extends Component {

  constructor(props) {
    super(props);
    this.state = {
      is_hidden_part1:true,
      is_hidden_part2:true,
      is_hidden_part3:true,

      time_part1: {},
      seconds_part1: 0,
      
      time_part2: {},
      seconds_part2: 0,
      is_disable:true,
      rating:1,
      is_taken:false,
      training_data:[],
      is_start: false,
      submission_error:'',
      is_submit:false
    }
    this.timer_part1= 0;
    this.timer_part2= 0;

    this.countDown = this.countDown.bind(this);
    this.countDown2 = this.countDown2.bind(this);
    this.feedbackSubmit = this.feedbackSubmit.bind(this);
    this.start = this.start.bind(this);
  }

  componentWillMount() {
    const token = localStorage.getItem('token');

    axios.post(`/student_api/assessor_stream_schedule/dept_wise/`, 
    {
      'dept_code':'GTO'
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
    .then((response) => {
      this.setState({
        training_data:response.data.training,
        // seconds_part1: 10
        seconds_part1: Math.floor((new Date(response.data.training.start_time) - new Date())/1000)  
      });
    })
    .catch((error) => {
      // console.log(error.message);
    });
  }
  
  start() {
    let timeLeftVar = this.secondsToTime(this.state.seconds_part1);
    this.setState({
      time_part1: timeLeftVar,
      is_start: true,
      is_hidden_part1: false
    });
  
    if (this.timer_part1 === 0 && this.state.seconds_part1 > 0) {
      this.timer_part1 = setInterval(this.countDown, 1000);
    }
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds_part1 - 1;
    this.setState({
      time_part1: this.secondsToTime(seconds),
      seconds_part1: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) { 
      clearInterval(this.timer_part1);
      this.setState({seconds_part2:10});

      let timeLeftVar = this.secondsToTime(this.state.seconds_part2);
      this.setState({
        is_hidden_part1:true,
        is_hidden_part2:false,
        time_part2: timeLeftVar,
        is_disable:false
      });
  
      if (this.timer_part2 === 0 && this.state.seconds_part2 > 0) {
        this.timer_part2 = setInterval(this.countDown2, 1000);
      }
    }
  }

  countDown2() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds_part2 - 1;
    this.setState({
      time_part2: this.secondsToTime(seconds),
      seconds_part2: seconds,
    });

    if (seconds === 0) { 
      clearInterval(this.timer_part2);
      this.setState({
        is_hidden_part1:true,
        is_hidden_part2:true,
        is_hidden_part3:false,
        is_disable:true
      });
    }
  }

  feedbackSubmit() {
    const token = localStorage.getItem('token');

    axios.post(`/student_api/assessor_stream_schedule/update_data/`, 
    {
      'id':this.state.training_data.id,
      'rating':this.state.rating
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
    .then((response) => {
      // console.log(response.data);
      this.setState({is_submit : true});
    })
    .catch((error) => {
      // console.log(error.message);
    });
    axios.post(`/assessor_api/instructions/add_update/`, 
    {
      'instruction':'',
      'student_id':this.state.training_data.student.id,
      'assessor_id': this.state.training_data.assessor.id
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
    .then((response) => {
      // console.log(response.data);
      window.location = '/';
    })
    .catch((error) => {
      this.setState({submission_error:"Please Try Again."})
      // console.log(error.message);
    });
  
  }


  render() {
    if (this.state.training_data.length === 0) {
      return (
        <div className='row'>
          <div className='col' style={{textAlign:'center'}}>
            <p>No Training Scheduled</p>
            <a href='/student'>Click To Home</a>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="row" style={{backgroundColor:'blueviolet', color:'white', padding:'1%', boxShadow:'2px 2px 2px 2px grey'}}>
          <div className='col'>
            <h4 className='container-fluid'>GTO Department</h4>
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col' style={{textAlign:'center'}}>
            <button className='btn btn-info' style={{padding:'2%'}} onClick={this.start} hidden={this.state.is_start}>Lets Start</button>
          </div>
        </div>

        <div className='container-fluid' hidden={this.state.is_hidden_part1}>
          <div className='row container'>
            <div className='col'>
              <Card body>
                <p>
                  Welcome {this.state.training_data.student.first_name},<br />
                  Your Test is scheduled at {this.state.start_time}.<br />
                  Before appearing for the tests , you must go through the training videos given in your dashboard atleast once.<br />
                  See You after {this.state.time_part1.h} Hours {this.state.time_part1.m} Minutes {this.state.time_part1.s} Seconds <br />
                  <footer className='float-right'>Col {this.state.training_data.assessor.first_name}</footer>
                  <br />
                  <a href='/student'><button className='btn btn-info'> Click To Home </button></a>
                </p>
              </Card>
            </div>
          </div>
          <br />
          <div className='row container'>
            <div className='col' style={{textAlign:'center'}}>
              <span style={{marginTop:'2%', padding:'1% 2%', backgroundColor:'blue', fontWeight:'bolder', fontSize:'larger', color:'white'}}>{this.state.time_part1.h} : {this.state.time_part1.m} : {this.state.time_part1.s}</span>
            </div>
          </div>
          <br />
          <br />
          <div className='row container'>
            <div className='col-md col-xs' style={{textAlign:'center'}}>
              <img src={require('../../../assets/images/meter.jpg')} alt='MrXXX' style={{width:'75%', border:'1px solid black', borderRadius:'4px'}} /><br />
              <h4>Mr. {this.state.training_data.student.first_name}</h4>
            </div>
            <div className='col-md col-xs' style={{textAlign:'center'}}>
              <img src={require('../../../assets/images/meter.jpg')} alt='MrXXX' style={{width:'75%', border:'1px solid black', borderRadius:'4px'}} /><br />
              <h4>COL {this.state.training_data.assessor.first_name}</h4>
            </div>
          </div>
        </div>

        <div className='container-fluid' hidden={this.state.is_hidden_part2}>
          <div className='row container'>
            <div className='col' style={{textAlign:'center'}}>
              {/* <VideoApp /> */}
              <span style={{marginTop:'2%', padding:'1% 2%', backgroundColor:'blue', fontWeight:'bolder', fontSize:'larger', color:'white'}}>{this.state.time_part1.h} : {this.state.time_part2.m} : {this.state.time_part2.s}</span>
              <span style={{marginTop:'2%', padding:'1% 2%', backgroundColor:'red', fontWeight:'bolder', fontSize:'larger', color:'white'}}>Live</span>
            </div>
          </div>
          <br />
          <br />
          <div className='row container'>
            <div className='col-md col-xs' style={{textAlign:'center'}}>
              <img src={require('../../../assets/images/meter.jpg')} alt='MrXXX' style={{width:'75%', border:'1px solid black', borderRadius:'4px'}} /><br />
              <h4>Mr. {this.state.training_data.student.first_name}</h4>
            </div>
            <div className='col-md col-xs' style={{textAlign:'center'}}>
              <img src={require('../../../assets/images/meter.jpg')} alt='MrXXX' style={{width:'75%', border:'1px solid black', borderRadius:'4px'}} /><br />
              <h4>COL {this.state.training_data.assessor.first_name}</h4>
            </div>
          </div>
        </div>

        <div className='container-fluid' hidden={this.state.is_hidden_part3}>
          <div className='row container'>
            <div className='col' style={{textAlign:'center'}}>
              <span style={{marginTop:'2%', padding:'1% 2%', backgroundColor:'blue', fontWeight:'bolder', fontSize:'larger', color:'white'}}>{this.state.time_part1.h} : {this.state.time_part2.m} : {this.state.time_part2.s}</span>
            </div>
          </div>
          <br />
          <br />
          <div className='row container'>
            <div className='col-md col-xs' style={{textAlign:'center'}}>
              <img src={require('../../../assets/images/meter.jpg')} alt='MrXXX' style={{width:'75%', border:'1px solid black', borderRadius:'4px'}} /><br />
              <h4>Mr. {this.state.training_data.student.first_name}</h4>
            </div>
            <div className='col-md col-xs' style={{textAlign:'center'}}>
              <img src={require('../../../assets/images/meter.jpg')} alt='MrXXX' style={{width:'75%', border:'1px solid black', borderRadius:'4px'}} /><br />
              <h4>COL {this.state.training_data.assessor.first_name}</h4>
            </div>
          </div>

          <div className='row container'>
              <Card body>
                <h4>
                  Hi {this.state.training_data.student.first_name}. What do you think about me,
                  please rate me by clicking on Stars, 5 star is max.
                  Thanks. Col {this.state.training_data.assessor.first_name}
                </h4>
                <br />
                <Rating
                  name="simple-controlled"
                  value={this.state.rating}
                  onChange={(event, newValue) => {
                    this.setState({rating:newValue});
                  }}
                  size="large"
                />
                <br />
                <Button variant="contained" color="primary" onClick={this.feedbackSubmit} disableElevation>
                  FINISH
                </Button>
                <br />
                <p>{this.state.submission_error}</p>
              </Card>
              <br />
          </div>
        </div>
      </div>
    );
  }
}

export default GTODT;
