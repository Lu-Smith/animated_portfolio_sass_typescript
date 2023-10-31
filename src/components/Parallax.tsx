import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxType {
    type: string,
}

const Parallax = ({ type }: ParallaxType) => {

  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const yBg = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  )

  const yText = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '500%']
  )

  return (
    <div 
    className='Parallax' 
    ref={ref}
    style={{background: type === 'projects' ? 
    '$standardSection-background ': '$parallaxSection-background'}}>
        <motion.h1 style={{y: yText}}>{type === 'projects' ? 'What I Do?' : 'What I Did?'}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div 
        className="planets"
        style={{
          y: yBg
          }}></motion.div>
        <motion.div 
        className="stars"
        style={{x: yBg}}></motion.div>
    </div>
  )
}

export default Parallax