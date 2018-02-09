import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import background from '../img/portfolio-logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-end">
          <a href="#" className="navbar__link hvr-underline-from-left">Home</a>
          <a href="#projects" className="navbar__link hvr-underline-from-left">Projects</a>
          <a href="#contact" className="navbar__link hvr-underline-from-left">Contact</a>
        </div>
      </nav>
    )
  }
}

export default Navbar;
