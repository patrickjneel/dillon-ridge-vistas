import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <div className="contact-info">
      <h1 className="contact-header">Contact Us</h1>
      <form className="postcard" action="">
     
  <div className="receiver absolute">
    <label className="label">Phone:</label>
    <span className="phone">970-CALL-STEV</span>
  </div>
  <div className="sender absolute">
    <label className="label">Email:</label>
    <span className="phone">Stevie@aol.com</span>
  </div>
  <div className="location absolute">
    <label className="label">Location:</label>
    <span className="phone">12345 Dillon, CO</span>
  </div>
</form>
    </div>
  )
}

export default Contact;
