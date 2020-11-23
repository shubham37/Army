import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import axios from 'axios';

class StudentPIQForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: "",
      formFilled: false,
      id: null,
      oir : "",
      selection_board : "",
      batch : "",
      chest : "",
      roll_no : "",
      name : "",
      father : "",
      maximum_residence : "",
      present_residence : "",
      permanent_residence : "",
      district_hq : "",
      state_district : "",
      religion : "",
      cast : "",
      mother_tongue : "",
      dob : "",
      marital_status : "",
      parents_alive : "",
      age_at_time_death : "",

      father_education : "",
      father_occupation : "",
      father_income : "",

      mother_education : "",
      mother_occupation : "",
      mother_income : "",

      guardian_education : "",
      guardian_occupation : "",
      guardian_income : "",

      sibling1_education : "",
      sibling1_occupation : "",
      sibling1_income : "",

      sibling2_education : "",
      sibling2_occupation : "",
      sibling2_income : "",

      sibling3_education : "",
      sibling3_occupation : "",
      sibling3_income : "",

      institute_matric : "",
      institute_secondary : "",
      institute_graduation : "",
      institute_pg : "",

      university_matric : "",
      university_secondary : "",
      university_graduation : "",
      university_pg : "",

      year_matric : "",
      year_secondary : "",
      year_graduation : "",
      year_pg : "",

      div_matric : "",
      div_secondary : "",
      div_graduation : "",
      div_pg : "",

      medium_matric : "",
      medium_secondary : "",
      medium_graduation : "",
      medium_pg : "",

      scholar_matric : "",
      scholar_secondary : "",
      scholar_graduation : "",
      scholar_pg : "",

      achievement_matric : "",
      achievement_secondary : "",
      achievement_graduation : "",
      achievement_pg : "",

      age : "",
      height : "",
      weight : "",
      occupation : "",
      income : "",

      ncc : "",
      wing : "",
      training : "",
      division : "",
      certificate : "",

      game_name : "",
      game_duration : "",
      game_place : "",
      game_achievement : "",

      hobbies : "",

      extra_activity_name : "",
      extra_activity_duration : "",
      extra_activity_achievement : "",

      position : "",
      nature_of_commission : "",
      services : "",
      number_chances : "",

      interview_entry : "",
      interview_no_place : "",
      interview_date : "",
      interview_chest_batch : ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    var piq = JSON.parse(localStorage.getItem('piq'));
		if (piq && (piq !== undefined) && (piq !== null)) {
      this.setState({formFilled: true});
      Object.keys(piq).map((key) => (
        this.setState({[key] : piq[key]})
      ));
    }
  }

  handleSubmit() {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    };
    let params = {
      "oir": this.state.oir,
      "selection_board": this.state.selection_board,
      "batch": this.state.batch,
      "chest": this.state.chest,
      "roll_no": this.state.roll_no,
      "name": this.state.name,
      "father": this.state.father,
      "maximum_residence": this.state.maximum_residence,
      "present_residence": this.state.present_residence,
      "permanent_residence": this.state.permanent_residence,
      "district_hq": this.state.district_hq,
      "state_district": this.state.state_district,
      "religion": this.state.religion,
      "cast": this.state.cast,
      "mother_tongue": this.state.mother_tongue,
      "dob": this.state.dob,
      "marital_status": this.state.marital_status,
      "parents_alive": this.state.parents_alive,
      "age_at_time_death": this.state.age_at_time_death,
      "father_education": this.state.father_education,
      "father_occupation": this.state.father_occupation,
      "father_income": this.state.father_income,
      "mother_education": this.state.mother_education,
      "mother_occupation": this.state.mother_occupation,
      "mother_income": this.state.mother_income,
      "guardian_education": this.state.guardian_education,
      "guardian_occupation": this.state.guardian_occupation,
      "guardian_income": this.state.guardian_income,
      "sibling1_education": this.state.sibling1_education,
      "sibling1_occupation": this.state.sibling1_occupation,
      "sibling1_income": this.state.sibling1_income,
      "sibling2_education": this.state.sibling2_education,
      "sibling2_occupation": this.state.sibling2_occupation,
      "sibling2_income": this.state.sibling2_income,
      "sibling3_education": this.state.sibling3_education,
      "sibling3_occupation": this.state.sibling3_occupation,
      "sibling3_income": this.state.sibling3_income,
      "institute_matric": this.state.institute_matric,
      "institute_secondary": this.state.institute_secondary,
      "institute_graduation": this.state.institute_graduation,
      "institute_pg": this.state.institute_pg,
      "university_matric": this.state.university_matric,
      "university_secondary": this.state.university_secondary,
      "university_graduation": this.state.university_graduation,
      "university_pg": this.state.university_pg,
      "year_matric": this.state.year_matric,
      "year_secondary": this.state.year_secondary,
      "year_graduation": this.state.year_graduation,
      "year_pg": this.state.year_pg,
      "div_matric": this.state.div_matric,
      "div_secondary": this.state.div_secondary,
      "div_graduation": this.state.div_graduation,
      "div_pg": this.state.div_pg,
      "medium_matric": this.state.medium_matric,
      "medium_secondary": this.state.medium_secondary,
      "medium_graduation": this.state.medium_graduation,
      "medium_pg": this.state.medium_pg,
      "scholar_matric": this.state.scholar_matric,
      "scholar_secondary": this.state.scholar_secondary,
      "scholar_graduation": this.state.scholar_graduation,
      "scholar_pg": this.state.scholar_pg,
      "achievement_matric": this.state.achievement_matric,
      "achievement_secondary": this.state.achievement_secondary,
      "achievement_graduation": this.state.achievement_graduation,
      "achievement_pg": this.state.achievement_pg,
      "age": this.state.age,
      "height": this.state.height,
      "weight": this.state.weight,
      "occupation": this.state.occupation,
      "income": this.state.income,
      "ncc": this.state.ncc,
      "wing": this.state.wing,
      "training": this.state.training,
      "division": this.state.division,
      "certificate": this.state.certificate,
      "game_name": this.state.game_name,
      "game_duration": this.state.game_duration,
      "game_place": this.state.game_place,
      "game_achievement": this.state.game_achievement,
      "hobbies": this.state.hobbies,
      "extra_activity_name": this.state.extra_activity_name,
      "extra_activity_duration": this.state.extra_activity_duration,
      "extra_activity_achievement": this.state.extra_activity_achievement,
      "position": this.state.position,
      "nature_of_commission": this.state.nature_of_commission,
      "services": this.state.services,
      "number_chances": this.state.number_chances,
      "interview_entry": this.state.interview_entry,
      "interview_no_place": this.state.interview_no_place,
      "interview_date": this.state.interview_date,
      "interview_chest_batch": this.state.interview_chest_batch

    }

    if (this.state.formFilled) {
      axios.post(`/student_api/piq/${this.state.id}/update_form/`,
      {
        params
      },
      {
        headers: headers
      }
      )
      .then((data) => {
        if (data.status === 202) {
          this.setState({message: "PIQ Form Update."});
          window.location.reload(true);
        } else {
          this.setState({message: "There Is some Problem, Please try Again."})
        }
      })
      .catch((error) =>  {
        this.setState({message: error.message});
        console.log(error.message)
      });
    } else {
      axios.post(`/student_api/piq/add_form/`,
      {
        params
      },
      {
        headers: headers
      }
      )
      .then((data) => {
        this.setState({formFilled: true, message:"PIQ Form Saved."});        
        window.location.reload(true);
      })
      .catch((error) =>  {
        this.setState({message: error.message});
          console.log(error.message)
      });
    }
  }

  render() {
    return (
      <div className="row container-fluid">
        <div className='col'>
          <Card>
            <Card.Header>PIQ Form</Card.Header>
            <Card.Body>
              <button className="btn btn-danger" data-toggle='modal' data-target='#piqForm' >Click to fill PIQ Form</button>
              <div class="modal fade bd-example-modal-lg" id="piqForm" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div id='piqform'>
                        <p style={{textAlign: 'center', fontWeight: 'bolder', fontSize:'smaller'}}>CONFIDENTIAL</p>
                        <p style={{textAlign: 'right', fontWeight: 'lighter', fontSize:'smaller'}}>DIPR Questionnaire No. 107 - A (Revised)</p>
                        <p style={{textAlign: 'center', fontWeight: 'bolder', fontSize:'smaller'}}>PERSONAL INFORMATION QUESTIONNAIRE</p>
                        <p>
                          <span className='float-right'><input type='text' style={{border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} name="oir" value={this.state.oir} onChange={(e) => this.setState({[e.target.name]: e.target.value})} /></span>
                          <span className='float-right' style={{fontWeight: 'lighter', fontSize:'smaller'}}>O.I.R.</span>
                        </p>
                        <br /><br />

                        <sup style={{fontWeight: 'bolder'}}>1.</sup>
                        <table style={{width:'100%', margin:'0', padding:'0'}} className="table table-bordered table-responsive-sm">
                          <thead>
                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Selection Board (No. & Place)</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Batch No.</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Chest No.</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>UPSC/Other Roll No.</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="selection_board" value={this.state.selection_board} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="batch" value={this.state.batch} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="chest" value={this.state.chest} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="roll_no" value={this.state.roll_no} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                        <div class='row'>
                          <div class='col-6'>
                            <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}>2.</span>Name in CAPITALS (As in the matriculation certificate)</p>
                          </div>
                          <div class='col-6'>
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="name" value={this.state.name} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>

                        <div class='row'>
                          <div class='col-6'>
                            <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}>3.</span>Father's Name</p>
                          </div>
                          <div class='col-6'>
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="father" value={this.state.father} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>

                        <div class='row'>
                          <div class='col-6'>
                            <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}>4. (a)</span>Place of Maximun Residence (Place, District, State)</p>
                          </div>
                          <div class='col-6'>
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="maximum_residence" value={this.state.maximum_residence} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>

                        <div class='row'>
                          <div class='col-6'>
                            <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'10px'}}> (b) </span>Place of Preset Residence (Place, District, State)</p>
                          </div>
                          <div class='col-6'>
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="present_residence" value={this.state.present_residence} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>

                        <div class='row'>
                          <div class='col-6'>
                            <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'10px'}}> (c) </span>Place of Permanent Residence (Place, District, State)</p>
                          </div>
                          <div class='col-6'>
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="permanent_residence" value={this.state.permanent_residence} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>

                        <div class='row'>
                          <div class='col-6'>
                            <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'10px'}}>  (d) </span>District HQ</p>
                          </div>
                          <div class='col-6'>
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="district_hq" value={this.state.district_hq} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>
                        <br />


                        <sup style={{fontWeight: 'bolder'}}>5. <span style={{fontWeight: 'lighter'}}>Fill in the details below</span></sup>
                        <table style={{width:'100%', margin:'0', padding:'0'}} className="table table-bordered table-md table-responsive">
                          <thead>
                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>State & District</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Religion</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>SC / ST / OBC</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Mother Tongue</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Date of Birth</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Married/ Single / Widower / Wido</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="state_district" value={this.state.state_district} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="religion" value={this.state.religion} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="cast" value={this.state.cast} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="mother_tongue" value={this.state.mother_tongue} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="dob" value={this.state.dob} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="marital_status" value={this.state.marital_status} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>
                          </tbody>
                        </table>
                        <br />

                        <div class='row'>
                          <div class='col-6'>
                          <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}>6. (a) </span>Parents Alive</p>
                          </div>
                          <div class='col-6'>
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="parents_alive" value={this.state.parents_alive} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>

                        <div class='row'>
                          <div class='col-6'>
                          <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginLeft:'10px', marginRight:'5px'}}>(b) </span>If not alive, your age at the time of Mother/Father Death</p>
                          </div>
                          <div class='col-6'>
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="age_at_time_death" value={this.state.age_at_time_death} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>

                        <sup><span style={{fontWeight: 'bolder', marginLeft: '10px', marginRight:'5px'}}> (c) </span> Parents/Guardians and Siblings  Occupation/income</sup>
                        <table style={{width:'100%', margin:'0', padding:'0'}} className="table table-bordered table-responsive-sm">
                          <thead>
                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Particulars</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Education</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Occupation</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Income per month</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Father</th>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="father_education" value={this.state.father_education} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="father_occupation" value={this.state.father_occupation} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="father_income" value={this.state.father_income} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>

                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Mother</th>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="mother_education" value={this.state.mother_education} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="mother_occupation" value={this.state.mother_occupation} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="mother_income" value={this.state.mother_income} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>

                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Guardian</th>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="guardian_education" value={this.state.guardian_education} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="guardian_occupation" value={this.state.guardian_occupation} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="guardian_income" value={this.state.guardian_income} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>

                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Elder Brother / Sister</th>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="sibling1_education" value={this.state.sibling1_education} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="sibling1_occupation" value={this.state.sibling1_occupation} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="sibling1_income" value={this.state.sibling1_income} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>

                            <tr>
                            <th style={{ fontSize:'smaller', color:'#383838'}}>Elder Brother / Sister</th>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="sibling2_education" value={this.state.sibling2_education} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="sibling2_occupation" value={this.state.sibling2_occupation} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="sibling2_income" value={this.state.sibling2_income} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>

                            <tr>
                            <th style={{ fontSize:'smaller', color:'#383838'}}>Elder Brother / Sister</th>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="sibling3_education" value={this.state.sibling3_education} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="sibling3_occupation" value={this.state.sibling3_occupation} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="sibling3_income" value={this.state.sibling3_income} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>

                          </tbody>
                        </table>
                        <br />

                        <sup style={{fontWeight: 'bolder'}}> 7. <span style={{fontWeight: 'lighter'}}>Educational Record</span></sup>
                        <table style={{width:'100%', margin:'0', padding:'0'}} className="table table-bordered table-responsive">
                          <thead>
                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Qualification acquired</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Name of Institution</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Board/University</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Year</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Div & Marks %</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Medium of Instruction</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Boarder/ Day Scholar</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Outstanding Achievement, if any</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Matric/ Hr. Sec.</th>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="institute_matric" value={this.state.institute_matric} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="university_matric" value={this.state.university_matric} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="year_matric" value={this.state.year_matric} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="div_matric" value={this.state.div_matric} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="medium_matric" value={this.state.medium_matric} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="scholar_matric" value={this.state.scholar_matric} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="achievement_matric" value={this.state.achievement_matric} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>

                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>10+2 Equivalent</th>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="institute_secondary" value={this.state.institute_secondary} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="university_secondary" value={this.state.university_secondary} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="year_secondary" value={this.state.year_secondary} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="div_secondary" value={this.state.div_secondary} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="medium_secondary" value={this.state.medium_secondary} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="scholar_secondary" value={this.state.scholar_secondary} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="achievement_secondary" value={this.state.achievement_secondary} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>

                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Graduation</th>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="institute_graduation" value={this.state.institute_graduation} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="university_graduation" value={this.state.university_graduation} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="year_graduation" value={this.state.year_graduation} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="div_graduation" value={this.state.div_graduation} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="medium_graduation" value={this.state.medium_graduation} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="scholar_graduation" value={this.state.scholar_graduation} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="achievement_graduation" value={this.state.achievement_graduation} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>

                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Post Graduation /<br /> Professional</th>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="institute_pg" value={this.state.institute_pg} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="university_pg" value={this.state.university_pg} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="year_pg" value={this.state.year_pg} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="div_pg" value={this.state.div_pg} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="medium_pg" value={this.state.medium_pg} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="scholar_pg" value={this.state.scholar_pg} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text'  name="achievement_pg" value={this.state.achievement_pg} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>
                          </tbody>
                        </table>
                        <br />

                        {/* PAGE 2 Content */}
                        <sup style={{fontWeight: 'bolder'}}> 8. </sup>
                        <div class='row'>
                          <div class='col'>
                            <sup>Age (Years & Months)</sup><br />
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="age" value={this.state.age} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                          <div class='col'>
                            <sup>Height (in Metre)</sup><br />
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="height" value={this.state.height} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                          <div class='col'>
                            <sup>Weight (in Kilogram)</sup><br />
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="weight" value={this.state.weight} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>
                        <br />

                        <sup style={{fontWeight: 'bolder'}}> 9. </sup>
                        <div class='row'>
                          <div class='col'>
                            <sup>Present Occupation</sup><br />
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="occupation" value={this.state.occupation} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                          <div class='col'>
                            <sup>Personal monthly income</sup><br />
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="income" value={this.state.income} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>
                        <br />

                        <sup style={{fontWeight: 'bolder'}}> 10. </sup>
                        <div class='row'>
                          <div class='col'>
                            <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}> (a) </span>N.C.C. Training</p>
                          </div>
                          <div class='col'>
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="ncc" value={this.state.ncc} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>


                        <sup style={{ marginRight:'5px'}}><b>(b)</b> If Yes, Total Training</sup>
                        <table style={{width:'100%', margin:'0', padding:'0'}} className="table table-bordered table-responsive-sm">
                          <thead>
                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Total Training</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Wing</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Division</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Certificate Obtained</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="training" value={this.state.training} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="wing" value={this.state.wing} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="division" value={this.state.division} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="certificate" value={this.state.certificate} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>
                          </tbody>
                        </table>
                        <br />

                        <sup style={{fontWeight: 'bolder'}}><b>11.</b></sup>
                        <sup style={{ margin:'0 5px'}}><b>(a)</b> Participation in Games & Sports</sup>
                        <table style={{width:'100%', margin:'0', padding:'0'}} className="table table-bordered table-responsive-sm">
                          <thead>
                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Games / Sports</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Period of Participation</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>School / College / University</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Outstanding Achievement, if any</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="game_name" value={this.state.game_name} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="game_duration" value={this.state.game_duration} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="game_place" value={this.state.game_place} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="game_achievement" value={this.state.game_achievement} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>
                          </tbody>
                        </table>
                        <br />

                        <div class='row'>
                          <div class='col'>
                            <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}> (b) </span>Hobbies / Interest</p>
                          </div>
                          <div class='col'>
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="hobbies" value={this.state.hobbies} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>


                        <sup><b>(c)</b> Participation in extra-curricular, activities</sup>
                        <table style={{width:'100%', margin:'0', padding:'0'}} className="table table-bordered table-responsive-sm">
                          <thead>
                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Name of the activity group</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Duration of Participation</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Outstanding Achievement, if any</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="extra_activity_name" value={this.state.extra_activity_name} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="extra_activity_duration" value={this.state.extra_activity_duration} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="extra_activity_achievement" value={this.state.extra_activity_achievement} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>
                          </tbody>
                        </table>
                        <br />


                        <div class='row'>
                          <div class='col'>
                            <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}> (d) </span>Position of responsibblity/ Offices held in NCC/ Scouting Sports Tem</p>
                          </div>
                          <div class='col'>
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="position" value={this.state.position} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>
                        <br />


                        <div class='row'>
                          <div class='col'>
                            <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}>12. (a) </span>Nature of Commission</p>
                          </div>
                          <div class='col'>
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="nature_of_commission" value={this.state.nature_of_commission} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>


                        <div class='row'>
                          <div class='col'>
                            <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}> (b) </span>Choice of Service</p>
                          </div>
                          <div class='col'>
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="services" value={this.state.services} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>
                        <br />

                        <div class='row'>
                          <div class='col'>
                            <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}>13. </span>Number of chances availed for commission in all three Services</p>
                          </div>
                          <div class='col'>
                            <input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="number_chances" value={this.state.number_chances} onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                          </div>
                        </div>
                        <br />

                        <sup style={{fontWeight: 'bolder'}}><b>14.</b> <span style={{fontWeight: 'lighter', marginLeft:'5px'}}>Details of all previos interviews, if any(Army/ Navy/Air Force Selection Boards)</span></sup>
                        <table style={{width:'100%', margin:'0', padding:'0'}} className="table table-bordered table-responsive-sm">
                          <thead>
                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Sr No.</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Type of Entry</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>SSB No. & Place</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Date</th>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>Chest No./ Batch No.</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th style={{ fontSize:'smaller', color:'#383838'}}>1</th>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="interview_entry" value={this.state.interview_entry} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="interview_no_place" value={this.state.interview_no_place} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="interview_date" value={this.state.interview_date} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                              <td><input style={{width: '100%', border:'none', borderBottom: '1px solid rgba(10,10,10,0.2)'}} type='text' name="interview_chest_batch" value={this.state.interview_chest_batch} onChange={(event) => this.setState({[event.target.name]: event.target.value})} /></td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                      </div>
                   </div>
                    <div class="modal-footer">
                      <span style={{fontSize: 'small', fontWeight: 'bolder'}}>{this.state.message}</span>
                      <ButtonComponent data-dismiss="modal">Close</ButtonComponent>
                      <ButtonComponent onClick={(e) => this.handleSubmit()}>{this.state.formFilled ? "Update" : "Save"}</ButtonComponent>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <br />
        </div>
      </div>
    );
  }
}

export default StudentPIQForm;
