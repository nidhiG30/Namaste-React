import { useEffect, useState } from 'react';


const Logo = () => (
  <a href='/'>
    <img
      className='logo'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQFELK3a9H16QTturOu6HihNMpAp5WbqN-Q&usqp=CAU'
      alt='logo'
    />
  </a>
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("useEffect");
  }, []) // 'useEffect' with Empty Dependency Array: "useEffect" gets called ONLY ONCE after initial render.

  console.log("render");

  return (
    <div className='header'>
      <Logo />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
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
