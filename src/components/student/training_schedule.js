import React, { Component } from 'react';
import { ScheduleComponent, WorkWeek, Week, Month, Inject, Day, Agenda, MonthAgenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import axios from 'axios'
import CachedIcon from '@material-ui/icons/Cached';

class StudentTrainingSchedule extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data : []
    }
    this.fetchData = this.fetchData.bind(this);
  }

  // onClickAdd() {
  //   this.scheduleObj.eventsData.map((day) => {
  //     this.data = []
  //     console.log(day.Guid);
  //     this.data.push({
  //       // Id: day.Id,
  //       Subject: day.Subject,
  //       StartTime: new Date(day.StartTime),
  //       EndTime: new Date(day.EndTime),
  //     })
  //   });
  //   this.scheduleObj.saveEvent(this.data);
  // }

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
        <ScheduleComponent ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.state.data }}>
          {/* <Inject services={[WorkWeek, Week, Month, Agenda]}/>  
          <ViewsDirective>
          <ViewDirective option='Week' startHour='08:00' endHour='20:00'/>
          <ViewDirective option='Month' showWeekend={false}/>
        </ViewsDirective> */}
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth ]} />
        </ScheduleComponent>
        <br />
      </div>  
    );
  }
}

export default StudentTrainingSchedule;
