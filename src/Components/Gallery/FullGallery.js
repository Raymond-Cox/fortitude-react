import React from 'react';
import Sidenav from './Sidenav/SideNav.js';
import Pictureview from './PictureView/PictureView.js';
import { GalleryView } from './style.js';

const FullGallery = () => (
  <GalleryView>
    <Sidenav />
    <Pictureview />
  </GalleryView>
);

export default FullGallery;