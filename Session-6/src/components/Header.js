import {useState} from "react";

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
  const [title, setTitle] = useState("Khaana");

  return (
    <div className='header'>
      <Logo />

      <h1>{title}</h1>
      <button onClick={() => setTitle("Foods")}>Change Title</button> {/** Change in state variable */}

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