import React, { Component } from 'react';

class SRTTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      is_hidden_part1:false,
      is_hidden_part2:true,
      is_hidden_part3:true,

      time_part1: {},
      seconds_part1: 10,
      
      time_part2: {},
      seconds_part2: 10,
      is_disable:true
    }
    this.timer_part1= 0;
    this.timer_part2= 0;

    this.onTestStart = this.onTestStart.bind(this);
    this.countDown = this.countDown.bind(this);
    this.countDown2 = this.countDown2.bind(this);

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
    console.log(seconds)
    if (seconds === 0) { 
      clearInterval(this.timer_part2);
      this.setState({
        is_disable:true
      });
    }
  }

  render() {
    return (
      <div>

        <div className='container-fluid' hidden={this.state.is_hidden_part1} >
          <div className="row">
            <div className='col'>
              <h3>SRT</h3>
            </div>
          </div>
          <div className='row container'>
            <div className='col-md'>
              <h4><b><u>Instructions</u></b></h4>
              <ol>
                <li>1- Fill PIQ form</li><br />
                <li>2- Select Your Assessors</li><br />
                <li>3- Select Your Time Table</li><br />
                <li>4- Follow the Time Table</li><br />
              </ol>
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
            <h3>SRT</h3>
          </div>
          <div className='col'>
            <h1 className='float-right'>{this.state.time_part1.m} : {this.state.time_part1.s}</h1>
          </div>
        </div>

        <div className='row container'>
          <div className='col-md'>
            <img src={require('../../../assets/images/meter.jpg')} alt='TAT-PIC-1' width={600} height={400} />
          </div>
        </div>
      </div>

        <div className='container-fluid' hidden={this.state.is_hidden_part3}>
          <br />
          <div className="row">
            <div className='col float-left'>
              <h3>SRT</h3>
            </div>
            <div className='col'>
              <h1 className='float-right'> {this.state.time_part2.m} : {this.state.time_part2.s}</h1>
            </div>
          </div>
          <br />
          <div className='row container'>
            <div className='col'>
              <textarea cols='100' rows='15' placeholder='Write Your Story Here ...' disabled={this.state.is_disable} />
            </div>
          </div>
          <div className='row'>
            <div className='col-md' style={{width:'100%', textAlign:'center', marginTop:'5%'}}>
              <button className='btn btn-info  btn-rounded' disabled={this.state.is_disable?false:true}>SUBMIT TEST</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SRTTest;
