import React from 'react';
import Button from '../styles/components/atoms/Button/Button';

const Landing = () => {
  return (
    <div className='flex justify-center'>
      <h1 className='text-red-600'>Master Challenge - Landing Page</h1>
      <div>
        <Button color='text-red'>Submit</Button>
      </div>
    </div>
  );
};

export default Landing;
