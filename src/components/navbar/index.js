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
        <a className="nav-link" href="/projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact Me</a>
      </li>
    </ul> 
  )
}

export default Navbar;
