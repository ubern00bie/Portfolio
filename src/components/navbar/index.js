import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <ul className="nav">
      <li className="nav-item">
        <Link
        to="/about"
        className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
        About
        </Link>
      </li>
      <li className="nav-item">
      <Link
        to="/about"
        className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
        Projects
        </Link>
      </li>
      <li className="nav-item">
      <Link
        to="/about"
        className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
        Contact Me
        </Link>
      </li>
    </ul> 
  )
}

export default Navbar;
