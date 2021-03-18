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
  const fs = require('fs');
  const dir = './jsons/files';
  let challenges = {}
  challenges['data'] = []
  
  fs.readdirSync(dir).forEach((file) => {
    let contents = fs.readFileSync(`${dir}/${file}`, 'utf8')

    const dataFromFile = JSON.parse(contents)

    challenges.data.push({
      id: dataFromFile.id,
      name: dataFromFile.name || 'challenge',
      difficulty: dataFromFile.difficulty,
      image: dataFromFile.challenge.image,
      attempts: 0,
      estatus: 'incomplete'
    })
    
  })

  return challenges;
};

export default Home;
