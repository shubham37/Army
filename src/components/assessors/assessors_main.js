import React, { Component } from 'react';
import AssessorNavigation from './assessors_navigation.js'

class AssessorMain extends Component {
  render() {
    return (
        <div className='AssessorMain'>
            <div className='row'>
                <div className='col'>
                    <AssessorNavigation />
                </div>
            </div>
            <div className='container-fluid'>
                <p>Welcome Mr.Shubham<span className='float-right'><button className='btn-danger'>Logout</button></span></p>
            </div>
        </div>
    );
  }
}

export default AssessorMain;
