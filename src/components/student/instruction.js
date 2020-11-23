import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import axios from 'axios'


class StudentIntruction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      instructions : []
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    };

    axios.get(`/assessor_api/instructions/student_list/`, {
      headers : headers
    })
    .then((data) => {
      if (data.status === 200) {
        var local_ins = []
        data.data.map((instruction) => {
          local_ins.push({
            'assessor_name': instruction.assessor.first_name,
            'text': instruction.instruction
          })
        })
        this.setState({instructions: local_ins});
      } else {
        this.setState({instructions: []});
      }
    })
    .catch((error) => {
      this.setState({instructions:[]});
      console.log(error);
    });
  }


  render() {
    const instructions = (
      <div className='row'>
        {this.state.instructions.map((instruction) => (
        <div className='col-md-4 col-12 col-s-4' style={{borderBottom:'1px solid black', padding: '2%'}}>
          <p><b>{instruction.text}</b></p>
        <footer>{instruction.assessor_name}</footer>          
        </div>
        ))}
      </div>
    )

    return (
      <div className="row container-fluid">
        <div className='col'>
          <Card>
            <Card.Header>Instructions For Candidate </Card.Header>
            <Card.Body>
              {instructions}
              <br />
              <p>See Demo Video to see the entire Procedure</p>
            </Card.Body>
          </Card>
          <br />
        </div>
      </div>
    );
  }
}

export default StudentIntruction;
