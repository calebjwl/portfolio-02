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
          <div className="contact-grid__item hvr-float">
            <div className="contact-circle">
              <PhoneIcon className="contact-icon"/>
            </div>

            <p className="contact-text">Phone</p>
          </div>
          <div className="contact-grid__item hvr-float">
            <div className="contact-circle">
              <EnvelopeIcon className="contact-icon"/>
            </div>

            <p className="contact-text">E-mail</p>
          </div>
          <div className="contact-grid__item hvr-float">
            <div className="contact-circle">
              <GithubIcon className="contact-icon"/>
            </div>

            <p className="contact-text">Github</p>
          </div>
          <div className="contact-grid__item hvr-float">
            <div className="contact-circle">
              <LinkedinIcon className="contact-icon"/>
            </div>

            <p className="contact-text">LinkedIn</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
