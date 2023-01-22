import React from 'react';
import ReactDOM from 'react-dom/client';

// Functional Component
const Title = () => (
  <h1 id='title' key='h2'>
    Khaana
  </h1>
);

// Composing Components
const HeaderComponent = () => {
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

const AppLayout = () => {
  return {};
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// passing react element inside the root:
root.render(<HeaderComponent />);
