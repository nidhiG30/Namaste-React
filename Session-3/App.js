import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element:
const heading1 = React.createElement(
  'h1',
  { id: 'title', key: 'h1' },
  'Namaste React',
);
console.log(heading1); // returns an object in the console. THUS, REACT ELEMENTS ARE JUST THE OBJECTS.

// Functional Component
const HeaderComponent = () => (
  <div>
    <h1>Namaste React Functional Component</h1>
    <h2>This is a h2 tag</h2>
  </div>
);
// We can omit "return" keyword if using arrow function syntax.

const root = ReactDOM.createRoot(document.getElementById('root')); // tells what is the root element inside our app.

// passing react element inside the root:
root.render(<HeaderComponent />);
