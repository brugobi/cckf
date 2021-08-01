import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <div className="navbar-item">
          <div className="brand">CCKF</div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <Link to="/Home">Home</Link>
        </div>
        <div className="navbar-item">
          <Link to="/About">About</Link>
        </div>
        <div className="navbar-item">
          <Link to="/Classes">Classes</Link>
        </div>
        <div className="navbar-item">
          <Link to="/Gallery">Gallery</Link>
        </div>
        <div className="navbar-item">
          <Link to="/Quote">Quote</Link>
        </div>
        <div className="navbar-item">
          <Link to="/Contact">Contact us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
