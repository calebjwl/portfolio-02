import React, { Component } from 'react';
import './styles/App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Work/>
        <Contact/>
      </div>
    );
  }
}

export default App;
