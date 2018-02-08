import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import background from '../img/portfolio-logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="navbar-end">
          <Link to="/">
            <a className="navbar__link hvr-underline-from-left">Home</a>
          </Link>
          <Link to="/projects">
            <li className="navbar__link hvr-underline-from-left">Projects</li>
          </Link>
          <Link to="/contact">
            <li className="navbar__link hvr-underline-from-left">Contact</li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
