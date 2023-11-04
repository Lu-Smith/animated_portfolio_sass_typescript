import React from 'react';
import { motion } from 'framer-motion';
import Dream from '../assets/dream.png';

const variants = {
    intial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Projects = () => {
  return (
    <motion.div 
    className='Projects' 
    variants={variants} 
    initial='intial'
    whileInView='animate'>
        <motion.div 
        className="textContainer"  
        variants={variants}>
            <p>
                I focus on bringing new ideas to life
                  <br /> and creating art!
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src={Dream} alt="dream" />
                <h1><strong>Unique</strong> Ideas</h1>
            </div>
            <div className="title">
                <h1><strong>For Your</strong> Buisness</h1>
                <button>What I Do?</button>
            </div>
        </motion.div>
        <motion.div 
        className="listContainer"
        variants={variants} >
            <motion.div className="box" whileHover={{background: 'lightgrey', color: 'black'}}>
                <h2>Project</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa, odio similique reiciendis animi debitis at necessitatibus explicabo excepturi voluptate dignissimos ipsa. Eos modi excepturi voluptatum ullam quos ea culpa?</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: 'lightgrey', color: 'black'}}>
                <h2>Project</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa, odio similique reiciendis animi debitis at necessitatibus explicabo excepturi voluptate dignissimos ipsa. Eos modi excepturi voluptatum ullam quos ea culpa?</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: 'lightgrey', color: 'black'}}>
                <h2>Project</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa, odio similique reiciendis animi debitis at necessitatibus explicabo excepturi voluptate dignissimos ipsa. Eos modi excepturi voluptatum ullam quos ea culpa?</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Projects