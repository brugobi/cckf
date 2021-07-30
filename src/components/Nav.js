import React from 'react';

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
          <a href="/">Home</a>
        </div>
        <div className="navbar-item">
          <a href="/">Quote</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
