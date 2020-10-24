import  React, { Component } from  'react'
import axios from 'axios'

class UploadDocument extends Component {

    constructor(props) {
      super(props);
      this.state = {
        selectedFile: null,
        isUploaded: false
      };
      this.onUploadFile = this.onUploadFile.bind(this);
    }

    onFileChange(event) {
        this.setState({selectedFile : event.target.files[0]});
    }

    onUploadFile(e) {
      e.preventDefault();
      
      // const formData = new FormData();
      // formData.append('dshi',this.state.selectedFile);
      // debugger
      const file_data = {
        'file_name': this.state.selectedFile.name,
        'file_size': this.state.selectedFile.size,
        'file_type': this.state.selectedFile.type,
        'file_url': 'http://localhost:3000/assessor'
      }
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      };

      axios.post(`/assessor_api/breifcase/uploadfile/`, 
        file_data, 
        {headers:headers}
      )
      .then((response) => {
          // console.log(response);
          this.setState({selectedFile: null, isUploaded : true});
      })
      .catch((error) => {
        // console.log(error.message);
      });
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
      } else if(this.state.isUploaded) { 
        return (
          <div>
            <br />
            <h6>Your File Has Been Uploaded Successfully.</h6> 
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
                                <div className='forgot_password' hidden={this.state.isUploaded}>
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
