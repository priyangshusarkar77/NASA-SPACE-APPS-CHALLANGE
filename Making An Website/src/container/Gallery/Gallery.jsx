import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Gallery.css';

const galleryPics = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]; 

const Gallery = () => {

  const scrollRef= React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left'){
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft += 300;
    }
  }

  return(
    <div className='gallery-section'>
      <div className="gallery-content">
        <SubHeading title='Instagram' size='18' />
        <h1>Photo Gallery</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacus lacus, condimentum non justo id, ullamcorper aliquet metus. Integer neque tellus, dignissim id mauris vitae, auctor interdum nisl.</p>
        <button type='button' className='gallery-button'>View More</button>
      </div>
      <div className="gallery-photos-section">
        <div className="gallery-photos" ref={scrollRef}>
          {galleryPics.map((image, index) => (
            <div className="actual-pics">
              <img src={image} alt="gallery image" />
              <BsInstagram className='insta-icon' />
            </div>
          ))}
        </div>
        <div className="control-buttons">
          <BsArrowLeftShort className='scroll-left-button' OnClick={() => scroll('left')} />
          <BsArrowRightShort className='scroll-right-button' OnClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery;
