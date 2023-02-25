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
          <li className='px-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-2'>
            <Link to='/about'>About</Link>
          </li>
          <li className='px-2'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='px-2'>
            <Link to='/instamart'>Instamart</Link>
          </li>
          <li className='px-2'>
            <Link to='/cart'>Cart - {cartItems.length} items</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? '✅' : '🔴'}</h1>
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
