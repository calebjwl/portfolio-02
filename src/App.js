import React, { Component } from 'react';
import './styles/App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import projects from './content/projects-content';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
        <div className="top-background"></div>
        <div className="container">
          <Home/>
          <About/>
          <Projects projects={projects}/>
          <Contact/>
        </div>
      </div>
    );
  }
}

export default App;
