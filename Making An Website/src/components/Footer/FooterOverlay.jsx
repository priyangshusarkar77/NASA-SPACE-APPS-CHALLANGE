import React from 'react';
import { images } from "../../constants";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"
import './FooterOverlay.css';

const FooterOverlay = () => (
  <div className='overlay-section'>
    <div className="overlay">
      <div className="contact">
        <h2>Contact Us</h2>
        <p className='address'>9 W 53rd St. New York NY 10019, USA</p> 
        <p>+1 212-456-889</p>
        <p>+1 212-776-154</p>
      </div>
      <div className="message">
        <img className='name' src={images.gericht} alt="gericht" />
        <p>"The Best Way To Find Yourself Is To Lose Yourself In The</p>
        <p>Service Of Others"</p>
        <img className='img-spoon' src={images.spoon} alt="spoon" />
        <div className="social-handles">
          <FiFacebook className='facebook' />
          <FiTwitter className='twitter' />
          <FiInstagram className='instagram' />
        </div>
      </div>
      <div className="working-hours">
        <h2>Working Hours</h2>
        <p>Monday - Friday</p>
        <p>08:00 am - 12:00 am</p><br />
        <p>Saturday - Sunday</p>
        <p>07:00 am - 11:00 pm</p>
      </div>
    </div>
    <center><p className='rights'>2021 Gericht. All Rights Reserved</p></center>
  </div>
);

export default FooterOverlay;
