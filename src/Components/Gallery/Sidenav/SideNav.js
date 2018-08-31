// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import {CategoryContainer, CategoryList, ExpandForeground, Arrow, ExpandBackground} from './style.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


// const Sidenav = () => {

// const slideToggle = () => {
//     let toggleState = false;

//     if (toggleState === false) {
//       document.getElementById("slideTarget").style.transform.translateX(200);
//     }

//   }

//   return (
//   <CategoryContainer id="slideTarget">
//     <CategoryList>

//       <li>
//         <NavLink to="/portfolio/femalefashion" className="sideNavLink">Female Fashion
//           <img src="https://webdesignbyraymond.com/fortitudephotos/portfolio/femalefashion/1.jpg" alt="" className="thumbnail" />
//         </NavLink>
//       </li>
//       <hr />

//       <li>
//         <NavLink to="/portfolio/malefashion" className="sideNavLink">Male Fashion
//           <img src="https://webdesignbyraymond.com/fortitudephotos/portfolio/malefashion/1.jpg" alt="" className="thumbnail" />
//         </NavLink>
//       </li>
//       <hr />

//       <li>
//         <NavLink to="/portfolio/kids" className="sideNavLink">Kids
//           <img src="https://webdesignbyraymond.com/fortitudephotos/portfolio/kids/15.jpg" alt="" className="thumbnail" />
//         </NavLink>
//       </li>
//       <hr />

//       <li>
//         <NavLink to="/portfolio/other" className="sideNavLink">Other
//           <img src="https://webdesignbyraymond.com/fortitudephotos/portfolio/other/18.jpg" alt="" className="thumbnail" />
//         </NavLink>
//       </li>

//     </CategoryList>
//     <ExpandBackground>
//       <ExpandForeground>
//         <Arrow>
//           <FontAwesomeIcon onClick={slideToggle()} icon={faChevronRight} />
//         </Arrow>
//       </ExpandForeground>
//     </ExpandBackground>
//   </CategoryContainer>
//   );
// }

// export default Sidenav;

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CategoryContainer, CategoryList, ExpandForeground, Arrow, ExpandBackground } from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


class Sidenav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sideNavOpenState: false
    };
  }

sliderToggle = () => {
  
  if (this.state.sideNavOpenState === false) {
    console.log('testing false');
    
    document.getElementById('sliderTarget').style.transform = "translateX(200px)";
  } else {
    document.getElementById('sliderTarget').style.transform = "translateX(-200px)"
    console.log('testing true');
  }
  console.log('slider test');
  this.setState({
    sideNavOpenState: !this.state.sideNavOpenState
  })
}

componentWillReceiveProps() {
  console.log(this.state.sideNavOpenState);
}

  render() {
    return (
      <CategoryContainer id="sliderTarget">
        <CategoryList>

          <li>
            <NavLink to="/portfolio/femalefashion" className="sideNavLink">Female Fashion
          <img src="https://webdesignbyraymond.com/fortitudephotos/portfolio/femalefashion/1.jpg" alt="" className="thumbnail" />
            </NavLink>
          </li>
          <hr />

          <li>
            <NavLink to="/portfolio/malefashion" className="sideNavLink">Male Fashion
          <img src="https://webdesignbyraymond.com/fortitudephotos/portfolio/malefashion/1.jpg" alt="" className="thumbnail" />
            </NavLink>
          </li>
          <hr />

          <li>
            <NavLink to="/portfolio/kids" className="sideNavLink">Kids
          <img src="https://webdesignbyraymond.com/fortitudephotos/portfolio/kids/15.jpg" alt="" className="thumbnail" />
            </NavLink>
          </li>
          <hr />

          <li>
            <NavLink to="/portfolio/other" className="sideNavLink">Other
          <img src="https://webdesignbyraymond.com/fortitudephotos/portfolio/other/18.jpg" alt="" className="thumbnail" />
            </NavLink>
          </li>

        </CategoryList>
        <ExpandBackground>
          <ExpandForeground onClick={this.sliderToggle}>
            <Arrow>
              <FontAwesomeIcon icon={faChevronRight} />
            </Arrow>
          </ExpandForeground>
        </ExpandBackground>
      </CategoryContainer>
    );
  };
}

export default Sidenav;