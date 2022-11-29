import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/">
        <img
          className="rounded-circle recomend-img logo-img"
          src="./assets/logo.png"
          alt="Ibrahim Ahmat"
        />
      </NavLink>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            className="navbar-link"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="navbar-link"
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="navbar-link"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        {/* <li>
          <FaBars className="menubar" />
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
