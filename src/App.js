import React, { Component } from 'react';
import './styles/App.css';

import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        {/* <img src={logo} className="App-logo" alt="logo"/></img> */}
      </div>
    );
  }
}

export default App;
