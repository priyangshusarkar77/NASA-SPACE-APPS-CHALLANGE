import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='chef-section'>
    <img className='chef-image' src={images.chef} alt="chef photo" />
    <div className="chef-content">
      <SubHeading title="Chef's Word" size='18' />
      <h1>What We Believe In</h1>
      <p className='chef-word'><span><img className='quote' src={images.quote} alt="quote image" /></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p className='chef-name'>Kevin Luo</p>
      <p className='chef-word'>Chef & Founder</p>
      <img className='chef-sign' src={images.sign} alt="chef-sign" />
    </div>
  </div>
);

export default Chef;
