import React from 'react';
import { SubHeading } from '../../components';
import './Newsletter.css';

const Newsletter = () => (
  <div className='newsletter-section'>
    <SubHeading title='Newsletter' size='18' disstyle='flex' padding='0.5' />
    <h1>Subscribe To Our Newsletter</h1>
    <p className='point'>And Never Miss Latest Updates!</p>
    <div className="search">
      <input type="text" />
      <button type='button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
