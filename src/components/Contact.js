import React from 'react';
import './contact.css'

const Contact = () => {
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
        <div className="right-side">
            <h3 className="contacts">(970) - 468 - 5678</h3>
            <h3 className="contacts">dillon.ridge.vistas@mail.com</h3>
          </div>
      </div>
    </div>
  )
}

export default Contact;
