import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import "./FindUs.css";

const FindUs = () => (
  <div className='findus-section'>
    <div className="findus-content">
      <SubHeading title='Contact' size='18' />
      <h1>Find Us</h1>
      <p>Lane Ends Bungalow, Whatcroft Wall Lane, Near Rishi Nagar Ludhiana</p>
      <h3>Opening Hours</h3>
      <p>Monaday - Friday: 10:00 am - 2:00 pm<br />Saturday - Sunaday: 10:00 am - 3:00 pm</p>
      <button type='button'>Visit Us</button>  
    </div>
    <div className="findus-photo">
      <img src={images.findus} alt="findus photo" />
    </div>    
  </div>
);

export default FindUs;
