import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  return(
    <div className='menu hero-text'>
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/juno">JUNO</a></li>
        <li><a href="/scientific">SCIENTIFIC</a></li>
        <li><a href="/aesthetic">AESTHETIC</a></li>
        <li><a href="#" class="btn">Lets play a agame</a></li>
      </ul>
      <div className="rest">
        <h1>Upload Raw Image</h1><br />
        <div className='laurels'>
          <input type="file" id="userId" name="userId" />
        </div>
        <p className='mam'>+</p>
        <h1>Upload Aesthetic Image</h1>
        <div className='laurels'>
          <input type="file" id="userId" name="userId" />
        </div>
        <p className='mam'>=</p>
        <h1 style={{
          marginRight: '3rem'
        }}>Processed Image</h1><br />
        <div className='laurels'>
          <input type="file" id="userId" name="userId" />
        </div>
      </div>
      
    </div>
  )
};

export default SpecialMenu;
