import React from 'react';
import './App.css';
import Main from './Routing/Main.js';
import Nav from './Components/Navbar/Nav.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)
const App = () => (
  <div className="App">
    <Nav />
    <Main />
  </div>
)

export default App;
