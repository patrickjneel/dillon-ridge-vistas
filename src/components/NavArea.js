import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-area.css';

const NavArea = () => {
  return (
    <div>
      <div className="welcome-all-info">
        <div className="welcome-area">
        <div className="welcome-image"></div>
        </div>
        <div className="info-area">
          <h1 className="app-title">Dillon Ridge VISTAS</h1>
          <h1 className="app-title">Now Leasing For Summer Of 2018</h1>
          <div className="button-links">
          <NavLink className="nav-links" to="/viewfloorPlans">View Floor Plans</NavLink>
          <NavLink className="nav-links" to='/contact'>Contact</NavLink>      
        </div>
      </div>
      </div>
    </div>
  )
}

export default NavArea;
