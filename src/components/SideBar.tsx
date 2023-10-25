import React from 'react';
import Links from './Links';
import ToogleButton from './ToogleButton';

const SideBar = () => {
  return (
    <div className='SideBar'>
        <div className="container">
            <Links />
        </div>
        <ToogleButton />
    </div>
  )
}

export default SideBar