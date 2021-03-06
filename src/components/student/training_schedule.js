import React, { Component } from 'react';
import { ScheduleComponent, WorkWeek, Week, Month, Inject, 
  ViewDirective, ViewsDirective, Day, Agenda, MonthAgenda, 
  TimelineViews, TimelineMonth } from '@syncfusion/ej2-react-schedule';
import axios from 'axios'
import CachedIcon from '@material-ui/icons/Cached';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import '../../App.css';


class StudentTrainingSchedule extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      action_info: ''
    }
    this.fetchData = this.fetchData.bind(this);
    this.editorTemplate = this.editorTemplate.bind(this);
  }

  fetchData() {
    this.setState({ action_info: 'Fetching ... '});
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    }
    axios.get(`/student_api/assessor_stream_schedule/`, {
      headers: headers
    })
    .then((data) => {
      this.setState({ action_info: 'Data Refreshed'});
      const schedules = []
      data.data.StreamSchedules.map((schedule) => {
        // // console.log(schedule.assessor.department)
        
        schedules.push({
          Id: schedule.id,
          Subject: schedule.subject+ " || " + schedule.assessor.department+ " || " +schedule.assessor.first_name,
          StartTime: new Date(schedule.start_time),
          EndTime: new Date(schedule.end_time)
        })
      });
      this.setState({ data: schedules })
    })
    .catch((error) => {
      this.setState({ action_info: 'Try Again', data: [] });
    });
  }

  editorTemplate(props) {
    
    return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%' }}><tbody>
    <tr><td className="e-textlabel">Summary</td><td colSpan={4}>
      <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} disabled='true' />
    </td></tr>
    <tr><td className="e-textlabel">From</td><td colSpan={4}>
      <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field" disabled='true'></DateTimePickerComponent>
    </td></tr>
    <tr><td className="e-textlabel">To</td><td colSpan={4}>
      <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field" disabled='true'></DateTimePickerComponent>
    </td></tr>
    <tr><td className="e-textlabel">Msg</td><td colSpan={4}>
      <p>Please Available On Time</p>
    </td></tr>
    </tbody></table> : <div></div>);
  }

  render() {
    return (
      <div className='container-fluid'>
        <button className='btn btn-warning float-right' onClick={this.fetchData}><CachedIcon /></button>
        <span className='float-right'>{ this.state.action_info }</span>
        <br /> <br /> 
        <ScheduleComponent ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.state.data }}
        editorTemplate={this.editorTemplate} showQuickInfo={false}>
          {/* <Inject services={[WorkWeek, Week, Month, Agenda]}/>  
          <ViewsDirective>
          <ViewDirective option='Week' startHour='08:00' endHour='20:00'/>
          <ViewDirective option='Month' showWeekend={false}/>
        </ViewsDirective> */}
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth ]} />
          <ViewsDirective>
            <ViewDirective option='WorkWeek' startHour='09:00' endHour='18:00'/>
            {/* <ViewDirective option='Week' startHour='08:00' endHour='20:00'/> */}
            <ViewDirective option='Month' showWeekend={false}/>
          </ViewsDirective>

        </ScheduleComponent>
        <br />
      </div>  
    );
  }
}

export default StudentTrainingSchedule;
