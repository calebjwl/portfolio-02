import React, { Component } from 'react';
import './styles/App.scss';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
// import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import projects from './content/projects-content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        {/* Photo by Simone Hutsch on Unsplash */}
        <div className="top-background"></div>
        <div className="container">
          <Home/>
          <About/>
          <Experience/>
          {/* <Projects projects={projects}/> */}
          <Contact/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
