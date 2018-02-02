import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__content">
          <img src="http://placecera.com/100/100" alt="" className="navbar__logo"/>
          <ul className="navbar__links">
            <li className="navbar__link">About</li>
            <li className="navbar__link">Work</li>
            <li className="navbar__link">Contact</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar;
