import React, { Component } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { MainImg } from './style.js';
import './galleryFormat.css';

class PictureGallery extends Component {

  render() {

    return (
      <MainImg>
        <ImageGallery items={this.props.createImages} />
      </MainImg>
    );
  }

}

export default PictureGallery;
