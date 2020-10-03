import React, { Component } from 'react';
import AdminNavigation from './admin_navigation.js'

class AdminMain extends Component {
  render() {
    return (
        <div className='AdminMain'>
            <div className='row'>
                <div className='col'>
                    <AdminNavigation />
                </div>
            </div>
            <div className='container-fluid'>
                <p>Welcome Admin Office<span className='float-right'><button className='btn-danger'>Logout</button></span></p>
            </div>
        </div>
    );
  }
}

export default AdminMain;
