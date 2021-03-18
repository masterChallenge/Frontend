import Link from 'next/link';
import Logo from '@assets/Logo-Horizontal-BW.svg';

const Navbar = () => {
  return (
    <header className='w-full bg-primary flex justify-around items-center h-24'>
      <Link href='/'>
        <Logo className='m-5 cursor-pointer' />
      </Link>
      <nav className='text-white font-bold'>
        <ul className='flex'>
          <li className='m-6'>
            <a href='/home'>Challenges</a>
          </li>
          <li className='m-6'>
            <Link href='https://github.com/masterChallenge'>Project Repo</Link>
          </li>
          <li className='m-6'>
            <Link href='/'>Team</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
