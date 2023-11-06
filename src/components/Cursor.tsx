import React, { useEffect, useState } from 'react'

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
    });
    
    console.log(position);
  
    return (
    <div className='Cursor'>Cursor</div>
  )
}

export default Cursor