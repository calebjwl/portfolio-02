import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="terminal">
          <div className="terminal-header">
            <div className="header-button red"></div>
            <div className="header-button yellow"></div>
            <div className="header-button green"></div>
          </div>
          <div className="terminal-window">
            <div className="terminal-info">
              <div className="terminal-group">
                <p className="terminal-title">/* Current Location */</p>
                <p>Nashville, TN</p>
              </div>
              <div className="terminal-group">
                <p className="terminal-title">/* Bio */</p>
                <p>Front-end web developer with 3 years of experience. Skilled in building responsive and clean user interfaces using HTML/CSS/JS, and CMS platforms. </p>
              </div>
              <div className="terminal-group">
                <p className="terminal-title">/* Skills */</p>
                <p>["HTML", "CSS", "Sass", "Javascript", "React", "ASP.NET MVC", "C#"]</p>
              </div>
              <div className="terminal-group">
                <p className="terminal-title">/* Hobbies */</p>
                <p>["drums", "audio engineering & mixing", "drawing", "cooking"]</p>
              </div>
              <div className="terminal-group">
                <p className="terminal-title">/* Contact */</p>
                <p>
                  ["<a href="mailto:caleb.gwl@gmail.com" className="link">caleb.gwl@gmail.com</a>", 
                  "<a href="https://github.com/calebjwl" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>",
                  "<a href="https://www.linkedin.com/in/calebjwl/" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>"] 
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default About;
