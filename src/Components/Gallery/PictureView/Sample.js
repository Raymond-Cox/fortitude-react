import React, { Component } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { TestImg } from './style.js';
import './galleryFormat.css';

// const PREFIX_URL = "https://webdesignbyraymond.com/fortitudephotos/portfolio/";
class MyComponent extends Component {

  render() {
    // originalClass: 'test-sizing'
    // const images = [
    //   {
    //     original: `${PREFIX_URL}femalefashion/1.jpg`,
    //     thumbnail: `${PREFIX_URL}femalefashion/1.jpg`
    //   },
    //   {
    //     original: `${PREFIX_URL}femalefashion/2.jpg`,
    //     thumbnail: `${PREFIX_URL}femalefashion/2.jpg`
    //   },
    //   {
    //     original: `${PREFIX_URL}malefashion/1.jpg`,
    //     thumbnail: `${PREFIX_URL}malefashion/1.jpg`
    //   }
    // ]
 
    return (
      <TestImg>
      <ImageGallery items={this.props.createImages} />
      </TestImg>
    );
  }

}

export default MyComponent;
