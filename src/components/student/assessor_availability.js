import React, { Component } from 'react';
import { ScheduleComponent, WorkWeek, Week, Month, Inject, ViewsDirective, ViewDirective, Agenda } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';


class AssessorAvailablityCheck extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log("this.props");
        console.log(this.props);
        this.onAddClick = this.onAddClick.bind(this);
    }

    onAddClick(e) {
        console.log(e.target);
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
                            </div>
                            <div class="modal-body">
                                <div className='forgot_password'>
                                <ScheduleComponent ref={t => this.scheduleObj = t}>
                                <Inject services={[WorkWeek, Week, Month, Agenda]}/>        
                                <ViewsDirective>
                                    <ViewDirective option='Week' startHour='08:00' endHour='20:00'/>
                                    <ViewDirective option='Month' showWeekend={false}/>
                                </ViewsDirective>
                                </ScheduleComponent>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <ButtonComponent id='add' title='Add' ref={t => this.buttonObj = t} onClick={this.onAddClick(e)}>Confirm</ButtonComponent>
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>
        );
    }
}

export default AssessorAvailablityCheck;
