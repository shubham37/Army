import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import { ScheduleComponent, WorkWeek, Week, Month, Inject, Day, ViewsDirective, ViewDirective, Agenda } from '@syncfusion/ej2-react-schedule';
import axios from 'axios';
import CachedIcon from '@material-ui/icons/Cached';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import '../../App.css';

class AssessorTrainingSchedule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      schedules : [],
      action_info: '',
      is_spinner_hidden: true
    }

    this.onAddClick = this.onAddClick.bind(this);
    this.onPopupOpen = this.onPopupOpen.bind(this);
    this.editorTemplate = this.editorTemplate.bind(this);
    this.onActionBegin = this.onActionBegin.bind(this);
    this.onRefresh =  this.onRefresh.bind(this);
  }
  
  onRefresh(e) {
    this.setState({ action_info: "fetching ..." })
    e.preventDefault();
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
            Id: schedule.id,
            Subject: 'Available',
            StartTime: new Date(schedule.start_time),
            EndTime: new Date(schedule.end_time)    
          })
        });
        data.data.not_availabilities.map((schedule) => {
          schedules.push({
            Id: schedule.id,
            Subject: schedule.subject + " || " +schedule.student.first_name,
            StartTime: new Date(schedule.start_time),
            EndTime: new Date(schedule.end_time)    
          })
        });
        this.setState({
          schedules:schedules,
          action_info: "Data Fetched"
        });
      } else {
        this.setState({
          schedules: []
        });
      }
    })
    .catch((error) => {
      this.setState({
        schedules: [],
        action_info: 'Try Again.'
      });
    });
  }
  
  onActionBegin(action) {  
    this.setState({action_info:'Mark Youself Available'});

    if (action.requestType === 'eventRemove') {
      this.setState({action_info:'Click To Save Changes'});

      const delete_ids = []; 
      const deleted_reco = [];
      action.deletedRecords.map((record) => {
        if (record.Subject === 'Available'){
          delete_ids.push(record.Id);
          deleted_reco.push(record);
        }
      });
      const token = localStorage.getItem('token');

      axios.post(`/assessor_api/availablity/delete_availabilities/`, {'schedules_ids': delete_ids}, 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`    
        }
      })
      .then((data) => {
        if (data.data.is_delete) {
          this.setState({action_info: data.data.detail})
        } else {
          this.setState({action_info: data.data.detail + 'Please Refresh It.'})
        }
      })
      .catch((error) => {
        this.setState({action_info: 'Please Try Again.'})
        // console.log(error.message);
      });
    }
    else if (action.requestType === 'eventCreate') {
      this.setState({action_info:'Click To Save Changes.'});
      action.addedRecords.map((record) => {
        if (record.EventType === 'Available') {
          record.Subject  = 'Available'
        } else {
          this.setState({action_info:'You can not Schedule. It will be remove once you click confirm or leave page.'})
          record = null
        }
      })
    }
  }

  onPopupOpen(args) {
    if (args.type === 'Editor') {
        if (args.data.Subject !== 'Available'){
          console.log(args.data);
          // let bodyElement = args.element.querySelector('#content');
          // bodyElement.innerHTML = "You are Not Allowed"
        } else {
          let statusElement = args.element.querySelector('#EventType');
          statusElement.setAttribute('name', 'EventType');
        }
    }
  }

  editorTemplate(props) {
    return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%' }} id='content'><tbody>
    <tr><td className="e-textlabel">Status</td><td colSpan={4}>
      <DropDownListComponent id="EventType" placeholder='Choose status' data-name="EventType" className="e-field" style={{ width: '100%' }} dataSource={['Available', 'Scheduled']} value={props.EventType || null}></DropDownListComponent>
    </td></tr>
    <tr hidden={true}><td className="e-textlabel">Summary</td><td colSpan={4}>
      <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} />
    </td></tr>
    <tr><td className="e-textlabel">From</td><td colSpan={4}>
      <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
    </td></tr>
    <tr><td className="e-textlabel">To</td><td colSpan={4}>
      <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
    </td></tr></tbody></table> : <div></div>);
  }

  onAddClick() {
    this.setState({ 
      is_spinner_hidden: false,
      action_info: 'fetching ...'
    });
      const data = []
      this.scheduleObj.eventsData.map((slot) => {
        if (slot.EventType === 'Available') {
          data.push({
            Status: 1,
            StartTime: slot.StartTime,
            EndTime: slot.EndTime,
            Id: slot.Id
          });
        }
      });
      const token = localStorage.getItem('token');
  
      axios.post(`/assessor_api/availablity/add_availability/`, {'schedules':data},
      {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }
      })
      .then((data) => {
        this.setState({ 
          is_spinner_hidden: true,
          action_info: "Marked Available Sucessfully Done."
        });
      })
      .catch((error) => {
        this.setState({ 
          is_spinner_hidden: true,
          action_info: "Please Try Again."
        });
      });  
  }

  render() {
    return (
      <div className='container-fluid'>
        <hr />
          <div className='float-right' style={{width:'100%'}}>
            <span style={{marginRight:'1%'}}><button className='btn btn-warning' onClick={this.onRefresh}><CachedIcon /></button></span>
            <span style={{marginRight:'1%'}}>
              <button className='btn btn-success' id='add' title='Add' ref={t => this.buttonObj = t} onClick={this.onAddClick}>
                <span><Spinner animation='border' hidden={this.state.is_spinner_hidden} /></span>
                <span hidden={!this.state.is_spinner_hidden}>Confirm</span>
              </button>
            </span>
            <span style={{padding:'2%', margin:'1%'}}>{this.state.action_info}</span>
          </div>
        <br />
        <br />
         <ScheduleComponent ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.state.schedules }} 
         editorTemplate={this.editorTemplate} showQuickInfo={false} popupOpen={this.onPopupOpen}  
         actionBegin={this.onActionBegin} >
          <Inject services={[Day, Week, Month]}/> 
          <ViewsDirective>
            <ViewDirective option='Week' startHour='09:00' endHour='22:00'/>
            {/* <ViewDirective option='Week' startHour='08:00' endHour='20:00'/> */}
            <ViewDirective option='Month' showWeekend={false}/>
          </ViewsDirective>
        </ScheduleComponent>
        <br />
        
      </div>
    );
  }
}

export default AssessorTrainingSchedule;
