import React from 'react';
import ReactDOM from 'react-dom/client';

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

// Composing Components
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

const twoJoes = {
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vzx0lioqi9xvk49kl49b",
  name: "Two Joes",
  cuisines: ["Tandoor", "Arabian"],
  rating: "4.2"
}

const RestaurantCard = () => {
  return (
    <div className='card'>
      <img src={twoJoes.image}/>
      <h2>{twoJoes.name}</h2>
      <h3>{twoJoes.cuisines.join(", ")}</h3>
      <h4>{twoJoes.rating} stars</h4>

    </div>
  )
}

const Body = () => {
  return (<div>
    <RestaurantCard/>
  </div>);
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// passing react element inside the root:
root.render(<AppLayout />);
