import { useState, useContext } from 'react';
import UpdatedLogo from '../assets/img/khaana.png';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Logo = () => (
  <a href='/'>
    <img
      data-testid='logo'
      className='h-28 p-2'
      src={UpdatedLogo} // Instead of CDN link, we used locally stored image
      alt='logo'
    />
  </a>
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items); // This hook will help to use the store. It directly gives access to the store.

  return (
    <div className='flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50 '>
      <Logo />
      <div className='nav-items'>
        <ul className='flex py-10'>
          <Link to='/'>
            <li className='px-2'>Home</li>
          </Link>

          <Link to='/about'>
            <li className='px-2'>About</li>
          </Link>

          <Link to='/contact'>
            <li className='px-2'>Contact</li>
          </Link>

          <Link to='/instamart'>
            <li className='px-2'>Instamart</li>
          </Link>

          <Link to='/cart'>
            <li className='px-2' data-testid='cart'>
              Cart - {cartItems.length} items
            </li>
          </Link>
        </ul>
      </div>
      <h1 data-testid='online-status'>{isOnline ? '✅' : '🔴'}</h1>
      <span className='p-10 font-bold text-red-900'>{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
