import React, { Component } from 'react';
import axios from 'axios'
import { Accordion, Card } from 'react-bootstrap'
import EditIcon from '@material-ui/icons/Edit';


class AssessorInstruction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      instructions : [],
      text: ''
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
        var local_ins = []
        data.data.streams.map((instruction) => {
          local_ins.push({
            'student': instruction.student.id,
            'student_name': instruction.student.first_name,
            'student_gender': instruction.student.gender===1?'Male':'FEMALE',
            'text': ''
          })
        })

        this.setState({instructions:local_ins});
      } else {
        this.setState({instructions:[]});
      }
    })
    .catch((error) => {
      this.setState({instructions:[]});
    });
  }

  updatecontent = (e, id) => {
    console.log(id)
  }

  changecontent = (e, id) => {
    console.log(id)
  }

  render() {
    const instructions = (
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Instructions
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="row">
                {this.state.instructions.map((instruction) => (
                  <div className="col" name={instruction.id}>
                    <h4>{instruction.student_name} - {instruction.student_gender}</h4>
                    <p><button onClick={(e) => {this.updatecontent(e, instruction)}}>Update </button></p>
                    <textarea placeholder='Instruction Mention Here...' onChange={(e) => {this.changecontent(e, instruction.student)}}></textarea>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
    return (
      <div className='row container-fluid'>
        <div className='col'>
          <hr />
          {this.state.instructions.length > 0
          ? instructions :
          <div>No Data Found</div>
          }
          <br />
        </div>
      </div>
    );
  }
}

export default AssessorInstruction;
