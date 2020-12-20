import React, { Component } from 'react';
import {Card, Button, Modal } from 'react-bootstrap'
import axios from 'axios'
import { ScheduleComponent, Week, Day, Month, Inject, ViewsDirective, ViewDirective, Agenda } from '@syncfusion/ej2-react-schedule';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';


class StudentAssessorPD extends Component {

  constructor(props) {
    super(props);
    this.state = {
      is_assessor : false,
      assessors : [],
      display_message:'',
      current_assessor: -1,
      show: false,
      availabilities : [],
      action_info:' Choose From Given Availablity'
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onPopupOpen = this.onPopupOpen.bind(this);
    this.editorTemplate = this.editorTemplate.bind(this);
    this.onActionBegin = this.onActionBegin.bind(this);
    this.fetchData =  this.fetchData.bind(this);

  }

  handleShow(id) {
    this.setState({
      show: true,
      current_assessor: id
    })
  }

  handleClose() {
    this.setState({
      show: false
    })
  }

  componentWillMount() {
    axios.get(`/assessor_api/dept/PD`)
    .then((data) =>{
        if (data.status === 200){
          console.log(data);
          this.setState({
            is_assessor:data.data.is_exist,
            assessors:data.data.assessors
          });
        } else {
          this.setState({
            is_assessor:false,
            assessors:[],
            display_message:'No Assessor Will be Found'
          });
        }
    })
    .catch((error) => {
      this.setState({
        is_assessor:false,
        assessors:[],
        display_message:error.message
      });
    });
  }


  fetchData() {
    const token = localStorage.getItem('token');
    
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    };
    
    axios.post(`/assessor_api/availablity/assessor_dept_list/`, {'assessor':this.state.current_assessor.id}, {headers:headers})  
    .then((data) =>{
      if (data.status === 200){
        console.log(data);
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
      console.log(error.message);
    });
  }

  onPopupOpen(args) {
    if (args.type === 'Editor') {
        let statusElement = args.element.querySelector('#EventType');
        statusElement.setAttribute('name', 'EventType');
    }
  }
  
  editorTemplate(props) {
    return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%' }}><tbody>
    <tr hidden='true'><td className="e-textlabel">Status</td><td colSpan={4}>
      <DropDownListComponent id="EventType" placeholder='Choose status' data-name="EventType" className="e-field" style={{ width: '100%' }} dataSource={['Available', 'Schedule']} value={props.EventType}></DropDownListComponent>
    </td></tr>
    <tr><td className="e-textlabel">Subject</td><td colSpan={4}>
      <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} />
    </td></tr>
    <tr><td className="e-textlabel">From</td><td colSpan={4}>
      <input id="StartTime" className="e-field" type="text" name="StartTime" value={new Date(props.startTime || props.StartTime)} style={{ border:'none', width: '100%' }} />
    </td></tr>
    <tr><td className="e-textlabel">To</td><td colSpan={4}>
      <input id="StartTime" className="e-field" type="text" name="StartTime" value={new Date(props.startTime || props.StartTime)} style={{ border:'none', width: '100%' }} />
    </td></tr>
    </tbody></table> : <div></div>);
  }
  
  onActionBegin(action) {
    if ( action.requestType === 'eventChange') {
      const data = []
      action.changedRecords.map((slot) => {
        data.push({
          Id: slot.Id,
          Subject: 'Schedule',
          StartTime: slot.StartTime,
          EndTime: slot.EndTime,
        });
      });
      const token = localStorage.getItem('token');

      axios.post(`/student_api/assessor_stream_schedule/add_test_schedule/`, {'schedules':data, 'assessor': this.state.current_assessor.id},
      {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }
      })
      .then((data) => {
        this.setState({
          action_info: "Training Scheduled Successfully."
        })
        this.fetchData();
      })
      .catch((error) => {
        console.log(error.message);
      })
    }
  }

  render() {
    const assessor_content = (
      <div className='row'>
        {this.state.assessors.map((assessor) => 
          <div className='col' key={assessor.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{assessor.first_name} {assessor.id}</Card.Title>
                <Card.Text>
                  <div>
                    Gender : {assessor.gender === 1? 'Male' : 'FeMale'} <br />
                    Designation : {assessor.position.designation}
                  </div>
                </Card.Text>
                <Button variant="primary" onClick={(e) => this.handleShow(assessor)}>See Availability</Button>
              </Card.Body>
            </Card> 
          </div>
        )}
      </div>
    )

    const no_content = (
      <div className='row'>
        <div className='col' style={{width:'100%', textAlign:'center'}}>
          <p>No Assessor For PD</p>
        </div>
      </div>
    )

    return (
      <div className="container-fluid">
        <Card>
          <Card.Header>PD Dept. Assessors</Card.Header>
          <Card.Body>
          {this.state.is_assessor
            ? assessor_content :
            no_content}
          </Card.Body>
        </Card>


        <Modal show={this.state.show} size="xl" onShow={(e) => this.fetchData()} onHide={(e) => this.handleClose()}>
          <Modal.Header>
            <div>
                Hi,<br />
                I am Mr <b>{ this.state.current_assessor?.first_name }</b>, <br />
                available here to train you, click and book.<br /> 
                Best Wishes. <br />
                Thanks & Regards
            </div>
          </Modal.Header>
          <Modal.Body>
            <p style={{ textAlign: 'center'}}>{this.state.action_info}</p>
            <div className='forgot_password'>
              <ScheduleComponent ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.state.availabilities }} 
                  editorTemplate={this.editorTemplate} showQuickInfo={false} popupOpen={this.onPopupOpen}  
                  actionBegin={this.onActionBegin} >
              <Inject services={[Day, Week, Month]}/> 
              <ViewsDirective>
                  <ViewDirective option='Week' startHour='09:00' endHour='18:00'/>
                  {/* <ViewDirective option='Week' startHour='08:00' endHour='20:00'/> */}
                  <ViewDirective option='Month' showWeekend={false}/>
              </ViewsDirective>
              </ScheduleComponent>
            </div>
          </Modal.Body>
        </Modal>
        <br />
      </div>
    );
  }
}

export default StudentAssessorPD;
