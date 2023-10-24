import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    visible: { opacity: 1},
    hidden: { opacity: 0},
}

const Test = () => {
  return (
    <div className='course'>
        <motion.div 
        className="box" 
        variants={variants}
        initial='hidden'
        animate='visible'
        transition={{duration: 2, delay: 2}}>
        </motion.div>
    </div>
  )
}

export default Test