import React from 'react';
import { NavLink } from 'react-router-dom';
import {CategoryContainer, CategoryList, Expand} from './style.js';

const Sidenav = () => (
  <CategoryContainer>
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
    <Expand>
    >
    </Expand>
  </CategoryContainer>
);

export default Sidenav;