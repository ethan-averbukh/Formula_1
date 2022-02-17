import React from "react";
import {Link} from 'react-router-dom';
import Home from "../Home/HomePage";
import Contact from "../Contact/Contact";
import About from "../About/About";


const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-logo">
          <img src="" alt="" />
      </div>
      <div className="nav-bar-title">
        <span>Formula 1</span>
      </div>
      <div className="nav-bar-menu">
        <Link to='/' element={<Home />}>Home</Link>
        <Link to="/Contact" element={<Contact />}>
          Contact
        </Link>
        <Link to="/About" element={<About />}>
          About
        </Link>
      </div>
    </div>
  );
};


export default NavBar;