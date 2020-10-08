import React, { Component } from 'react';
import { ScheduleComponent, Inject, Day } from '@syncfusion/ej2-react-schedule';

class StudentScheduleToday extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <ScheduleComponent>
          <Inject services={[Day]}/>        
        </ScheduleComponent>
        <br />
      </div>
    );
  }
}

export default StudentScheduleToday;
