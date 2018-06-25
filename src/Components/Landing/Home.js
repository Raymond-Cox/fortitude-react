import React from 'react';
import { PhotoBackground } from './style.js';

const Home = () => (
  <PhotoBackground className="Slideshow">
    <li>
      <span className="img-1 img-rotate">Image 01</span>
    </li>
    <li>
      <span className="img-2 img-rotate">Image 02</span>
    </li>
    <li>
      <span className="img-3 img-rotate">Image 03</span>
    </li>
  </PhotoBackground>
);

export default Home;