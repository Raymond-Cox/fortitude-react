import React, { Component } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { TestImg } from './style.js';
import './galleryFormat.css';

class PictureGallery extends Component {

  render() {

    return (
      <TestImg>
      <ImageGallery items={this.props.createImages} />
      </TestImg>
    );
  }

}

export default PictureGallery;
