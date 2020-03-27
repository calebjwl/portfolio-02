import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" id="nav">
        <div className="navbar-end">
          {/* <a href="#projects" className="navbar__link hvr-underline-from-left">Projects</a> */}
          <a href="#contact" className="navbar__link hvr-underline-from-left">Contact</a>
        </div>
      </nav>
    )
  }
}

export default Navbar;
