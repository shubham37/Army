import React, { Component } from 'react';
import StudentNavigation from './student_navigation.js'

class StudentMain extends Component {
  render() {
    return (
        <div className='StudentMain'>
            <div className='row'>
                <div className='col'>
                    <StudentNavigation />
                </div>
            </div>
            <div className='container-fluid'>
                <p>Welcome Mr.Shubham<span className='float-right'><button className='btn-danger'>Logout</button></span></p>
            </div>
        </div>
    );
  }
}

export default StudentMain;
