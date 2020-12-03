import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';

export default function UploadDocument() {

  const [selectedFile, setSelectedFile] = useState({});
  const [isUploaded, setIsUploaded] = useState(false);
  const [isfile, setIsfile] = useState(false);

  function onFileChange(event) {
    setSelectedFile(event.target.files[0]);
    setIsfile(true);
  }

  function onUploadFile(e) {
      e.preventDefault();
      
      const formData = new FormData();
      formData.append('file',selectedFile, selectedFile.name);
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      };

      axios.post(`/assessor_api/breifcase/uploadfile/`, 
        formData,
        {headers:headers}
      )
      .then((response) => {
        setIsUploaded(true);
        setIsfile(false);
        setSelectedFile({});
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
    }

   function FileData() {
      if (isfile) {
        return ( 
          <div>
            <br />
            <h4>File Details:</h4> 
            <p>File Name: {selectedFile.name}</p> 
            <p>File Type: {selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div>
        ); 
      } else if(isUploaded) { 
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
    }

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
                            <div className='forgot_password' hidden={isUploaded}>
                                <input type="file" onChange={(event) => onFileChange(event)} style={{border:'2px solid black', borderRadius:'5px', width:'100%'}} />
                            </div>
                            <FileData />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" disabled={!isfile} onClick={onUploadFile}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>                    
        </div>
    );
}
