import  React, { Component } from  'react'
import axios from 'axios'

class UploadDocument extends Component {
    state = { 
          selectedFile: null
    };

    onFileChange(event) {
        this.setState({selectedFile : event.target.files[0]});
    }

    onUploadFile() {
        const formData = new FormData();
        formData.append(this.state.selectedFile);

        axios.post(`/assessor/uploadfile`, {file:formData})
        .then((response) => {
            console.log(response)
        })
        .error(error => console.log(error.message));
    }

    fileData = () => { 
     
        if (this.state.selectedFile) { 
            
          return ( 
            <div>
              <br />                
              <h4>File Details:</h4> 
              <p>File Name: {this.state.selectedFile.name}</p> 
              <p>File Type: {this.state.selectedFile.type}</p> 
              <p> 
                Last Modified:{" "} 
                {this.state.selectedFile.lastModifiedDate.toDateString()} 
              </p> 
            </div> 
          ); 
        } else { 
          return ( 
            <div> 
              <br /> 
              <h6>Choose before Pressing the Upload button</h6> 
            </div> 
          ); 
        } 
      };

    render () {
        return (
            <div>
                <div class="modal fade bd-example-modal-lg" id="uploadnew" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <p class="modal-title" id="exampleModalLabel">
                                    <b>Col XXX,</b><br />
                                </p>
                            </div>
                            <div class="modal-body">
                                <div className='forgot_password'>
                                    <input type="file" onChange={(event) => this.onFileChange(event)} style={{border:'2px solid black', borderRadius:'5px', width:'100%'}} />
                                </div>
                                {this.fileData()}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" disabled={this.state.selectedFile?false:true} onClick={this.onUploadFile}>Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>
        );
    }
}

export default UploadDocument;