import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Home from "./../Home/HomePage";
import Contact from "./../Contact/Contact";
import About from "./../About/About";
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from "./Dropdown";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (event) => {
    setIsOpen(true);
  }
  const closeDropDown = () => {
    setIsOpen(false);
  }
  return (
    <div className="nav-bar">
      <div className="nav-bar-logo">
        <img src="" alt="" />
      </div>
      <div className="nav-bar-title">
        <span>Formula 1</span>
      </div>
      <div className="nav-bar-menu">
        <MenuIcon
            id="Hamburger-Menu" 
            fontSize="large" 
            className="nav-bar-menu-icon" 
            onClick={handleClick} />
        {isOpen && <Dropdown handleClose={closeDropDown}/>}
        <div className="nav-bar-menu-items">
          <Link to='/' element={<Home />}>Home</Link>
          <Link to="/Contact" element={<Contact />}>
            Contact
          </Link>
          <Link to="/About" element={<About />}>
            About
          </Link>
        </div>
      </div>
    </div>
  );
};


export default NavBar;