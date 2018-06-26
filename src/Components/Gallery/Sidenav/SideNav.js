import React from 'react';
import { NavLink } from 'react-router-dom';
import {CategoryContainer, CategoryList} from './style.js';

const Sidenav = () => (
  <CategoryContainer>
    <CategoryList>

      <li>
        <NavLink to="/portfolio/femalefashion" className="sideNavLink">Female Fashion
          <img src="https://webdesignbyraymond.com/fortitudephotos/1.jpg" alt="" className="thumbnail" />
        </NavLink>
      </li>
      <hr />

      <li>
        <NavLink to="/portfolio/malefashion" className="sideNavLink">Male Fashion
          <img src="https://webdesignbyraymond.com/fortitudephotos/1.jpg" alt="" className="thumbnail" />
        </NavLink>
      </li>
      <hr />

      <li>
        <NavLink to="/portfolio/kids" className="sideNavLink">Kids
          <img src="https://webdesignbyraymond.com/fortitudephotos/1.jpg" alt="" className="thumbnail" />
        </NavLink>
      </li>
      <hr />

      <li>
        <NavLink to="/portfolio/other" className="sideNavLink">Other
          <img src="https://webdesignbyraymond.com/fortitudephotos/1.jpg" alt="" className="thumbnail" />
        </NavLink>
      </li>
      <hr />

    </CategoryList>
  </CategoryContainer>
);

export default Sidenav;