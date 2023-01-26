import { useState } from 'react';
import UpdatedLogo from "../../assets/img/khaana.png";


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

  return (
    <div className='header'>
      <Logo />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li><a href="/about">About</a></li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
