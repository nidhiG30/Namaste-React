import { useState } from 'react';
import UpdatedLogo from '../assets/img/khaana.png';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

const Logo = () => (
  <a href='/'>
    <img
      className='logo'
      src={UpdatedLogo} // Instead of CDN link, we used locally stored image
      alt='logo'
    />
  </a>
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  return (
    <div className='header'>
      <Logo />
      <div className='nav-items'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li><Link to='/contact'>Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
