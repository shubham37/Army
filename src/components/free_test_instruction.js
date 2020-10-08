import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import '../assets/css/free_test_instructions.css'

class FreeTestInstruction extends Component {
  render() {
    return (
        <div className='FreeTestInstruction'>
            <div className='row'>
                <div className='col'>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">Brand</Navbar.Brand>
                        <Navbar.Text>Welcome 9971202959, for the Free Test</Navbar.Text>
                    </Navbar>
                </div>
            </div>
            <div className='row container-fluid'>
                <div className='col-sm'>
                    <p className="alert navbar_text">Please follow the instruction before attempting the test</p>
                    <div className='instruction_block'>
                        <p class="alert navbar_text_instruction"><u>Instruction</u></p>
                        <ol type='1'>
                            <li className='instruction'>1. There are 25 MCQ’s</li>
                            <li className='instruction'>2. Time for completion of test is ____minutes</li>
                            <li className='instruction'>3. Time counter will be showing the time left to complete the test</li>
                            <li className='instruction'>4. Use Next and Back button option to attempt questions</li>
                            <li className='instruction'>5. After completion of test click on submit button</li>
                        </ol>
                    </div>
                </div>
                <div className='col-sm'>
                    <p class="alert danger_text">
                        On clicking the Attempt test the
                        window of test will open with
                        @% MCQs bases on intt test,
                        WAT,SRT,TAT Themes, GTO obst
                        alternatives, Current Affairs etc
                        . On completion of test result
                        will be shown with meter with
                        positive suggestions to join us
                        and will take it back to main
                        page.                        
                    </p>
                    <button className='btn btn-primary float-right' id='free_test_start_btn'> Attempt Test </button>
                </div>
            </div>
        </div>
    );
  }
}

export default FreeTestInstruction;
