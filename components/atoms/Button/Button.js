import React from 'react';

const Button = ({ children, color }) => {
  return (
    <button
      className={`flex rounded-2xl h-8 text-light shadow font-bold text-xs py-2 px-3.5 items-center bg-${color} my-auto`}
    >
      {children}
    </button>
  );
};

export default Button;
