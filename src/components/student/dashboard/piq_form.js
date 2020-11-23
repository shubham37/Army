import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import 'jspdf-autotable';
import Html2Pdf from 'js-html2pdf';
import axios from 'axios';


class StudentDashboardPIQ extends Component {

  constructor(props) {
    super(props);

    this.state = {
      formFilled: true,
      selection_board: '',
      is_spinner_hidden: true,
      state: '',
      is_data: false,
      formData: {}
    }

    this.convetToPDF = this.convetToPDF.bind(this);
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    };

    axios.get(`/student_api/piq/`,
    {
      headers: headers
    }
    )
    .then((data) => {
      if (data.data.is_data) {
        this.setState({
          is_data: true,
          formData: data.data.piq_form
        })
        localStorage.setItem('piq', JSON.stringify(this.state.formData));
      }
    })
    .catch((error) => {
      console.log(error.message);
    })
  }

  convetToPDF() {
    this.setState({ is_spinner_hidden: false });
    var options = {
      filename: 'file.pdf'
    };

    var data = document.getElementById('piqform');
    var exporter = new Html2Pdf(data, options);
    exporter.getPdf(true).then((pdf) => {
      this.setState({ 
        is_spinner_hidden: true,
        status : 'Pdf Downloaded Successfully.'
      });
      window.location.reload(true);
    });
  }

  render() {
    return (
      <div class="container-fluid">
      {
        this.state.is_data 
        ?
        <div> 
        <div class='row'>
          <div class='col'>
            <p hidden={this.state.status ? false : true} style={{textAlign: 'center', fontWeight: 'bolder', fontSize: 'larger'}}>{this.state.status}</p>
            <button className='float-right' style={{ border: 'none', padding: '1% 2%', fontSize: 'medium',
             fontWeight:'bolder', color:'white', backgroundColor:'rgb(260,160,0)'}} onClick={(e) => this.convetToPDF()}>
               <span><Spinner animation='border' hidden={this.state.is_spinner_hidden} /></span>
               <span hidden={!this.state.is_spinner_hidden}>DOWNLOAD</span>
            </button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col" style={{width:'100%'}}>
            <Card body> 
                <div id='piqform'>
                <p style={{textAlign: 'center', fontWeight: 'bolder', fontSize:'smaller'}}>CONFIDENTIAL</p>
                <p style={{textAlign: 'right', fontWeight: 'lighter', fontSize:'smaller'}}>DIPR Questionnaire No. 107 - A (Revised)</p>
                <p style={{textAlign: 'center', fontWeight: 'bolder', fontSize:'smaller'}}>PERSONAL INFORMATION QUESTIONNAIRE</p>
                <p>
                  <span className='float-right' style={{paddingLeft:'1%'}}>{this.state.formData.oir || "NIL"}</span>
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
                      <td>{this.state.formData.selection_board || "NIL"}</td>
                      <td>{this.state.formData.batch || "NIL"}</td>
                      <td>{this.state.formData.chest || "NIL"}</td>
                      <td>{this.state.formData.roll_no || "NIL"}</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <div class='row'>
                  <div class='col-6'>
                    <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}>2.</span>Name in CAPITALS (As in the matriculation certificate)</p>
                  </div>
                  <div class='col-6'>
                    <sup>{this.state.formData.name || "NIL"}</sup>
                  </div>
                </div>

                <div class='row'>
                  <div class='col-6'>
                    <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}>3.</span>Father's Name</p>
                  </div>
                  <div class='col-6'>
                    <sup>{this.state.formData.father || "NIL"}</sup>
                  </div>
                </div>

                <div class='row'>
                  <div class='col-6'>
                    <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}>4. (a)</span>Place of Maximun Residence (Place, District, State)</p>
                  </div>
                  <div class='col-6'>
                    <sup>{this.state.formData.maximum_residence || "NIL"}</sup>
                  </div>
                </div>

                <div class='row'>
                  <div class='col-6'>
                    <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'10px'}}> (b) </span>Place of Preset Residence (Place, District, State)</p>
                  </div>
                  <div class='col-6'>
                    <sup>{this.state.formData.present_residence || "NIL"}</sup>
                  </div>
                </div>

                <div class='row'>
                  <div class='col-6'>
                    <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'10px'}}> (c) </span>Place of Permanent Residence (Place, District, State)</p>
                  </div>
                  <div class='col-6'>
                    <sup>{this.state.formData.permanent_residence || "NIL"}</sup>
                  </div>
                </div>

                <div class='row'>
                  <div class='col-6'>
                    <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'10px'}}>  (d) </span>District HQ</p>
                  </div>
                  <div class='col-6'>
                    <sup>{this.state.formData.district_hq || "NIL"}</sup>
                  </div>
                </div>
                <br />


                <sup style={{fontWeight: 'bolder'}}>5. <span style={{fontWeight: 'lighter'}}>Fill in the details below</span></sup>
                <table style={{width:'100%', margin:'0', padding:'0'}} className="table table-bordered table-responsive-sm">
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
                      <td>{this.state.formData.state_district || "NIL"}</td>
                      <td>{this.state.formData.religion || "NIL"}</td>
                      <td>{this.state.formData.cast || "NIL"}</td>
                      <td>{this.state.formData.mother_tongue || "NIL"}</td>
                      <td>{this.state.formData.dob || "NIL"}</td>
                      <td>{this.state.formData.marital_status || "NIL"}</td>
                    </tr>
                  </tbody>
                </table>
                <br />

                <div class='row'>
                  <div class='col-6'>
                  <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}>6. (a) </span>Parents Alive</p>
                  </div>
                  <div class='col-6'>
                    <sup>{this.state.formData.parents_alive || "NIL"}</sup>
                  </div>
                </div>

                <div class='row'>
                  <div class='col-6'>
                  <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginLeft:'10px', marginRight:'5px'}}>(b) </span>If not alive, your age at the time of Mother/Father Death</p>
                  </div>
                  <div class='col-6'>
                    <sup>{this.state.formData.age_at_time_death || "NIL"}</sup>
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
                      <td>{this.state.formData.father_education || "NIL"}</td>
                      <td>{this.state.formData.father_occupation || "NIL"}</td>
                      <td>{this.state.formData.father_income || "NIL"}</td>
                    </tr>

                    <tr>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Mother</th>
                      <td>{this.state.formData.mother_education || "NIL"}</td>
                      <td>{this.state.formData.mother_occupation || "NIL"}</td>
                      <td>{this.state.formData.mother_income || "NIL"}</td>
                    </tr>

                    <tr>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Guardian</th>
                      <td>{this.state.formData.guardian_education || "NIL"}</td>
                      <td>{this.state.formData.guardian_occupation || "NIL"}</td>
                      <td>{this.state.formData.guardian_income || "NIL"}</td>
                    </tr>

                    <tr>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Elder Brother / Sister</th>
                      <td>{this.state.formData.sibling1_education || "NIL"}</td>
                      <td>{this.state.formData.sibling1_occupation || "NIL"}</td>
                      <td>{this.state.formData.sibling1_income || "NIL"}</td>
                    </tr>

                    <tr>
                    <th style={{ fontSize:'smaller', color:'#383838'}}>Elder Brother / Sister</th>
                      <td>{this.state.formData.sibling2_education || "NIL"}</td>
                      <td>{this.state.formData.sibling2_occupation || "NIL"}</td>
                      <td>{this.state.formData.sibling2_income || "NIL"}</td>
                    </tr>

                    <tr>
                    <th style={{ fontSize:'smaller', color:'#383838'}}>Elder Brother / Sister</th>
                      <td>{this.state.formData.sibling3_education || "NIL"}</td>
                      <td>{this.state.formData.sibling3_occupation || "NIL"}</td>
                      <td>{this.state.formData.sibling3_income || "NIL"}</td>
                    </tr>

                  </tbody>
                </table>
                <br />

                <sup style={{fontWeight: 'bolder'}}> 7. <span style={{fontWeight: 'lighter'}}>Educational Record</span></sup>
                <table style={{width:'100%', margin:'0', padding:'0'}} className="table table-bordered table-responsive-sm">
                  <thead>
                    <tr>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Qualification acquired</th>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Name of Institution</th>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Board/University</th>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Year</th>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Div & Marks %</th>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Mediom of Instruction</th>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Boarder/ Day Scholar</th>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Outstanding Achievement, if any</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Matric/ Hr. Sec.</th>
                      <td>{this.state.formData.institute_matric || "NIL"}</td>
                      <td>{this.state.formData.university_matric || "NIL"}</td>
                      <td>{this.state.formData.year_matric || "NIL"}</td>
                      <td>{this.state.formData.div_matric || "NIL"}</td>
                      <td>{this.state.formData.medium_matric || "NIL"}</td>
                      <td>{this.state.formData.scholar_matric || "NIL"}</td>
                      <td>{this.state.formData.achievement_matric || "NIL"}</td>
                    </tr>

                    <tr>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>10+2 Equivalent</th>
                      <td>{this.state.formData.institute_secondary || "NIL"}</td>
                      <td>{this.state.formData.university_secondary || "NIL"}</td>
                      <td>{this.state.formData.year_secondary || "NIL"}</td>
                      <td>{this.state.formData.div_secondary || "NIL"}</td>
                      <td>{this.state.formData.medium_secondary || "NIL"}</td>
                      <td>{this.state.formData.scholar_secondary || "NIL"}</td>
                      <td>{this.state.formData.achievement_secondary || "NIL"}</td>
                    </tr>

                    <tr>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Graduation</th>
                      <td>{this.state.formData.institute_graduation || "NIL"}</td>
                      <td>{this.state.formData.university_graduation || "NIL"}</td>
                      <td>{this.state.formData.year_graduation || "NIL"}</td>
                      <td>{this.state.formData.div_graduation || "NIL"}</td>
                      <td>{this.state.formData.medium_graduation || "NIL"}</td>
                      <td>{this.state.formData.scholar_graduation || "NIL"}</td>
                      <td>{this.state.formData.achievement_graduation || "NIL"}</td>
                    </tr>

                    <tr>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Post Graduation /<br /> Professional</th>
                      <td>{this.state.formData.institute_pg || "NIL"}</td>
                      <td>{this.state.formData.university_pg || "NIL"}</td>
                      <td>{this.state.formData.year_pg || "NIL"}</td>
                      <td>{this.state.formData.div_pg || "NIL"}</td>
                      <td>{this.state.formData.medium_pg || "NIL"}</td>
                      <td>{this.state.formData.scholar_pg || "NIL"}</td>
                      <td>{this.state.formData.achievement_pg || "NIL"}</td>
                    </tr>
                  </tbody>
                </table>
                <br />

                {/* PAGE 2 Content */}
                <sup style={{fontWeight: 'bolder'}}> 8. </sup>
                <div class='row'>
                  <div class='col'>
                    <sup>Age (Years & Months)</sup><br />
                    <sup>{this.state.formData.age || "NIL"}</sup>
                  </div>
                  <div class='col'>
                    <sup>Height (in Metre)</sup><br />
                    <sup>{this.state.formData.height || "NIL"}</sup>
                  </div>
                  <div class='col'>
                    <sup>Weight (in Kilogram)</sup><br />
                    <sup>{this.state.formData.weight || "NIL"}</sup>
                  </div>
                </div>
                <br />

                <sup style={{fontWeight: 'bolder'}}> 9. </sup>
                <div class='row'>
                  <div class='col'>
                    <sup>Present Occupation</sup><br />
                    <sup>{this.state.formData.occupation || "NIL"}</sup>
                  </div>
                  <div class='col'>
                    <sup>Personal monthly income</sup><br />
                    <sup>{this.state.formData.income || "NIL"}</sup>
                  </div>
                </div>
                <br />

                <sup style={{fontWeight: 'bolder'}}> 10. </sup>
                <div class='row'>
                  <div class='col'>
                    <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}> (a) </span>N.C.C. Training</p>
                  </div>
                  <div class='col'>
                    <sup>{this.state.formData.ncc || "NIL"}</sup>
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
                      <td><sup>{this.state.formData.training || "NIL"}</sup></td>
                      <td><sup>{this.state.formData.wing || "NIL"}</sup></td>
                      <td><sup>{this.state.formData.division || "NIL"}</sup></td>
                      <td><sup>{this.state.formData.certificate || "NIL"}</sup></td>
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
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Perios of Participation</th>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>School / College / University</th>
                      <th style={{ fontSize:'smaller', color:'#383838'}}>Outstanding Achievement, if any</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><sup>{this.state.formData.game_name || "NIL"}</sup></td>
                      <td><sup>{this.state.formData.game_duration || "NIL"}</sup></td>
                      <td><sup>{this.state.formData.game_place || "NIL"}</sup></td>
                      <td><sup>{this.state.formData.game_achievement || "NIL"}</sup></td>
                    </tr>
                  </tbody>
                </table>
                <br />

                <div class='row'>
                  <div class='col'>
                    <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}> (b) </span>Hobbies / Interest</p>
                  </div>
                  <div class='col'>
                    <sup>{this.state.formData.hobbies || "NIL"}</sup>
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
                      <td><sup>{this.state.formData.extra_activity_name || "NIL"}</sup></td>
                      <td><sup>{this.state.formData.extra_activity_duration || "NIL"}</sup></td>
                      <td><sup>{this.state.formData.extra_activity_achievement || "NIL"}</sup></td>
                    </tr>
                  </tbody>
                </table>
                <br />


                <div class='row'>
                  <div class='col'>
                    <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}> (d) </span>Position of responsibblity/ Offices held in NCC/ Scouting Sports Tem</p>
                  </div>
                  <div class='col'>
                    <sup>{this.state.formData.position || "NIL"}</sup>
                  </div>
                </div>
                <br />


                <div class='row'>
                  <div class='col'>
                    <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}>12. (a) </span>Nature of Commission</p>
                  </div>
                  <div class='col'>
                    <sup>{this.state.formData.nature_of_commission || "NIL"}</sup>
                  </div>
                </div>


                <div class='row'>
                  <div class='col'>
                    <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}> (b) </span>Choice of Service</p>
                  </div>
                  <div class='col'>
                    <sup>{this.state.formData.services || "NIL"}</sup>
                  </div>
                </div>
                <br />

                <div class='row'>
                  <div class='col'>
                    <p style={{fontSize:'smaller'}}><span style={{fontWeight: 'bolder', marginRight:'5px'}}>13. </span>Number of chances availed for commission in all three Services</p>
                  </div>
                  <div class='col'>
                    <sup>{this.state.formData.number_chances || "NIL"}</sup>
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
                      <td><sup>1</sup></td>
                      <td><sup>{this.state.formData.interview_entry || "NIL"}</sup></td>
                      <td><sup>{this.state.formData.interview_no_place || "NIL"}</sup></td>
                      <td><sup>{this.state.formData.interview_date || "NIL"}</sup></td>
                      <td><sup>{this.state.formData.interview_chest_batch || "NIL"}</sup></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
            <br />
          </div>
        </div>
        </div>
      :
      <div>
        <p>PIQ Form Not Filled.</p>
      </div>
    }
    </div>
    );
  }
}

export default StudentDashboardPIQ;
