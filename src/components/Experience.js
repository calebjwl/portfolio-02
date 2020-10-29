import React, { Component } from 'react';
import resume from '../img/resume-screenshot-lg.png';

const resumeLink = "https://drive.google.com/file/d/1FoBrIbhzvl9DirfChflB9MTVmzsuhvri/view?usp=sharing";

class Experience extends Component {
  render() {
    return (
      <div id="experience">
        <h1 className="section-title">
          <span className="block"></span>
            Resume
          <span className="block"></span>
        </h1>
        <div className="resume">
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                <img src={resume} alt="Resume" class="hvr-float"/>
                <div className="overlay"></div>
            </a>
        </div>
      </div>
    )
  }
}

export default Experience;
