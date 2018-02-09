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
            projectLinks={project.link}
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
      <div className="project-card">
        <img src={this.props.projectScreenshot} alt="" className="project-screenshot" />
        <h1 className="project-title">{this.props.projectTitle}</h1>
        <p className="project-description">{this.props.projectDescription}</p>
      </div>
    )
  }
}
export default Projects;
