import React, { Component } from 'react';
import { ScheduleComponent, WorkWeek, Week, Month, Inject, ViewsDirective, ViewDirective, Agenda } from '@syncfusion/ej2-react-schedule';

class StudentTrainingSchedule extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <ScheduleComponent>
          <Inject services={[WorkWeek, Week, Month, Agenda]}/>        
          <ViewsDirective>
            <ViewDirective option='Week' startHour='08:00' endHour='20:00'/>
            <ViewDirective option='Month' showWeekend={false}/>
          </ViewsDirective>
        </ScheduleComponent>
        <br />
      </div>
    );
  }
}

export default StudentTrainingSchedule;
