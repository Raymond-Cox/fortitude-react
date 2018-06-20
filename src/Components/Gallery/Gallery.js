import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullGallery from './FullGallery.js';
import IndividualGallery from './IndividualGallery';

const Gallery = () => (
  <div>
    <h2>This is a gallery page!</h2>
    <Switch>
      <Route exact path='/gallery' component={FullGallery} />
      <Route path='/gallery/:name' component={IndividualGallery} />
    </Switch>
  </div>
);

export default Gallery;