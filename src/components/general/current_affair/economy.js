import React, { Component } from 'react';
import axios from 'axios';

class CurrentAffairEonomy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      is_ca: false,
      cas: []
    }
  }
 
  componentWillMount() {
    axios.get(`/api/current_affair/Economy`)
    .then((data) =>{
        if (data.status === 200){
          this.setState({
            is_ca:data.data.is_exist,
            cas:data.data.ca
          });
        } else {
          this.setState({
            is_ca:false,
            cas:[]
          });
        }
    })
    .catch((error) => {
      this.setState({
        is_ca:false,
        cas:[]
      });
    });

  }

  render() {

    const ca_content = this.state.cas.map((ca, index) => 
        <li style={{display: 'block'}} key={index}><b>{index +1}.</b> {ca.text}
        </li>
    )

    const no_content = (
        <p>No Points For Economy</p>
    )

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div class='col'>
            <p style={{fontSize: 'large', fontWeight: 'bolder', color: 'gray', padding: '0.5% 1%'}}>Economy</p>
            <hr />
            { this.state.is_ca
              ? <ol>{ca_content}</ol> :
              no_content
            }
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentAffairEonomy;
