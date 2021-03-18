import ChallengeCard from '@components/molecules/ChallengeCard/ChallengeCard';
import Navbar from '@components/molecules/Navbar/Navbar';
import React from 'react';
import { getAllChallenges } from '../utils/challenges/getAll';

const Home = (challenges) => {
  
  return (
    <>
      <Navbar />
      <div className='p-10'>
        <h1 className='text-4xl	font-bold'>Good Evening!</h1>
        <p className='text-lg mt-4'>
          There’s some challegens to improve your skills!
        </p>
        <div className='mt-10 grid grid-cols-3 gap-8	'>
          {challenges.data?.map((item) => (
            <ChallengeCard
              key={item.id}
              challengeId={item.id}
              name={item.name}
              difficulty={item.difficulty}
              image={item.image}
              attempts={item.attempts}
              estatus={item.estatus}
            />
          ))}
        </div>
      </div>
    </>
  );
};

Home.getInitialProps = async (ctx) => {
  const challenges = {}
  challenges['data'] = []
  const json = await getAllChallenges()
  challenges.data.push(...json)
  return challenges;
};

export default Home;
