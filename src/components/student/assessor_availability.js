import React, { Component } from 'react';
import { ScheduleComponent, WorkWeek, Day, Month, Inject, ViewsDirective, ViewDirective, Agenda } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import axios from 'axios'
import CachedIcon from '@material-ui/icons/Cached';
import { Spinner } from 'react-bootstrap';


class AssessorAvailablityCheck extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
          availabilities : [],
          action_info:' Refresh To See Changes',
          in_processing: false
        }
        this.onAddClick = this.onAddClick.bind(this);
        this.onPopupOpen = this.onPopupOpen.bind(this);
        this.editorTemplate = this.editorTemplate.bind(this);
        this.onActionBegin = this.onActionBegin.bind(this);
        this.onRefresh =  this.onRefresh.bind(this);
    }

    onRefresh(e) {
      e.preventDefault();
      const token = localStorage.getItem('token');
      
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      };
      
      axios.post(`/assessor_api/availablity/assessor_dept_list/`, {'assessor':this.props.id}, {headers:headers})  
      .then((data) =>{
        // debugger
        if (data.status === 200){
          const availabilities = [];
          data.data.availabilities.map((availability) => {
            availabilities.push({
              Id: availability.id,
              Subject: 'Available',
              StartTime: new Date(availability.start_time),
              EndTime: new Date(availability.end_time),
              EventType: 'Available'
            })
          });
          this.setState({
            availabilities:availabilities
          });
        } else {
          this.setState({
            availabilities: []
          });
        }
      })
      .catch((error) => {
        // console.log(error.message);
      });
    }
  
    onActionBegin(action) {
        // if (action.requestType === 'eventRemove') {
        //   const token = localStorage.getItem('token');    
        // }
        // else if (action.requestType === 'eventCreate') {
        //   const data = [];
        // }
        // else if (action.requestType === 'eventChange') {
        //   const data = action.changedRecords
        // } 
    }
    
    onPopupOpen(args) {
      if (args.type === 'Editor') {
          let statusElement = args.element.querySelector('#EventType');
          statusElement.setAttribute('name', 'EventType');
      }
    }
    
    editorTemplate(props) {
      return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%' }}><tbody>
      <tr><td className="e-textlabel">Status</td><td colSpan={4}>
        <DropDownListComponent id="EventType" placeholder='Choose status' data-name="EventType" className="e-field" style={{ width: '100%' }} dataSource={['Available', 'Schedule']} value={props.EventType}></DropDownListComponent>
      </td></tr>
      <tr><td className="e-textlabel">Subject</td><td colSpan={4}>
        <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} />
      </td></tr>
      <tr><td className="e-textlabel">From</td><td colSpan={4}>
        <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field" disabled={true} ></DateTimePickerComponent>
      </td></tr>
      <tr><td className="e-textlabel">To</td><td colSpan={4}>
        <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field" disabled={true}></DateTimePickerComponent>
      </td></tr></tbody></table> : <div></div>);
    }
    
    onAddClick() {
      this.setState({
        in_processing: true
      });
      // console.log(this.scheduleObj);
      const data = []
      // actually code needed
      this.scheduleObj.eventsData.map((slot) => {
        if (slot.EventType === 'Schedule') {
          data.push({
            Id: slot.Id,
            Subject: 'Schedule',
            StartTime: slot.StartTime,
            EndTime: slot.EndTime,
          });
        }
      });
      const token = localStorage.getItem('token');
  
      axios.post(`/student_api/assessor_stream_schedule/add_test_schedule/`, {'schedules':data, 'assessor':1},
      {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error.message);
      })
      this.setState({
        in_processing: true
      });
  
    }

    render() {
        return (
            <div>
                <div class="modal fade bd-example-modal-lg" id="availabilityModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <p class="modal-title" id="exampleModalLabel">
                                    <b>Col,</b><br />
                                    Hi Mr/Ms XXX, <br />
                                    I'am available here to train you on green area's, click and book, Once you book it wiil turn into Red.<br /> 
                                    Best Wishes. <br />
                                    Thanks & Regards
                                </p>
                                <span style={{marginRight:'1%'}}><button className='btn btn-warning' onClick={this.onRefresh}><CachedIcon /></button></span>
                            </div>
                            <div class="modal-body">
                                <div className='forgot_password'>
                                <ScheduleComponent ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.state.availabilities }} 
                                    editorTemplate={this.editorTemplate} showQuickInfo={false} popupOpen={this.onPopupOpen}  
                                    actionBegin={this.onActionBegin} >
                                <Inject services={[Day, WorkWeek, Month]}/> 
                                <ViewsDirective>
                                    <ViewDirective option='WorkWeek' startHour='09:00' endHour='18:00'/>
                                    {/* <ViewDirective option='Week' startHour='08:00' endHour='20:00'/> */}
                                    <ViewDirective option='Month' showWeekend={false}/>
                                </ViewsDirective>
                                </ScheduleComponent>
                                </div>
                            </div>
                            <div class="modal-footer">
                              <span>{this.state.action_info}</span>
                              <span hidden={this.state.in_processing}><Spinner /></span>
                                <ButtonComponent data-dismiss="modal">Close</ButtonComponent>
                                <ButtonComponent id='add' title='Add' ref={t => this.buttonObj = t} onClick={this.onAddClick}>Confirm</ButtonComponent>
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>
        );
    }
}

export default AssessorAvailablityCheck;
