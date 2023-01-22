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
    <div>
      {Title()}
      <h2>Namaste React Functional Component</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')); 

// passing react element inside the root:
root.render(<HeaderComponent />);


