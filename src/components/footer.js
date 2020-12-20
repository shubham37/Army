import React, { Component } from 'react';
import '../assets/css/footer.css'
import { Spinner, Button, Modal } from 'react-bootstrap'
import axios from 'axios'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      is_spinner_hidden: true,
      action_info:'',
      name: '',
      mobile: '',
      query: ''
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleShow() {
    this.setState({
      show: true
    })
  }

  handleClose() {
    this.setState({
      show: false
    })
  }

  submit (e) {
    e.preventDefault();
    this.setState({
      is_spinner_hidden: false,
      action_info: 'Sending'
    })

    const uploadForm = new FormData();
    uploadForm.append('name', this.state.name);
    uploadForm.append('number', this.state.mobile);
    uploadForm.append('query', this.state.query);

    axios.post(`/api/made_query/`,uploadForm)
    .then((data) =>{
        this.setState({
          is_spinner_hidden: true,
          action_info: 'Done! Our Team Will Contact You Soon.',
          name: '',
          mobile: '',
          query: ''
        })
    })
    .catch((error) => {
      this.setState({
        is_spinner_hidden: true,
        action_info: 'Please Try Again'
      })
    });
  }


  render() {
    return (
      <div className="Footer">
        <div className="row">
          <div className="col-md-3 col-3 col-s-3" style={{ textAlign: 'center'}}>
            <a href='/'>
              <img src={require('../assets/images/indianarmy.jpg')} className='img-responsive float-left civil' alt='...' />
              <p>JOIN ARMY</p>
            </a>
          </div>
          <div className="col-md-3 col-3 col-s-3" style={{textAlign: 'center'}}>
            <a href='/'>
              <img src={require('../assets/images/airforce.jpeg')} className='img-responsive float-left civil' alt='...' />
              <p>JOIN AIRFORCE</p>
            </a>
          </div>
          <div className="col-md-3 col-3 col-s-3" style={{textAlign: 'center'}}>
            <a href='/'>
              <img src={require('../assets/images/navy.jpg')} className='img-responsive float-left civil' alt='...' />
              <p>JOIN NAVY</p>
            </a>
          </div>
          <div className="col-md-3 col-3 col-s-3" style={{textAlign: 'center'}}>
            <a href='/'>
              <img src={require('../assets/images/coast_guard.png')} className='img-responsive float-left civil' alt='...' />
              <p>JOIN COST GUARD</p>
            </a>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <ul>
              <li><a href='https://facebook.com'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                </a></li>
              <li><a href='https://twitter.com'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>                
                </a></li>
              <li><a href='https://youtube.com'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-youtube" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                </svg>                
                </a></li>
              <li><a href='https://linkedin.com'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212h-2.4s.03-6.547 0-7.225h2.4v1.023a5.54 5.54 0 0 0-.016.025h.016v-.025c.32-.493.89-1.193 2.165-1.193 1.58 0 2.764 1.033 2.764 3.252v4.143h-2.4V9.529c0-.972-.348-1.634-1.217-1.634-.664 0-1.059.447-1.233.878-.063.154-.079.37-.079.586v4.035z"/>
                </svg>
                </a></li>
            </ul>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <Button className='made' variant="alert" onClick={(e) => this.handleShow()}>Made By Team</Button>
          </div>
        </div>

        <Modal show={this.state.show} onHide={(e) => this.handleClose()}>
          <Modal.Header>
            <div style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: 'larger' }}>
                Contact Us For Any Technical Help
            </div>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.submit}>
              <div className='row'>
                <div className='col'>
                  <label for='customer_name'>Name</label>
                  <input type='text' placeholder='Full Name' id='customer_name' value={this.state.name} pattern='^([A-Za-z]).{4,}$' 
                  title='Atleast 8 character' onChange={(e) => this.setState({name: e.target.value})} required />
                </div>
              </div>
              <br />
              <div className='row'>
                <div className='col'>
                <label for='customer_number'>Phone Number</label>
                  <input type='text' placeholder='Phone Number' id='customer_number' value={this.state.mobile} pattern="^\d{10}$"
                  title='Should Be 10 Digit' onChange={(e) => this.setState({mobile: e.target.value})} required />
                </div>
              </div>
              <br />
              <div className='row'>
                <div className='col'>
                <label for='customer_query'>Message</label>
                  <textarea ros='5' placeholder='Explain Your Query Here ...' value={this.state.query} onChange={(e) => this.setState({query: e.target.value})}></textarea>
                </div>
              </div>
              <br />
              <p style={{ textAlign: 'center'}}>
                <button type='submit' class='btn btn-danger' style={{ width: '100%' }}>
                  <span hidden={!this.state.is_spinner_hidden}>Send</span>
                  <span hidden={this.state.is_spinner_hidden}><Spinner animation='border' /></span>
                </button><br /><br />
                <span hidden={this.state.action_info?false:true}>{this.state.action_info}</span>
              </p>
            </form>
          </Modal.Body>
        </Modal>

      </div>
    );
  }
}

export default Footer;
