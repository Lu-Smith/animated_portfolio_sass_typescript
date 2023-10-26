import React from 'react';
import Witch from '../assets/Little Witch.png';
import Scroll from '../assets/scroll.png';


const Hero = () => {
  return (
    <div className='Hero'>
        <div className="wrapper">
            <div className="textContainer">
                <h2>Luna Smith</h2>
                <h1>Web developer and Artist</h1>
                <div className='buttons'>
                    <button>See the Latest Works</button>
                    <button>Contact Me</button>
                </div>
                <img src={Scroll} alt="scroll" />
            </div>
        </div>
        <div className="imageContainer">
            <img src={Witch} alt="Little Witch" />
        </div>
    </div>
  )
}

export default Hero