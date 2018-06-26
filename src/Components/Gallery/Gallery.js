import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullGallery from './FullGallery.js';
import IndividualGallery from './IndividualGallery';
import { Div } from './style.js';

const Gallery = () => (
  <Div>
    <Switch>
      <Route exact path='/portfolio' component={FullGallery} />
      <Route path='/portfolio/:name' component={IndividualGallery} />
    </Switch>
  </Div>
);

export default Gallery;