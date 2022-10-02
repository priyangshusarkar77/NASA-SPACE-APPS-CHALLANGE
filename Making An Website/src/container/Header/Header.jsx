import React, { useRef } from 'react';
import './Header.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { images } from '../../constants';
import Rellax from 'rellax';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';


const galleryPics = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery01,images.gallery02];
function Header() {

  const scrollRef= useRef(null);
  const scroll = (direction) => {
    if (direction === 'left'){
      scrollRef.scrollLeft -= 100;
    }
    else{
      scrollRef.scrollLeft += 100;
    }
  }

  return(
    <>
    <div class="wrapper">






      <div class="parallax__group">
        <div class="parallax__layer sky"></div>
        <div class="parallax__layer bushes"></div>
        <div class="parallax__layer water"></div>
        <div class="parallax__layer people1"></div>
        <div class="parallax__layer people2"></div>
        <div class="parallax__layer people3"></div>
        <div class="parallax__layer hero-text">
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/juno">JUNO</a></li>
            <li><a href="scientific">SCIENTIFIC</a></li>
            <li><a href="/aesthetic">AESTHETIC</a></li>
            <li><a href="#" class="btn">Lets play a agame</a></li>
          </ul>
          <div class="year-container">
            <h1>THE GIANTS OF SOLAR SYSTEM</h1>
          </div>
        </div>
      </div>
      <div class="parallax__group info-container">
        <div className="images">
          <h1 className='jovian'>JOVIAN</h1>
          <p className='jovi'>The four Jovian planets — Jupiter, Saturn, Uranus, and Neptune — hint at some of the remarkable attributes that set them apart from the smaller, rocky terrestrial planets. Also called “giant planets,” the Jovian planets occupy orbits in the outer solar system at distances ranging from 5(Jupiter) to 30(Neptune) times the Earth’s distance from the Sun.
Unlike the terrestrial planets that make up our inner solar system — Mercury, Venus, Earth, and Mars — the Jovian planets do not have solid surfaces. Instead, they are composed primarily of hydrogen and helium, with traces of methane, ammonia, water, and other gases in their atmospheres.</p>
          <img src="https://www.pngall.com/wp-content/uploads/7/Jupiter-PNG-Image-HD.png" alt="jupiter" className='jupiter' />
          <img src="https://i.ibb.co/6D6m8q5/Planet-saturn-3d-model-lwo-lw-lws-removebg-preview.png" alt="saturn" className='saturn'/>
          <img src="https://i.ibb.co/yq02ND2/uranus.png" alt="uranus" className='uranus' />
          <img src="https://i.ibb.co/kc8nS0z/image-2022-10-01-125503674-removebg-preview.png" alt="neptune" className='neptune'/>
        </div>


        <div className="objective">
          <h1>Objective</h1>
          <p>JunoCam (or JCM) is the visible-light camera/telescope onboard NASA's Juno spacecraft currently orbiting Jupiter. The camera is operated by the JunoCam Digital Electronics Assembly (JDEA). Both the camera and JDEA were built by Malin Space Science Systems. JunoCam takes a swath of imaging as the spacecraft rotates; the camera is fixed to the spacecraft, so as it rotates, it gets one sweep of observation. It has a field of view of 58 degrees with four filters (3 for visible light).</p>
        </div>


        <div className="planets">
          <div className="jupi">
            <img src="https://i.gifer.com/Ow7B.gif" alt="jupi" />
            <div className="content content0">
              <h1 className='head'>JUPITER</h1>
              <p>Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus, and it has been observed since prehistoric times. It was named after the Roman god Jupiter, the king of the gods.<br /><br />
  Jupiter is primarily composed of hydrogen, but helium constitutes one-quarter of its mass and one-tenth of its volume. It probably has a rocky core of heavier elements, but, like the other giant planets in the Solar System, it lacks a well-defined solid surface.</p>
            </div>  
          </div>
          <div className="block">
            <h1>hihihihihihihi</h1>
          </div>
          <div className="sati">
            <div className="content content1">
              <h1 className='head'>SATURN</h1>
              <p>Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.
  Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings – made of chunks of ice and rock – but none are as spectacular or as complicated as Saturn's.
  <br></br><br></br>
  Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.The second largest planet in the solar system, Saturn is a "gas giant" composed primarily of hydrogen and helium. But it's best known for the bright, beautiful rings that circle its equator. The rings are made up of countless particles of ice and rock that each orbit Saturn independently.</p>
            </div>
            <img src="https://thumbs.gfycat.com/UntimelyGrimyBlackfish-size_restricted.gif" alt="sati" />  
          </div>
          <div className="ura">
            <img src="https://www.schoolsobservatory.org/sites/default/files/astro/neptune_r.gif" alt="ura" />
            <div className="content content2">
              <h1 className='head'>URANUS</h1>
              <p>Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. Uranus is the only planet whose equator is nearly at a right angle to its orbit, with a tilt of 97.77 degrees – possibly the result of a collision with an Earth-sized object long ago. This unique tilt causes the most extreme seasons in the solar system.</p>
            </div>
          </div>
          <div className="nepi">
            <div className="content content3">
              <h1 className='head'>NEPTUNE</h1>
              <p>Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.
  <br></br><br />
  The Latest
  New Study Finds Unexpected Temperature Changes on Neptune
  Hubble's Grand Tour of the Outer Solar System
  More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.
  <br /><br />
  NASA's Voyager 2 is the only spacecraft to have visited Neptune up close. It flew past in 1989 on its way out of the solar system.</p>
            </div>
            <img src="https://thumbs.gfycat.com/GoodGlisteningDutchshepherddog-size_restricted.gif" alt="nept" />
          </div>
        </div>
      </div>


      


      
    </div>
    </> 
  )
} 

export default Header;
