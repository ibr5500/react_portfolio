import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <Link to="/">
      <img className="rounded-circle recomend-img logo-img" src="./assets/logo.png" alt="Ibrahim Ahmat" />
    </Link>
    <ul className="nav-list">
      <li className="nav-item">
        <Link className="navbar-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        Works
        {/* <a className="navbar-link">Works</a> */}
      </li>
      <li className="nav-item">
        Contact
        {/* <a className="navbar-link">Contact</a> */}
      </li>
    </ul>
  </nav>
);

export default Navbar;
