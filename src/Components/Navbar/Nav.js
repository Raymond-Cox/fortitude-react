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

  // Handles menu links that take the user to home path.
  toHome = () => {
    if(this.state.home === false)
    this.setState({
      home: true
    });
    this.toggleMenu();
  }

  // Handles menu links that take the user away from home path.
  awayFromHome = () => {
    if(this.state.home === true) {
    this.setState({
      home: false
    });
  }
    this.toggleMenu();
  }

  //  Because this is called everytime a navlink or hamburger icon is clicked, we first check the browser width to determine if the hamburger icon is currently rendered.  If so, it inverts the menuOpen state, resulting in closing the dropdown everytime a link is clicked, while opening the dropdown on hamburger icon clicks.
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

  // This covers the edge case of increasing browser width to 577px or greater after having it less than that.  It redisplays the standard links on navbar.
  showNavOnResize = () => {
    const y = window.matchMedia("(min-width: 577px)")
    if (y.matches) {
      document.getElementById("nav").style.display = "flex";
    } else {
      document.getElementById("nav").style.display = "none";
    }
  }
  
  // If nav is mounting, check to see if the url is anywhere other than Home, if so set state to reflect that.  Also attaches event listener to watch for browser resize to handle the edge-case mentioned above.
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
    console.log('Nav mounted, is home = ' + this.state.home);
  }
  componentDidUpdate() {
    console.log('Nav updated, is home = ' + this.state.home);
  }

  // render Home navbar if this.state.home = true, else render Away navbar
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

// Home nav bar doesn't include Brand name, also features white font and styling.
const HomeNavigation = (props) => (
  <Navbar>
    {/* This controls the hamburger menu toggle open and close, dependant on current state */}
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

      {/* Standard links that call functions to set whether or not currently home in state */}
    <List id="nav">
      <li><NavLink exact to="/" className="NavbarLink" onClick={props.toHome}>Home</NavLink><span></span></li>
      <li><NavLink to="/portfolio" className="NavbarLink" onClick={props.awayFromHome}>Portfolio</NavLink></li>
      <li><NavLink to="/contact" className="NavbarLink" onClick={props.awayFromHome}>Contact</NavLink></li>
    </List>
  </Navbar>
  )

// Away navbar includes Brand name, as well as black font and styling on white background.
const AwayNavigation = (props) => (
  <AwayNavbar>
    <Brand>
      <h1>Fortitude Photography</h1>
    </Brand>

    {/* This controls the hamburger menu toggle open and close, dependant on current state */}
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

      {/* Standard links that call functions to set whether or not currently home in state */}
    <AwayList id="nav">
      <li><NavLink exact to="/" className="NavbarLink" onClick={props.toHome}>Home</NavLink><span></span></li>
      <li><NavLink to="/portfolio" className="NavbarLink" onClick={props.awayFromHome}>Portfolio</NavLink></li>
      <li><NavLink to="/contact" className="NavbarLink" onClick={props.awayFromHome}>Contact</NavLink></li>
    </AwayList>
  </AwayNavbar>
)
export default Nav;