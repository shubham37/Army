import React, { Component } from 'react';
import { ScheduleComponent, Inject, Day } from '@syncfusion/ej2-react-schedule';
import axios from 'axios'
import CachedIcon from '@material-ui/icons/Cached';

class StudentScheduleToday extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : []
    }
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    }
    axios.get(`/student_api/assessor_stream_schedule/student_list`, {
      headers: headers
    })
    .then((data) => {
      const schedules = []
      data.data.StreamSchedules.map((schedule) => {
        schedules.push({
          Subject: schedule.subject,
          StartTime: new Date(schedule.start_time),
          EndTime: new Date(schedule.end_time)    
        })
      });
      this.setState({ data: schedules })
    })
    .catch((error) => {
      this.setState({ data: [] })
      console.log(error.message);
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <button className='btn btn-warning float-right' onClick={this.fetchData}><CachedIcon /></button>
        <br /> <br /> 
        <ScheduleComponent eventSettings={{ dataSource: this.state.data }}>
          {/* <Inject services={[WorkWeek, Week, Month, Agenda]}/>  
          <ViewsDirective>
          <ViewDirective option='Week' startHour='08:00' endHour='20:00'/>
          <ViewDirective option='Month' showWeekend={false}/>
        </ViewsDirective> */}
          <Inject services={[Day]}/>        
        </ScheduleComponent>
        <br />
      </div>
    );
  }
}

export default StudentScheduleToday;
