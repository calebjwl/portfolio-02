import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="">
        <h1 className="section-title">
          <div className="block"></div>
          Projects
          <div className="block"></div>
        </h1>

        <div className="projects-container">
          {/* {this.props.projects.map((project, index) => {
            return (
              <div className="project-card">
                <img src={project.screenshot} alt="" className="project-screenshot"/>
                <h1 className="project-title">{project.title}</h1>
                <p className="project-description">{project.description}</p>

              </div>
            )
          })} */}
        </div>
        

      </div>
    )
  }
}

export default Projects;
