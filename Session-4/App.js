import React from 'react';
import ReactDOM from 'react-dom/client';

// Functional Component
const Title = () => (
  <a href='/'>
    <img
      className='logo'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQFELK3a9H16QTturOu6HihNMpAp5WbqN-Q&usqp=CAU'
      alt='logo'
    />
  </a>
);

// Composing Components
const Header = () => {
  return (
    <div className='header'>
      <Title />
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

const Body = () => {
  return (
    <h4>Body</h4>
  )
}

const Footer = () => {
  return (
    <h4>Footer</h4>
  )
}

const AppLayout = () => {
  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>    
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// passing react element inside the root:
root.render(<AppLayout />);
