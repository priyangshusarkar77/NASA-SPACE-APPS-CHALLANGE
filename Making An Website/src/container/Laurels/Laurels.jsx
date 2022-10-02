import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const Laurels = () => (
  <div className='laurel-section hero-text'>
    <ul>
      <li><a href="/">HOME</a></li>
      <li><a href="/juno">JUNO</a></li>
      <li><a href="/scientific">SCIENTIFIC</a></li>
      <li><a href="/aesthetic">ARTISTIC</a></li>
      <li><a href="#" class="btn">Lets play a agame</a></li>
    </ul>
    <h1>Upload Raw Image</h1><br />
    <div className='laurels'>
      <input type="file" id="userId" name="userId" />
    </div>
    <p className='mam'>=</p>
    <h1>Processed Image</h1><br />
    <div className='laurels'>
      <input type="file" id="userId" name="userId" />
    </div>
  </div>
);

export default Laurels;
