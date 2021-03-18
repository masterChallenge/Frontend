import Button from '@components/atoms/Button/Button';
import DifficultyLabel from '@components/atoms/DifficultyLabel/DifficultyLabel';
import Icon from '@components/atoms/Icon/Icon';
import Image from '@components/atoms/Image/Image';
import React from 'react';
import { useRouter } from "next/router";

const ChallengeCard = ({ challengeId, name, difficulty, image, attempts, estatus }) => {
  
  const router = useRouter();

  const handleRedirect = (e, id) => {
    e.preventDefault();
    router.push(`/challenge/${id}`);
  };
  
  return (
    <div
      className={`h-36 w-96 flex px-4 py-7 rounded-lg ${
        estatus === 'completed' ? 'bg-primary-light' : 'bg-secondary-lightest'
      } `}
    >
      <div className='mr-6'>
        <Image url={image} />
      </div>
      <div>
        <div className='flex items-center mb-2.5'>
          <h2
            className={`font-bold text-lg mr-2 ${
              estatus != 'completed' && 'text-primary-lightest'
            }`}
          >
            {name}
          </h2>
          {estatus == 'completed' && <Icon />}
        </div>
        <DifficultyLabel difficulty={difficulty} className='w-11'>
          {difficulty}
        </DifficultyLabel>
        <div className='flex mt-2'>
          <span
            className={`mr-9 text-lg ${
              estatus != 'completed' && 'text-primary-lightest'
            } `}
          >
            Attempts: {attempts}{' '}
          </span>
          <Button color='secondary-light' onClick={(e) => handleRedirect(e, challengeId)}>
            {estatus === 'completed' ? 'Retry' : 'Go'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
