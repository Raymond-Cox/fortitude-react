import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import {Navbar, List, AwayNavbar, AwayList, Brand, HamburgerMenu, AwayHamburgerMenu } from './style.js';
import createHistory from "history/createBrowserHistory"

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      menuOpen: false
    };
  }

  toHome = () => {
    if(this.state.home === false)
    this.setState({
      home: true
    });
    this.toggleMenu();
  }
  awayFromHome = () => {
    if(this.state.home === true) {
    this.setState({
      home: false
    });
  }
    this.toggleMenu();
  }
  toggleMenu = () => {
    const x = window.matchMedia("(max-width: 576px)")
    
    if(x.matches) {
      this.setState({
        menuOpen: !this.state.menuOpen
      })
      if (this.state.menuOpen === true) {
        document.getElementById("nav").style.display = "none";
      } else {
        document.getElementById("nav").style.display = "block";
      } 
    }
  }
  showNavOnResize = () => {
    const y = window.matchMedia("(min-width: 577px)")
    if (y.matches) {
      document.getElementById("nav").style.display = "flex";
    } else {
      document.getElementById("nav").style.display = "none";
    }
  }
  
  componentWillMount() {
    const history = createHistory();
    const location = history.location;
    if (location.pathname !== '/') {
      this.setState({
        home: false
      });
    }
    window.addEventListener("resize", this.showNavOnResize);
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
            homeCondition={this.state.home}
            toggleMenu={this.toggleMenu} 
            menuOpen={this.state.menuOpen} />
        ) : (
          <AwayNavigation
            toHome={this.toHome}
            awayFromHome={this.awayFromHome}
            homeCondition={this.state.home}
            toggleMenu={this.toggleMenu}
            menuOpen={this.state.menuOpen} />
        )}
      </div>
    )
  }
}

const HomeNavigation = (props) => (
  <Navbar>
    {props.menuOpen ? (
      <HamburgerMenu onClick={props.toggleMenu}>
        <span class="x" role="img" aria-label="close">&#10060;</span>
      </HamburgerMenu>
    ) : (
      <HamburgerMenu onClick={props.toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </HamburgerMenu>
    )}
      
    
    <List id="nav">
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
    {props.menuOpen ? (
      <AwayHamburgerMenu onClick={props.toggleMenu}>
        <span className="x" role="img" aria-label="close">&#10060;</span>
      </AwayHamburgerMenu>
    ) : (
        <AwayHamburgerMenu onClick={props.toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </AwayHamburgerMenu>
      )}
    <AwayList id="nav">
      <li><NavLink exact to="/" className="NavbarLink" onClick={props.toHome}>Home</NavLink><span></span></li>
      <li><NavLink to="/portfolio" className="NavbarLink" onClick={props.awayFromHome}>Portfolio</NavLink></li>
      <li><NavLink to="/contact" className="NavbarLink" onClick={props.awayFromHome}>Contact</NavLink></li>
    </AwayList>
  </AwayNavbar>
)
export default Nav;