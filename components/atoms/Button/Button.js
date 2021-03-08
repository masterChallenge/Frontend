import React from "react";

const Button = ({ children, color }) => {
  return (
    <button
      className={`flex rounded-2xl h-9 text-light shadow font-normal text-lg py-2 px-10 items-center bg-${color} my-auto`}
    >
      {children}
    </button>
  );
};

export default Button;
