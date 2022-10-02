import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='about-section hero-text'>
    <ul>
      <li><a href="/">HOME</a></li>
      <li><a href="/juno">JUNO</a></li>
      <li><a href="/scientific">SCIENTIFIC</a></li>
      <li><a href="/aesthetic">ARTISTIC</a></li>
      <li><a href="#" class="btn">Lets play a agame</a></li>
    </ul>
    
    
    
    <div className="about-content">
      <div className="aim">
        <h1>Aim</h1>
        <p>The Juno mission aims to peer beneath the clouds around Jupiter for the first time to learn more about the planet's atmosphere.
<br /><br />
How much water the planet contains is also a key figure, because it will tell scientists a lot about when and how the planet formed.</p>  
      </div>
      <img className='aim_img' src='https://scitechdaily.com/images/NASA%E2%80%99s-Juno-spacecraft.jpg' alt="spoon photo" />
    </div>
    
    <div className="numbers">
        <center><img className='numbers_img' src="https://d2xkkdgjnsfvb0.cloudfront.net/Vault/Thumb?VaultID=36050&Interlaced=1&Mode=R&ResX=960&OutputFormat=jpg&Quality=75&ts=1656511106" alt="numbers" /></center>
    </div>
  </div>
);

export default AboutUs;
