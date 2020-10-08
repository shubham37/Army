import React, { Component } from 'react';
import { ScheduleComponent, WorkWeek, Week, Month, Inject, ViewsDirective, ViewDirective, Agenda } from '@syncfusion/ej2-react-schedule';

class AssessorTrainingSchedule extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <hr  />
        <br/>
        <ScheduleComponent>
          <Inject services={[WorkWeek, Week, Month, Agenda]}/>        
          <ViewsDirective>
            {/* <ViewDirective option='WorkWeek' startHour='10:00' endHour='18:00'/> */}
            <ViewDirective option='Week' startHour='08:00' endHour='20:00'/>
            <ViewDirective option='Month' showWeekend={false}/>
          </ViewsDirective>
        </ScheduleComponent>
        <br />
      </div>
    );
  }
}

export default AssessorTrainingSchedule;
