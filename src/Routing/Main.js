import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Components/Landing/Home.js';
import FullGallery from '../Components/Gallery/FullGallery.js';
import Contact from '../Components/Contact/Contact.js';

const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/portfolio' component={FullGallery} />
      <Route path='/contact' component={Contact} />
    </Switch>
  </div>
)

export default Main;