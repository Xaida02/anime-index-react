import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <a className="logo-container" href="/">
          <h4 className="logo" translate="no">
            Anime Index
          </h4>
        </a>
        <ul className="nav-links">
          <li>
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              about
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
