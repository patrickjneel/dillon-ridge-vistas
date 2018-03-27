import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-bar.css'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink className="nav-bar-links" to="/dillon-ridge-vistas/viewfloorplans">View Floor Plans</NavLink>
      <NavLink className="nav-bar-links" to="/dillon-ridge-vistas/contact">Contact</NavLink>
      <NavLink className="nav-bar-links" to="/dillon-ridge-vistas/">Home</NavLink>
    </div>
  )
}

export default NavBar;
