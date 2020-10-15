import React, { Component } from 'react';
import { ScheduleComponent, WorkWeek, Week, Month, Inject, Day, Agenda, MonthAgenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

class StudentTrainingSchedule extends Component {

  constructor(props) {
    super(props);
  }
  
  componentWillMount() {    
    this.data = [{
      // Id: 2,
      Subject: 'Paris',
      StartTime: new Date(2020, 9, 15, 10, 0),
      EndTime: new Date(2020, 9, 15, 12, 30),
  }];
  }

  onClickAdd() {
    this.scheduleObj.eventsData.map((day) => {
      this.data = []
      console.log(day.Guid);
      this.data.push({
        // Id: day.Id,
        Subject: day.Subject,
        StartTime: new Date(day.StartTime),
        EndTime: new Date(day.EndTime),
      })
    });
    this.scheduleObj.saveEvent(this.data);
  }

  render() {
    return (
      <div className='container-fluid'>
          <ScheduleComponent ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.data }}>
            {/* <Inject services={[WorkWeek, Week, Month, Agenda]}/>  
            <ViewsDirective>
            <ViewDirective option='Week' startHour='08:00' endHour='20:00'/>
            <ViewDirective option='Month' showWeekend={false}/>
          </ViewsDirective> */}
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth ]} />
          </ScheduleComponent>

        <div className='container' style={{textAlign:'center', width:'100%'}}>
          <ButtonComponent id='add' title='Add'  style={{padding:'2% 5%', margin:'3% 0', backgroundColor:'red', fontWeight:'bolder', fontSize:'larger', color:'white'}} onClick={this.onClickAdd.bind(this)}>Submit</ButtonComponent>
        </div>
      </div>
    );
  }
}

export default StudentTrainingSchedule;
