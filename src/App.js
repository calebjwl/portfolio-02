import React, { Component } from 'react';
import './styles/App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Home/>
        <About/>
      </div>
    );
  }
}

export default App;
