import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import images from '../../constants/images';
import { useState } from 'react';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [height, setheight] = useState(20);
  const SSMenu = {
    top: `-${height}%`
  }

  const change = () => {
    setToggleMenu(true);
    setheight(0);
  }

  return(
    <nav className="navbar-main">
      <div className='navbar-logo'>
        <img className='navbar-logo-img' src={images.gericht} alt="restaurant logo" />
      </div>
      <ul className='navbar-links'>
        <li className='navbar-links-list-item'><a className='navbar-links-list-item-names' href="#home">Home</a></li>
        <li className='navbar-links-list-item'><a className='navbar-links-list-item-names' href="#about">About</a></li>
        <li className='navbar-links-list-item'><a className='navbar-links-list-item-names' href="#menu">Artistic View</a></li>
        <li className='navbar-links-list-item'><a className='navbar-links-list-item-names' href="#awards">Scientific View</a></li>
        <li className='navbar-links-list-item'><a className='navbar-links-list-item-names' href="#contact">Fun Activities</a></li>
      </ul>
      <div className="navbar-login">
        <a className='navbar-login-link' href="#login">Login/Register</a>
        <div />
        <a className='navbar-register-link' href="#register">Book Table</a>
      </div>
      <div className='navbar-small-screen'>
        <div className='hamburger'><GiHamburgerMenu fontSize='27' color='#fff' onClick={change}/></div>
        {toggleMenu && (
          <div className= 'navbar-small-screen-menu' style={SSMenu} >
            <div className="outline"><MdOutlineRestaurantMenu fontSize='27' onClick={() => setToggleMenu(false)} /></div>
            <ul className='navbar-small-screen-links'>
              <li className='navbar-links-small-list-item'><a className='navbar-links-list-item-names' href="#home">Home</a></li>
              <li className='navbar-links-small-list-item'><a className='navbar-links-list-item-names' href="#about">About</a></li>
              <li className='navbar-links-small-list-item'><a className='navbar-links-list-item-names' href="#menu">Menu</a></li>
              <li className='navbar-links-small-list-item'><a className='navbar-links-list-item-names' href="#awards">Awards</a></li>
              <li className='navbar-links-small-list-item'><a className='navbar-links-list-item-names' href="#contact">Contact</a></li>
            </ul>
          </div>
        )} 
      </div>
    </nav>
  )
  };

export default Navbar;
