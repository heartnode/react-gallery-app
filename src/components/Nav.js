import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = (props)=>{
  
    return (
        <nav className="main-nav">
        <ul>
          <li><NavLink to="/search/Cats">Cats</NavLink></li>
          <li><NavLink to="/search/Dogs">Dogs</NavLink></li>
          <li><NavLink to="/search/Computers">Computers</NavLink></li>
        </ul>
      </nav>
    );
};

export default Nav;