import React from 'react';
import './contact.css'

const Contact = () => {
  if(window.innerWidth < 700) {
    return (
      <div className="contact-info">
        <h1 className="contact-header">Contact Us</h1>
        <div className="all-info">
          <div className="left-side">
            <ul>
              <li>Prices from $1,750 - $2,300 Per Month</li> 
              <li>Fee Required For Application</li>
              <li>All Utilities Included</li>
              <li>1 Year Lease Required</li>
              <li>Dog Friendly Units Available</li> 
            </ul>
          </div>
          <div className="contact-line-break"></div>
          <div className="right-side">
          <a href="tel:970-468-7813" className="email-contact">
                970-468-7813
              </a>
              <a href="mailto:dillon.ridge.vistas@steven.com" className="email-contact">
                dillon.ridge.vistas@steven.com
              </a>
              <h3 className="contacts">1234 Dillon Ridge Rd Dillon, CO</h3>
            </div>
            <a href="https://www.google.com/maps/@?api=1&map_action=map&center=39.618196, -106.039894&zoom=14" target="_blank">Click here for map</a>
        </div>
      </div>
    ) 
  } else {
    return (
      <div className="contact-info">
        <h1 className="contact-header">Contact Us</h1>
        <div className="all-info">
          <div className="left-side">
            <ul>
              <li>Prices from $1,750 - $2,300 Per Month</li> 
              <li>Fee Required For Application</li>
              <li>All Utilities Included</li>
              <li>1 Year Lease Required</li>
              <li>Dog Friendly Units Available</li> 
            </ul>
          </div>
          <div className="contact-line-break"></div>
          <div className="right-side">
             <h3 className="contacts">Call: 970-468-7813</h3>
             <a href="mailto:dillon.ridge.vistas@steven.com" className="email-contact">
                dillon.ridge.vistas@steven.com
              </a>
              <h3 className="contacts">1234 Dillon Ridge Rd Dillon, CO</h3>
                <a href="https://www.google.com/maps/@?api=1&map_action=map&center=39.618196, -106.039894&zoom=14" target="_blank">Click here for map</a>
            </div>
        </div>
      </div>
    ) 
  }
}

export default Contact;
