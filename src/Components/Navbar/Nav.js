import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import {Navbar, List, AwayNavbar, AwayList, Brand } from './style.js';
import createHistory from "history/createBrowserHistory"

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true
    };
  }

  toHome = () => {
    if(this.state.home === false)
    this.setState({
      home: true
    });
  }
  awayFromHome = () => {
    if(this.state.home === true)
    this.setState({
      home: false
    });
  }
  componentWillMount() {
    const history = createHistory();
    const location = history.location;
    if (location.pathname !== '/') {
      this.setState({
        home: false
      });
    }
  }
  componentDidMount() {
    console.log('Component mounted ' + this.state.home);
  }
  componentDidUpdate() {
    console.log('Component updated ' + this.state.home);
  }
  render() {
    const isHome = this.state.home;

    return (
      <div>
        {isHome ? (
          <HomeNavigation
            toHome={this.toHome}
            awayFromHome={this.awayFromHome}
            homeCondition={this.state.home} />
        ) : (
          <AwayNavigation
            toHome={this.toHome}
            awayFromHome={this.awayFromHome}
            homeCondition={this.state.home} />
        )}
      </div>
    )
  }
}

const HomeNavigation = (props) => (
  <Navbar>
    <List>
      <li><NavLink exact to="/" className="NavbarLink" onClick={props.toHome}>Home</NavLink><span></span></li>
      <li><NavLink to="/portfolio" className="NavbarLink" onClick={props.awayFromHome}>Portfolio</NavLink></li>
      <li><NavLink to="/contact" className="NavbarLink" onClick={props.awayFromHome}>Contact</NavLink></li>
    </List>
  </Navbar>
  )

const AwayNavigation = (props) => (
  <AwayNavbar>
    <Brand>
      <h1>Fortitude Photography</h1>
    </Brand>
    <AwayList>
      <li><NavLink exact to="/" className="NavbarLink" onClick={props.toHome}>Home</NavLink><span></span></li>
      <li><NavLink to="/portfolio" className="NavbarLink" onClick={props.awayFromHome}>Portfolio</NavLink></li>
      <li><NavLink to="/contact" className="NavbarLink" onClick={props.awayFromHome}>Contact</NavLink></li>
    </AwayList>
  </AwayNavbar>
)
export default Nav;