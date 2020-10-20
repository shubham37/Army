import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';


class GTODT extends Component {

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
      rating:1
    }
    this.timer_part1= 0;
    this.timer_part2= 0;

    // this.onTestStart = this.onTestStart.bind(this);
    this.countDown = this.countDown.bind(this);
    this.countDown2 = this.countDown2.bind(this);

    this.feedbackSubmit = this.feedbackSubmit.bind(this);

  }

  componentWillMount() {
    this.setState({
      seconds_part1:400,
    })
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds_part1);
    this.setState({
      time_part1: timeLeftVar
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
      this.setState({seconds_part2:5});

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
    window.localStorage.clear();
    window.location = '/';
}


  render() {
    return (
      <div>
        <div className="row" style={{backgroundColor:'blueviolet', color:'white', padding:'1%', boxShadow:'2px 2px 2px 2px grey'}}>
          <div className='col'>
            <h4 className='container-fluid'>GTO Department</h4>
          </div>
        </div>
        <br />

        <div className='container-fluid' hidden={this.state.is_hidden_part1}>
          <div className='row container'>
            <div className='col-md'>
              <Card body>
                <p>
                  Welcome Mr/Ms XXXXX,<br />
                  Your Test is scheduled at XXXXX Hrs on XXXX date.<br />
                  Before appearing for the tests , you must go through the training videos given in your dashboard atleast once.<br />
                  See You after XX Hr xx Minutes <br />
                  <footer className='float-right'>Col XXXXXX</footer>
                </p>
              </Card>
            </div>
          </div>
          <br />
          <div className='row container'>
            <div className='col-md' style={{textAlign:'center'}}>
              <span style={{marginTop:'2%', padding:'1% 2%', backgroundColor:'blue', fontWeight:'bolder', fontSize:'larger', color:'white'}}>{this.state.time_part1.m} : {this.state.time_part1.s}</span>
            </div>
          </div>
          <br />
          <br />
          <div className='row container'>
            <div className='col-md col-xs' style={{textAlign:'center'}}>
              <img src={require('../../../assets/images/meter.jpg')} alt='MrXXX' style={{width:'75%', border:'1px solid black', borderRadius:'4px'}} /><br />
              <h4>Mr. XXXXXX</h4>
            </div>
            <div className='col-md col-xs' style={{textAlign:'center'}}>
              <img src={require('../../../assets/images/meter.jpg')} alt='MrXXX' style={{width:'75%', border:'1px solid black', borderRadius:'4px'}} /><br />
              <h4>COL XXXXXX</h4>
            </div>
          </div>
        </div>

        <div className='container-fluid' hidden={this.state.is_hidden_part2}>
          <div className='row container'>
            <div className='col-md' style={{textAlign:'center'}}>
              <span style={{marginTop:'2%', padding:'1% 2%', backgroundColor:'blue', fontWeight:'bolder', fontSize:'larger', color:'white'}}>{this.state.time_part2.m} : {this.state.time_part2.s}</span>
              <span style={{marginTop:'2%', padding:'1% 2%', backgroundColor:'red', fontWeight:'bolder', fontSize:'larger', color:'white'}}>Live</span>
            </div>
          </div>
          <br />
          <br />
          <div className='row container'>
            <div className='col-md col-xs' style={{textAlign:'center'}}>
              <img src={require('../../../assets/images/meter.jpg')} alt='MrXXX' style={{width:'75%', border:'1px solid black', borderRadius:'4px'}} /><br />
              <h4>Mr. XXXXXX</h4>
            </div>
            <div className='col-md col-xs' style={{textAlign:'center'}}>
              <img src={require('../../../assets/images/meter.jpg')} alt='MrXXX' style={{width:'75%', border:'1px solid black', borderRadius:'4px'}} /><br />
              <h4>COL XXXXXX</h4>
            </div>
          </div>
        </div>

        <div className='container-fluid' hidden={this.state.is_hidden_part3}>
          <div className='row container'>
            <div className='col-md' style={{textAlign:'center'}}>
              <span style={{marginTop:'2%', padding:'1% 2%', backgroundColor:'blue', fontWeight:'bolder', fontSize:'larger', color:'white'}}>{this.state.time_part2.m} : {this.state.time_part2.s}</span>
            </div>
          </div>
          <br />
          <br />
          <div className='row container'>
            <div className='col-md col-xs' style={{textAlign:'center'}}>
              <img src={require('../../../assets/images/meter.jpg')} alt='MrXXX' style={{width:'75%', border:'1px solid black', borderRadius:'4px'}} /><br />
              <h4>Mr. XXXXXX</h4>
            </div>
            <div className='col-md col-xs' style={{textAlign:'center'}}>
              <img src={require('../../../assets/images/meter.jpg')} alt='MrXXX' style={{width:'75%', border:'1px solid black', borderRadius:'4px'}} /><br />
              <h4>COL XXXXXX</h4>
            </div>
          </div>

          <div className='row container'>
              <Card body>
                <h4>
                  Hi Mr/Ms xxxxx. What do you think about me,
                  please rate me by clicking on Stars, 5 star is max.
                  Thanks. Col XXXXX
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
                <Button variant="contained" color="primary" disableElevation>
                  FINISH
                </Button>
              </Card>
              <br />
          </div>
        </div>
      </div>
    );
  }
}

export default GTODT;
