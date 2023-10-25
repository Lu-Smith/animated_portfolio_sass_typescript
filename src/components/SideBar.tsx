import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Links from './Links';
import ToggleButton from './ToggleButton';

const SideBar = () => {

    const [open, setOpen] = useState(false);

    // const variants = {
    //     open:,
    //     closed:,
    // }
  return (
    <motion.div className='SideBar'>
        <motion.div className="container">
            <Links />
            <ToggleButton setOpen={open} />
        </motion.div>
        
    </motion.div>
  )
}

export default SideBar