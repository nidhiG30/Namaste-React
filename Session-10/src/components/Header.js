import { useState } from 'react';
import UpdatedLogo from '../assets/img/khaana.png';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

const Logo = () => (
  <a href='/'>
    <img
      className='h-28 p-2'
      src={UpdatedLogo} // Instead of CDN link, we used locally stored image
      alt='logo'
    />
  </a>
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  return (
    <div className='flex justify-between bg-pink-50 shadow-lg'>
      <Logo />
      <div className='nav-items'>
        <ul className='flex py-10'>
          <li className='px-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-2'>
            <Link to='/about'>About</Link>
          </li>
          <li className='px-2'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='px-2'>Cart</li>
          <li className='px-2'>
            <Link to='/instamart'>Instamart</Link>
          </li>
        </ul> 
      </div>
      <h1>{isOnline ? '✅' : '🔴'}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
