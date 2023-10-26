import React from 'react';

const Links = () => {

  const items = ['Home', 'Projects', 'Portfolio', 'About', 'Contact']
  return (
    <div className='Links'>
      {items.map((item, index) => {
        return <a key={index} href={`#${item}`}>{item}</a>
      })}
    </div>
  )
}

export default Links