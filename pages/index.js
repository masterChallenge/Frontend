import React from 'react';
import Button from '@components/atoms/Button/Button';
import Navbar from '@components/molecules/Navbar/Navbar';
import LandingImage from '@assets/Landing-image.svg';
import { useRouter } from 'next/router';

const Landing = () => {
  const router = useRouter();

  const handleRedirect = (e) => {
    e.preventDefault();
    router.push('/challenge/1');
  };

  return (
    <>
      <Navbar />
      <div className='fixed flex w-full pl-10 pt-20 bg-primary'>
        <div>
          <h1 className='text-6xl font-bold w-3/6 inline text-primary-lightest'>
            Welcome to <br /> Master Challenges!
          </h1>
          <p className='mb-20 text-lg  mt-6 text-primary-lightest'>
            A platform to improve your CSS Skills
          </p>
          <Button color='secondary' onClick={handleRedirect}>
            See challenges
          </Button>
        </div>
        <div className='w-3/6'>
          <LandingImage className='ml-28' />
        </div>
      </div>
    </>
  );
};

export default Landing;
