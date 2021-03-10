import Button from '@components/atoms/Button/Button';
import DifficultyLabel from '@components/atoms/DifficultyLabel/DifficultyLabel';
import Icon from '@components/atoms/Icon/Icon';
import Image from '@components/atoms/Image/Image';
import React from 'react';

const ChallengeCard = ({ estatus }) => {
  return (
    <div
      className={`h-36 w-96 flex px-4 py-7 rounded-lg ${
        estatus === 'completed' ? 'bg-primary-light' : 'bg-secondary-lightest'
      } `}
    >
      <div className='mr-6'>
        <Image />
      </div>
      <div>
        <div className='flex items-center mb-2.5'>
          <h2
            className={`font-bold text-lg mr-2 ${
              estatus != 'completed' && 'text-primary-lightest'
            }`}
          >
            Challenge Name
          </h2>
          <Icon />
        </div>
        <DifficultyLabel color='primary' className='w-11'>
          Easy
        </DifficultyLabel>
        <div className='flex mt-2'>
          <span className='mr-9 text-lg'>Attempts: 0</span>
          <Button color='secondary-light'>
            {estatus === 'completed' ? 'Retry' : 'Go'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
