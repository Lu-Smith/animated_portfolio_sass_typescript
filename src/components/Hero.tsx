import React from 'react';
import Witch from '../assets/Little Witch.png';

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="container">
            <img src={Witch} alt="Little Witch" />
        </div>
    </div>
  )
}

export default Hero