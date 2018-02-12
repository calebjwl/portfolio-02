import React, { Component } from 'react';

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
  componentDidMount() {
  }

  render() {
    return (
      <div className="project-card">
        <div className="project-screenshot">
          <img src={require('../img/screenshots/' + this.props.projectScreenshot)}/>
        </div>
        <div className="project-content">
          <h1 className="project-title">{this.props.projectTitle}</h1>
          <p className="project-description">{this.props.projectDescription}</p>
          <div className="project-skills">
            {this.props.projectSkills.map((skill, index) => {
              return (
                <p className="project-skill project-button" key={index}>{skill}</p>
              )
            })}
          </div>
          <div className="project-links">
            <a href={this.props.projectLinks.github} target="_blank" className="project-link project-button">View Code</a>
            <a href={this.props.projectLinks.preview} target="_blank" className="project-link project-button">View Site</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Projects;
