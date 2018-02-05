import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import background from '../img/portfolio-logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar_content">
          <Link to="/">
            <img src={background} alt="" className="navbar__logo"/>
          </Link>
          <ul className="navbar_end">
            <Link to="/about" className="navbar__link">About</Link>
            <Link to="/work" className="navbar__link">Work</Link>
            <Link to="/contact" className="navbar__link">Contact</Link>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
