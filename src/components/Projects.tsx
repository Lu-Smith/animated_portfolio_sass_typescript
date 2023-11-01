import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div className='Projects'>
        <motion.div className="textContainer">
            <p>
                I focus on bringing new ideas to life
                  <br /> and creating art!
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src="" alt="" />
                <h1><strong>Unique</strong> Ideas</h1>
            </div>
            <div className="title">
                <h1><strong>For Your</strong> Buisness</h1>
                <button>What I Do?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer">
            
        </motion.div>
    </motion.div>
  )
}

export default Projects