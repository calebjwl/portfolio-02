import React, { Component } from 'react';
import PhoneIcon from 'react-icons/lib/fa/phone';
import EnvelopeIcon from 'react-icons/lib/fa/envelope';
import GithubIcon from 'react-icons/lib/fa/github';
import LinkedinIcon from 'react-icons/lib/fa/linkedin';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <h1 className="section-title">
          <span className="block"></span>
          Contact
          <span className="block"></span>
        </h1>

        <div className="contact-grid">
          <a href="tel:+19378158784" className="contact-grid__item hvr-float">
            <div className="contact-circle">
              <PhoneIcon className="contact-icon"/>
            </div>

            <p className="contact-text">Phone</p>
          </a>

          <a href="mailto:caleb.gwl@gmail.com" className="contact-grid__item hvr-float">
            <div className="contact-circle">
              <EnvelopeIcon className="contact-icon"/>
            </div>

            <p className="contact-text">E-mail</p>
          </a>

          <a href="https://github.com/calebjwl" 
          className="contact-grid__item hvr-float"
          target="_blank" rel="noopener noreferrer">
            <div className="contact-circle">
              <GithubIcon className="contact-icon"/>
            </div>

            <p className="contact-text">Github</p>
          </a>

          <a href="https://linkedin.com/in/calebjwl" 
          className="contact-grid__item hvr-float"
          target="_blank" rel="noopener noreferrer">
            <div className="contact-circle">
              <LinkedinIcon className="contact-icon"/>
            </div>

            <p className="contact-text">LinkedIn</p>
          </a>

        </div>
      </div>
    )
  }
}

export default Contact;
