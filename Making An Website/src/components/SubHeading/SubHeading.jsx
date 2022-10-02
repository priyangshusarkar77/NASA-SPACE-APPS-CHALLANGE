import React from 'react';
import images from '../../constants/images';
import './SubHeading.css';

const SubHeading = (props) => (
  <div style={{display: props.disstyle, alignItems: 'center', flexDirection: 'column'}}>
    <p className='title' style={{fontSize: `${props.size}px`, paddingBottom: `${props.padding}rem` }}>{props.title}</p>
    <img src={images.spoon} alt='spoon img' />
  </div>
  
);

export default SubHeading;
