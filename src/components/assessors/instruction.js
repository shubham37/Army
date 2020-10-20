import React, { Component } from 'react';

class AssessorInstruction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students : []
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    };

    // axios.get(`/assessor_api/breifcase/`, {
    //   headers : headers
    // })
    // .then((data) => {
    //   console.log(data);
    // })
    // .catch((error) => {
    //   console.log(error.message);
    // });
  }

  render() {
    return (
      <div className='row container-fluid'>
        <div className='col'>
          <hr />
          <h5>Hello, We are in AssessorInstruction.</h5>
        </div>
      </div>
    );
  }
}

export default AssessorInstruction;
