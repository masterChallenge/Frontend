import React from 'react';

const Button = ({ children }) => {
  return (
    <button
      className='flex rounded-2xl w-36 h-9 text-light shadow font-normal text-lg py-2 px-10 items-center'
      my-auto
    >
      {children}
    </button>
  );
};

export default Button;
