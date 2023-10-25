import React from 'react'

interface ButtonProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const ToggleButton = ({setOpen}: ButtonProps) => {
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