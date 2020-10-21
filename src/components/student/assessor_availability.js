import React, { Component } from 'react';
import { ScheduleComponent, WorkWeek, Day, Month, Inject, ViewsDirective, ViewDirective, Agenda } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import axios from 'axios'
import CachedIcon from '@material-ui/icons/Cached';


class AssessorAvailablityCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedules : [],
            action_info:''
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
      
      axios.get(`/assessor_api/availablity/`, {headers:headers})  
      .then((data) =>{
        debugger
        if (data.status === 200){
          const schedules = [];
          data.data.availabilities.map((schedule) => {
            schedules.push({
              Id: schedule.id,
              Subject: 'Free',
              StartTime: new Date(schedule.start_time),
              EndTime: new Date(schedule.end_time)    
            })
          });
          data.data.not_availabilities.map((schedule) => {
            schedules.push({
              Id: schedule.id,
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
  
    onActionBegin(action) {
        if (action.requestType === 'eventRemove') {
          const delete_ids = []; 
          action.deletedRecords.map((record) => {
            delete_ids.push(record.Id);
          });
          const token = localStorage.getItem('token');
    
          axios.post(`/assessor_api/availablity/delete_availabilities`, {'schedules_ids': delete_ids}, 
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`    
            }
          })
          .then((data) => {
              console.log(data);
          })
          .catch((error) => {
            action.deletedRecords = [];
            console.log(error.message);
          });
        }
        else if (action.requestType === 'eventCreate') {
          const data = []
          action.addedRecords.map((record) => {
            if (record.EventType === 'Available') {
              record.Subject  = 'Available'
            } else {
              record = {}
            }
          })
        }
        else if (action.requestType === 'eventChange') {
          const data = action.changedRecords
        } 
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
        <DropDownListComponent id="EventType" placeholder='Choose status' data-name="EventType" className="e-field" style={{ width: '100%' }} dataSource={['Available', 'Scheduled']} value={props.EventType || null}></DropDownListComponent>
      </td></tr>
      <tr><td className="e-textlabel">Summary</td><td colSpan={4}>
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
        console.log(this.scheduleObj);
    }

    render() {
        return (
            <div>
                <div class="modal fade bd-example-modal-lg" id="availabilityModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
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
                                <ScheduleComponent ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.state.schedules }} 
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
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
