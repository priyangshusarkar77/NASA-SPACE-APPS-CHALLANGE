import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='footer-section'>
    <Newsletter />
    <FooterOverlay />
  </div>
);

export default Footer;

