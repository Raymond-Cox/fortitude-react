import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullGallery from './FullGallery.js';
import IndividualGallery from './IndividualGallery';
import styled from 'styled-components';

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: blue;
  margin: 0;
  padding: 0;
`;
const Gallery = () => (
  <Div>
    <h2>This is a Portfolio page!</h2>
    <Switch>
      <Route exact path='/portfolio' component={FullGallery} />
      <Route path='/portfolio/:name' component={IndividualGallery} />
    </Switch>
  </Div>
);

export default Gallery;