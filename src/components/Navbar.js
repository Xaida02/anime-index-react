import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link className="logo-container" to="/">
          <h4 className="logo" translate="no">
            Anime Index
          </h4>
        </Link>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
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
