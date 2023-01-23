// Functional Component
const Logo = () => (
  <a href='/'>
    <img
      className='logo'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQFELK3a9H16QTturOu6HihNMpAp5WbqN-Q&usqp=CAU'
      alt='logo'
    />
  </a>
);

const Header = () => {
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
    </div>
  );
};

export default Header;