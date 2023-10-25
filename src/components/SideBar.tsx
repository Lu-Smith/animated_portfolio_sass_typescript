import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Links from './Links';
import ToggleButton from './ToggleButton';

const SideBar = () => {

    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: 'circle(1200px at 40px 40px)',
            transition: {
                type: 'spring',
                stiffnes: 20,
            }
        },
        closed: {
            clipPath: 'circle(20px at 30px 30px',
            transition: {
                delay: 0.5,
                type: 'spring', 
                stiffnes: 400,
                damping: 40,
            }
        },
    }

  return (
    <motion.div 
    className='SideBar'
    animate={open ? 'open' : 'closed'}>
        <motion.div 
        className="container"
        variants={variants}>
            <Links />
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    </motion.div>
  )
}

export default SideBar