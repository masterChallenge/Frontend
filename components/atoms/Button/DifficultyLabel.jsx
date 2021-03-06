import React from 'react';

const DifficultyLabel = ({ children, color }) => {
  return (
    <div
      className={`flex p-2 h-8 bg-${color} text-light rounded-lg text-xs itmens-center  font-light`}
    >
      {children}
    </div>
  );
};

export default DifficultyLabel;
