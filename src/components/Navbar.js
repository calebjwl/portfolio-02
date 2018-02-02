import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__content">
          <Link to="/">
            <img src="http://placecage.com/50/50" alt="" className="navbar__logo"/>
          </Link>
          <ul className="navbar__links">
            <li className="navbar__link"><Link to="/about">About</Link></li>
            <li className="navbar__link"><Link to="/work">Work</Link></li>
            <li className="navbar__link"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar;
