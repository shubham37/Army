import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      is_hidden_part1:false,
      is_hidden_part2:true,
      is_hidden_part3:true,

      time_part1: {},
      seconds_part1: 0,
      
      time_part2: {},
      seconds_part2: 0,
      is_disable:true,
      is_user:false,
      test:{
        "word": "",
        "text": "",
        "images": [],
        "instructions": []
      },
      answer:"",
      is_test_submit:false,
      test_submit_response:'',
      test_submit_error:''
    }
    this.timer_part1= 0;
    this.timer_part2= 0;

    this.onTestStart = this.onTestStart.bind(this);
    this.countDown = this.countDown.bind(this);
    this.countDown2 = this.countDown2.bind(this);
    this.onTestSubmit = this.onTestSubmit.bind(this);
    this.test_code = window.location.pathname.split('/')[2]
  }


  componentWillMount(){
    if (localStorage.getItem('token') && (localStorage.getItem('role') === '0')){
        this.setState({
          is_user:true
        });
    }
    else {
        this.setState({is_user:false});
    }
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    }

    axios.get(`/student_api/tests/${this.test_code}/dept/`, {
        headers: headers
    })
    .then((data) =>{
      console.log(data)
        if (data.data.is_data){
          this.setState({
            seconds_part1: data.data.test.question_display_time,
            seconds_part2: data.data.test.answer_display_time,
            test: {
              "word": data.data.test.question.word || "",
              "text": data.data.test.question.text || "",
              "images": data.data.test.question.images || [],
              "instructions": data.data.test.instructions || []
            }
          });
        } else {
          this.setState({
            is_hidden_part1:true,
            is_hidden_part2:true,
            is_hidden_part3:true,
            test_submit_response: data.data.detail
          })
        }
    })
    .catch((error) => {
      console.log(error.message);
    });
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

  onTestStart() {
    if (!this.state.test) {
      window.location = '/'
    }
    // Get Test Object By Test Code
    let timeLeftVar = this.secondsToTime(this.state.seconds_part1);
    this.setState({
      is_hidden_part1:true,
      is_hidden_part2:false,
      time_part1: timeLeftVar
    });

    if (this.timer_part1 === 0 && this.state.seconds_part1 > 0) {
      this.timer_part1 = setInterval(this.countDown, 1000);
    }
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

      let timeLeftVar = this.secondsToTime(this.state.seconds_part2);
      this.setState({
        is_hidden_part2:true,
        is_hidden_part3:false,
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
    // console.log(seconds)
    if (seconds === 0) { 
      clearInterval(this.timer_part2);
      this.setState({
        is_disable:true
      });
    }
  }

  onTestSubmit() {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    }
    const data = {
      answer: this.state.answer,
      code: this.test_code
    }

    axios.post(`/student_api/tests/test_submit/`,  data, {
        headers: headers
    })
    .then((data) =>{
        if (data.status === 200){
          this.setState({
            is_test_submit:true,
            test_submit_response:data.data.detail,
            is_hidden_part3:true
          });
        } else {
          this.setState({
            test_submit_error:data.data.detail
          });
        }
    })
    .catch((error) => {
      // console.log(error.message);
      this.setState({
        test_submit_error:"Please Try Again."
      });
    });
  }

  

  render() {

    const Instruction = (
      <ol>
        { this.state.test.instructions.map((instruction, index) => 
          <li key={index}>{instruction.text}</li>
        )}
      </ol>
    );

    if (!this.state.is_user) {
      return <Redirect to='/' />
    }

    let content;
    if (this.state.test.word) {
      content = <p style={{width: '100%', fontSize:'larger', fontWeight:'bolder', padding:'2%'}}>{this.state.test.word || ""}</p>
    } else if (this.state.test.word) {
      content = <p style={{width: '100%', fontSize:'larger', fontWeight:'bolder', padding:'2%'}}>{this.state.test.text || ""}</p>
    } else if (this.state.test.images.length > 0) {
      content = 
      <div class='row'>
        {this.state.test.images.map((image) => 
          <div class='col-md-6'>
            <img src={image.image || require('../../assets/images/bot.jpg')} className='img-responsive img-thumbnail' alt='test_image' style={{width:"100%", height:'75%', padding:'2%'}} />
          </div>
        )}
      </div>
    } else {
      content = <p style={{width: '100%', fontSize:'larger', fontWeight:'bolder', padding:'2%'}}>No Data Set</p>
    }

    return (
      <div>

        <div className='container-fluid' hidden={this.state.is_hidden_part1} >
          <div className="row">
            <div className='col'>
              <h3>{this.test_code}</h3>
            </div>
          </div>
          <div className='row container'>
            <div className='col-md'>
              <p>Instructions</p>
              {
                this.state.test.instructions.length > 0
                ? Instruction :
                <div></div>
              }
              <br />
            </div>
          </div>
          <div className='row'>
            <div className='col-md'>
              <button className='btn btn-info  btn-rounded' onClick={this.onTestStart}>BEGIN TEST</button>
            </div>
          </div>
        </div>

        <div className='container-fluid' hidden={this.state.is_hidden_part2}>
          <br />
          <div className="row">
            <div className='col float-left'>
              <h3>{this.test_code}</h3>
            </div>
            <div className='col'>
              <h1 className='float-right'>{this.state.time_part1.m} : {this.state.time_part1.s}</h1>
            </div>
          </div>
          <br />

          <div className='row'>
            <div className='col'>
              {content}
            </div>
          </div>
        </div>

        <div className='container-fluid' hidden={this.state.is_hidden_part3}>
          <br />
          <div className="row">
            <div className='col float-left'>
              <h3>{this.test_code}</h3>
            </div>
            <div className='col'>
              <h1 className='float-right'> {this.state.time_part2.m} : {this.state.time_part2.s}</h1>
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col'>
              <textarea cols='100' rows="30" placeholder='Write Your Story Here ...' value={this.state.answer} disabled={this.state.is_disable} onChange={(e) => this.setState({answer:e.target.value})} />
              <br />
              <p style={{width:'100%', textAlign:'center'}}>
                <button className='btn btn-info  btn-rounded' disabled={this.state.is_disable?false:true} onClick={this.onTestSubmit} >SUBMIT TEST</button>
                <br />
                <span>{this.state.test_submit_error}</span>
              </p>
            </div>
          </div>
        </div>

        <div className='container-fluid' hidden={this.state.test_submit_response?false:true}>
          <p>{this.state.test_submit_response}</p>
          <a href='/student'>Go Back To Home</a>
        </div>
      </div>
    );
  }
}

export default Test;
