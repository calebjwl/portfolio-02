import React, { Component } from 'react';
import test from '../img/screenshots/bella-divine.png';

class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <h1 className="section-title">
          <div className="block"></div>
          Projects
          <div className="block"></div>
        </h1>
        {this.props.projects.map((project, index) => {
          return (
            <ProjectCard projectTitle={project.title}
            projectDescription={project.description}
            projectSkills={project.skills}
            projectScreenshot={project.screenshot}
            projectLinks={project.links}
            key={index}
            />
          )
        })}

      </div>
    )
  }
}

class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card box-shadow">
        <img src={require('../img/screenshots/' + this.props.projectScreenshot)} className="project-screenshot"/>
        <div className="project-content">
          <h1 className="project-title">{this.props.projectTitle}</h1>
          <p className="project-description">{this.props.projectDescription}</p>
          <div className="project-skills">
            {this.props.projectSkills.map((skill, index) => {
              return (
                <div className="project-skill">
                  <p>{skill}</p>
                </div>
              )
            })}
          </div>
          <div className="project-links">
            <a href={this.props.projectLinks.github} target="_blank" className="project-link box-shadow">View Code</a>
            <a href={this.props.projectLinks.preview} target="_blank" className="project-link box-shadow">View Site</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Projects;
