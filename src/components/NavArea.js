import React from 'react';
import { NavLink } from 'react-router-dom';

const NavArea = () => {
  return (
    <div>
      <NavLink className="nav-links" to="/viewfloorPlans">View Floor Plans</NavLink>
      <NavLink className="nav-links" to='/contact'>Contact</NavLink>
    </div>
  )
}

export default NavArea;
