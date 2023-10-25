import React, { useState } from 'react';
import Links from './Links';
import ToggleButton from './ToggleButton';

const SideBar = () => {

    const [open, setOpen] = useState(false);

    // const variants = {
    //     open:,
    //     closed:,
    // }
  return (
    <div className='SideBar'>
        <div className="container">
            <Links />
            <ToggleButton setOpen={setOpen} />
        </div>
        
    </div>
  )
}

export default SideBar