import React, { Component } from 'react';
import { ScheduleComponent, WorkWeek, Week, Month, Inject, Day, Agenda } from '@syncfusion/ej2-react-schedule';
import axios from 'axios'

class AssessorScheduleToday extends Component {

  constructor(props) {
    super(props);
    this.state = {
      schedules : []
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    };

    axios.get(`/assessor_api/availablity/`, {headers:headers})
    .then((data) =>{
      if (data.status === 200){
        const schedules = [];
        data.data.availabilities.map((schedule) => {
          schedules.push({
            Subject: schedule.subject,
            StartTime: new Date(schedule.start_time),
            EndTime: new Date(schedule.end_time)    
          })
        });
        data.data.not_availabilities.map((schedule) => {
          schedules.push({
            Subject: schedule.subject,
            StartTime: new Date(schedule.start_time),
            EndTime: new Date(schedule.end_time)    
          })
        });

        this.setState({
          schedules:schedules
        });
      } else {
        this.setState({
          schedules: []
        });
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <ScheduleComponent ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.state.schedules }}>
          <Inject services={[WorkWeek, Day, Week, Month, Agenda]}/>        
        </ScheduleComponent>
        <br />
      </div>
    );
  }
}

export default AssessorScheduleToday;
