import React from 'react'

interface ButtonProps {
  setOpen: any,
}

const ToggleButton = ({setOpen}: ButtonProps) => {
  console.log(setOpen)
  return (
    <div>
      <button onClick={() => setOpen((prev: boolean) => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  )
}

export default ToggleButton