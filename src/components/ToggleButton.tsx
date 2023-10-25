import React from 'react';

interface ButtonProps {
  setOpen: boolean; // setOpen is a boolean
}

const ToggleButton = ({ setOpen }: ButtonProps) => {
  return (
    <div>
      <button onClick={() => setOpen = !setOpen}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default ToggleButton;
