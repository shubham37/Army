import React, { Component } from 'react';
import '../assets/css/header.css'
import axios from 'axios'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'modalImage': '/media/army-gallery/headerimage/b6d6edb8-24ef-4345-86e8-6cfa1985b2b8.jpg',
      'images': []
    }
  }

  componentWillMount(){
    axios.get(`/api/images/`)
    .then((data) => {
      if (data.data.is_exist) {
        console.log(data)
        this.setState({
            modalImage: data.data.images[0].image,
            images: data.data.images
        });
      }
    })
    .catch((error) =>  {
        console.log(error.message)
    });
  }


  render() {
    const modalImages = (
      this.state.images.map((img, index) => 
        <div className={`carousel-item ${index===0 ?"active": ""}`}>
          <img src={img.image} className='img-responsive flag' alt='img' />
        </div>
      )
    )

    return (
      <div className="Header row">
        <div className="col-md-8 col-6 col-s-8">
          <div id="carouselExampleSlides" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                {modalImages}
              </div>
            </div>
          </div>
        <div className="col-md-4 col-6 col-s-4">
          <a href='/'>
            <img src={require('../assets/images/ssb_logo.png')} className='img-responsive float-left flag' alt='flag' />
          </a>            
        </div>
      </div>
    );
  }
}

export default Header;
