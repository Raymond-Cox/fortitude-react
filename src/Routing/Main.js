import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Components/Landing/Home.js';
import Gallery from '../Components/Gallery/Gallery.js';
import Contact from '../Components/Contact/Contact.js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/gallery' component={Gallery} />
      <Route path='/contact' component={Contact} />
    </Switch>
  </main>
)

export default Main;