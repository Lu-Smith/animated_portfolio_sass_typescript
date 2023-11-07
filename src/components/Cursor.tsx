import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const Cursor = () => {

    const [ position, setPosition ] = useState({x:0, y:0});
  
     useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setPosition({x: e.clientX, y: e.clientY})
        }

        window.addEventListener("mousemove", mouseMove);
     
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);
    
    console.log(position);
  
    return (
    <motion.div 
    className='Cursor'
    animate={{ x: position.x, y: position.y}}>
        Cursor
    </motion.div>
  )
}

export default Cursor