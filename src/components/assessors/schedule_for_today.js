import React, { Component } from 'react';
import { ScheduleComponent, WorkWeek, Week, Month, Inject, Day, Agenda } from '@syncfusion/ej2-react-schedule';

class AssessorScheduleToday extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <hr  />
        <br/>
        <ScheduleComponent>
          <Inject services={[WorkWeek, Day, Week, Month, Agenda]}/>        
        </ScheduleComponent>
        <br />
      </div>
    );
  }
}

export default AssessorScheduleToday;
