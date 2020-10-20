import React, { Component } from 'react';
import { ScheduleComponent, WorkWeek, Week, Month, Inject, ViewsDirective, ViewDirective, Agenda } from '@syncfusion/ej2-react-schedule';
import axios from 'axios';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';


class AssessorTrainingSchedule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      schedules : []
    }
    this.onAddClick = this.onAddClick.bind(this);
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

  onAddClick(e) {
    console.log(e.target);
    console.log(this.scheduleObj);
  }

  render() {
    return (
      <div className='container-fluid'>
        <hr />
        <br/>
        <ScheduleComponent ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.state.schedules }}>
          <Inject services={[WorkWeek, Week, Month, Agenda]}/>        
          {/* <ViewsDirective> */}
            {/* <ViewDirective option='WorkWeek' startHour='10:00' endHour='18:00'/> */}
            {/* <ViewDirective option='Week' startHour='08:00' endHour='20:00'/>
            <ViewDirective option='Month' showWeekend={false}/>
          </ViewsDirective> */}
        </ScheduleComponent>
        <br />
        <ButtonComponent id='add' title='Add' ref={t => this.buttonObj = t} onClick={this.onAddClick(e)}>Confirm</ButtonComponent>
      </div>
    );
  }
}

export default AssessorTrainingSchedule;
