import React from 'react';

interface ParallaxType {
    type: string,
}

const Parallax = ({ type }: ParallaxType) => {
  return (
    <div 
    className='Parallax' 
    style={{background: type === 'projects' ? 
    '$standardSection-background ': '$parallaxSection-background'}}>
        <h1>{type === 'projects' ? 'What I Do?' : 'What I Did?'}</h1>
        <div className="mountains"></div>
        <div className="planets"></div>
        <div className="stars"></div>
    </div>
  )
}

export default Parallax