import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/header.js';
import Footer from './components/footer.js'
import StudentMain from './components/student/student_main.js'
import FreeTestInstruction from './components/free_test_instruction.js'
import AssessorMain from './components/assessors/assessors_main.js'
import AdminMain from './components/admin/admin_main.js'
import GeneralMain from './components/general/general.js'
import CreateAccount from './components/forms/create_account.js'

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_wa_block_hidden: true,
      is_bot_block_hidden: true,
      wa: ''
    }

    this.toggle_wa_block = this.toggle_wa_block.bind(this);
    this.send_whatsapp = this.send_whatsapp.bind(this);

    this.toggle_bot_block = this.toggle_bot_block.bind(this);
  }

  toggle_bot_block () {
    if (this.state.is_bot_block_hidden) {
      this.setState({is_bot_block_hidden: false})
    } else {
      this.setState({is_bot_block_hidden: true})
    }
  }

  send_whatsapp () {
    console.log(this.state.wa);
  }

  toggle_wa_block () {
    this.setState({wa: ''});
    if (this.state.is_wa_block_hidden) {
      this.setState({is_wa_block_hidden: false})
    } else {
      this.setState({is_wa_block_hidden: true})
    }
  }

  render() {
    return (
      <div>
        <Header />
          <BrowserRouter>
            <Switch>
              <Route path='/create_account'>
                  <CreateAccount />
              </Route>
              <Route path='/student'>
                <StudentMain />
              </Route>
              <Route path='/assessor'>
                <AssessorMain />
              </Route>
              <Route path='/admin_user'>
                <AdminMain />
              </Route>
              <Route path='/free_test_instruction'>
                <FreeTestInstruction />
              </Route>
              <Route path='/'>
                <GeneralMain />
              </Route>
            </Switch>
          </BrowserRouter>
        <Footer />
        <div class='row'>
          <div class='col number' hidden={this.state.is_wa_block_hidden}>
            <h6><b>Get Updates</b></h6>
            <input class='wainput' type='text' placeholder='10-digit-number' max-length={10} value={this.state.wa} onChange={(e) => this.setState({wa: e.target.value})} />
            <input class='wainput' type='text' placeholder='Your Message' value='' />
            <button class='wab' onClick={(e) => this.send_whatsapp()}>Send Now</button>
          </div>
        </div>
        <img class="btn img-fluid rounded-circle wa" onClick={(e) => this.toggle_wa_block()} src={require('./assets/images/wa.png')} alt="whatsapp" hidden={!this.state.is_wa_block_hidden} />
        <img class="btn img-fluid rounded-circle wa_cancel" onClick={(e) => this.toggle_wa_block()} src={require('./assets/images/cancel.svg')} alt="cancel" hidden={this.state.is_wa_block_hidden} />

        <iframe hidden={this.state.is_bot_block_hidden} class='bot_block' allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/efc40e90-993b-4d50-a67f-20efd15e18b3"></iframe>

        <img class="btn img-fluid rounded-circle bot" onClick={(e) => this.toggle_bot_block()} src={require('./assets/images/bot.jpg')} alt="whatsapp" hidden={!this.state.is_bot_block_hidden} />
        <img class="btn img-fluid rounded-circle bot_cancel" onClick={(e) => this.toggle_bot_block()} src={require('./assets/images/cancel.svg')} alt="cancel" hidden={this.state.is_bot_block_hidden} />

      </div>
    );
  }
}

export default App;
