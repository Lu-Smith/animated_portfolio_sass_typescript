import React from 'react';
import Links from './Links';
import ToggleButton from './ToggleButton';

const SideBar = () => {
  return (
    <div className='SideBar'>
        <div className="container">
            <Links />
        </div>
        <ToggleButton />
    </div>
  )
}

export default SideBar