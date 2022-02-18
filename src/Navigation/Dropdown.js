import React from 'react';
import {Link} from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/HomePage';
import CloseIcon from '@mui/icons-material/Close';



const Dropdown = ({handleClose}) => {
   
    const handleClick = () => {
        handleClose();
    }
    return (
        <div id="DropDown" className='drop-down'>
            <CloseIcon className='close-icon' fontSize='medium' onClick={handleClick}></CloseIcon>
            <Link onClick={handleClick} to='/' element={<Home />}>Home</Link>
            <Link onClick={handleClick} to="/Contact" element={<Contact />}>
                Contact
            </Link>
            <Link onClick={handleClick} to="/About" element={<About />}>
                About
            </Link>
        </div>
    )
}

export default Dropdown;