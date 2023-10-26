import React from 'react';
import { NavLink } from 'react-dom';

const Links = () => {

  const items = ['Home', 'Projects', 'Portfolio', 'About', 'Contact']
  return (
    <div className='Links'>
      {items.map((item, index) => {
        return <NavLink key={index}>{item}</NavLink>
      })}
    </div>
  )
}

export default Links