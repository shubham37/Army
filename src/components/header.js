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
    this.clickImage = this.clickImage.bind(this);
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

  clickImage(path) {
    this.setState({
      'modalImage': path
    })
  }


  render() {
    const modalImages = (
      this.state.images.map((img, index) => 
        <div class={`carousel-item ${index==0 ?"active": ""}`}>
          <img src={img.image} className='img-responsive flag' alt='flag' onClick={() => this.clickImage(img.image)} data-toggle='modal' data-target='#headerModal' />
        </div>
      )
    )

    const modalData = (
      <img src={this.state.modalImage} className='img-responsive modalimg' alt='flag' />
    )

    return (
      <div className="Header row">
        <div className="col-md-8 col-6 col-s-8">
          <div id="carouselExampleSlides" class="carousel slide carousel-fade" data-ride="carousel">
              <div class="carousel-inner">
                {modalImages}
              </div>
            </div>
          </div>
        <div className="col-md-4 col-6 col-s-4">
          <a href='/'>
            <img src={require('../assets/images/ssb_logo.png')} className='img-responsive float-left' alt='flag' width='100%' height='100%' />
          </a>            
        </div>

        <div class="modal fade bd-example-modal-lg" id="headerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" role="document">
              <div class="modal-content modatent">
                {modalData}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Header;
