import React, { Component } from 'react';
import axios from 'axios'
import { Accordion, Card } from 'react-bootstrap'


class AssessorInstruction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      instructions : '',
      id: ''
    }
    this.updatecontent = this.updatecontent.bind(this);
  }

  componentWillMount() {
    const token = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    };

    axios.get(`/assessor_api/instructions/`, {
      headers : headers
    })
    .then((data) => {
      if (data.data.is_success) {
        this.setState({instructions:data.data.instruction.instruction, id: data.data.instruction.id});
      } else {
        this.setState({instructions:''});
      }
    })
    .catch((error) => {
      this.setState({instructions:''});
    });
  }

  updatecontent = (e) => {
    const token = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    };

    axios.post(`/assessor_api/instructions/add_update/`, {
      id: this.state.id,
      instruction: this.state.instructions
    },
    {
      headers : headers
    })
    .then((data) => {
      if (data.status == 200) {
        console.log("Data Updated");
    }
    }).catch((error) => console.log(error))
  }

  render() {
    return (
      <div className='container-fluid'>
        <hr />
        <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Instructions
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="row" style={{height: '500px', width: '100%', textAlign: 'center'}}>
                    <div className='col'>
                      <textarea placeholder='Write Your Instruction Here...' style={{width:'100%', height: '70%'}} value={this.state.instructions} onChange={(e) => {this.setState({instructions: e.target.value})}}></textarea><br /><br />
                      <button onClick={(e) => {this.updatecontent(e)}} style={{padding: '1% 3%', border:'none', fontWeight: 'bolder', fontSize: 'larger', backgroundColor: 'rgb(260, 160, 0)', color: 'white'}}>Submit</button><br />
                      <p className='float-right' style={{fontSize: 'small', color: 'gray'}}>** This Instructions For All Assigned Student</p>
                    </div>

                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

        <br />
      </div>
    );
  }
}

export default AssessorInstruction;
