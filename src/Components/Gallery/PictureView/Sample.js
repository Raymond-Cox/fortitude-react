import React, { Component } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { TestImg } from './style.js';
class MyComponent extends Component {
 
  render() {
 
    const images = [
      {
        original: 'https://webdesignbyraymond.com/fortitudephotos/portfolio/femalefashion/1.jpg',
        thumbnail: 'https://webdesignbyraymond.com/fortitudephotos/portfolio/femalefashion/1.jpg',
        originalClass: 'test-sizing'
      },
      {
        original: 'https://webdesignbyraymond.com/fortitudephotos/portfolio/femalefashion/2.jpg',
        thumbnail: 'https://webdesignbyraymond.com/fortitudephotos/portfolio/femalefashion/2.jpg'
      },
      {
        original: 'https://webdesignbyraymond.com/fortitudephotos/portfolio/malefashion/1.jpg',
        thumbnail: 'https://webdesignbyraymond.com/fortitudephotos/portfolio/malefashion/1.jpg'
      }
    ]
 
    return (
      <TestImg>
      <ImageGallery items={images} />
      </TestImg>
    );
  }

}

export default MyComponent;
