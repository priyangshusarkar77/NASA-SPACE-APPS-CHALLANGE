import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const vidref = React.useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const HandleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if(playVideo){
      vidref.current.pause();
    }
    else{
      vidref.current.play();
    }
  }

  return(
    <div className='video-section'>
      <video className='actual-video' src={meal} ref={vidref} typeof="video/mp4" loop muted></video>
      <div className="video">
        <div className="video-button" onClick={HandleVideo}>
          {playVideo ? <BsPauseFill color='#fff' fontSize={40} /> : <BsFillPlayFill color='#fff' fontSize={40} />}
        </div>
      </div>
    </div>
    
  )
}

export default Intro;
