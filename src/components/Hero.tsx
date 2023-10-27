import React from 'react';
import Witch from '../assets/Little Witch.png';
import Scroll from '../assets/scroll.png';
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}


const Hero = () => {
  return (
    <div className='Hero'>
        <div className="wrapper">
            <motion.div 
            className="textContainer" 
            variants={textVariants}
            initial="initial"
            animate="animate">
                <motion.h2 variants={textVariants}>Luna Smith</motion.h2>
                <motion.h1 variants={textVariants}>Web developer and Artist</motion.h1>
                <motion.div variants={textVariants} className='buttons'>
                    <motion.button variants={textVariants}>See the Latest Works</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} src={Scroll} alt="scroll" />
            </motion.div>
        </div>
        <div className="slidingTextContainer">
            Creator of code-based masterpieces and fine art.
        </div>
        <div className="imageContainer">
            <img src={Witch} alt="Little Witch" />
        </div>
    </div>
  ) 
}

export default Hero