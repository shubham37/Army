import React, { Component } from 'react';
import { ScheduleComponent, Inject, Day, ViewDirective, ViewsDirective } from '@syncfusion/ej2-react-schedule';
import axios from 'axios'
import CachedIcon from '@material-ui/icons/Cached';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import '../../App.css';


class AssessorScheduleToday extends Component {

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
    this.setState({ action_info: 'fetching ...'});

    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    };

    axios.get(`/assessor_api/availablity/today/`, {headers:headers})
    .then((data) =>{
      if (data.status === 200){
        const schedules = [];
        data.data.schedules.map((schedule) => {
          schedules.push({
            Id: schedule.id,
            Subject: schedule.subject+ " || " + schedule.student.first_name,
            StartTime: new Date(schedule.start_time),
            EndTime: new Date(schedule.end_time),
            Video: schedule.video_url
          })
        });
        this.setState({
          data:schedules,
          action_info: 'Data Fetched'
        });
      } else {
        this.setState({
          data: [],
          action_info: 'Try Again'
        });
      }
    })
    .catch((error) => {
      this.setState({ data: [], action_info: 'Try Again' });
    });
  }

  editorTemplate(props) {
    return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%' }} id='content'><tbody>
    <tr hidden={true}><td className="e-textlabel">Status</td><td colSpan={4}>
      <DropDownListComponent id="EventType" placeholder='Choose status' data-name="EventType" className="e-field" style={{ width: '100%' }} dataSource={['Available', 'Scheduled']} value={props.EventType || null}></DropDownListComponent>
    </td></tr>
    <tr hidden={!props.Video}><td className="e-textlabel"></td><td colSpan={4}>
      <a href={'https://localhost:8443/'+ props.Video || ""} className='e-field' name="Subject">Join Training Now</a>
      {/* <input hidden={true} id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} /> */}
    </td></tr>
    <tr><td className="e-textlabel">From</td><td colSpan={4}>
      <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
    </td></tr>
    <tr><td className="e-textlabel">To</td><td colSpan={4}>
      <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
    </td></tr></tbody></table> : <div></div>);
  }


  render() {
    return (
      <div className='container-fluid'>
        <hr />
        <button className='btn btn-warning float-right' onClick={this.fetchData}><CachedIcon /></button>
        <br /> <br /> 
        <ScheduleComponent ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.state.data }}
          editorTemplate={this.editorTemplate} showQuickInfo={false}>
          <Inject services={[Day]}/>
          <ViewsDirective>
            <ViewDirective option='Day' startHour='09:00' endHour='18:00' readonly={false} />
          </ViewsDirective>
        </ScheduleComponent>
        <br />
      </div>
    );
  }
}

export default AssessorScheduleToday;
