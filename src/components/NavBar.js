import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-bar.css'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink className="nav-bar-links" to="/viewfloorplans">View Floor Plans</NavLink>
      <NavLink className="nav-bar-links" to="/contact">Contact</NavLink>
      <NavLink className="nav-bar-links" to="/">Home</NavLink>
    </div>
  )
}

export default NavBar;
