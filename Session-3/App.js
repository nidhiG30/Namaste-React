import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element:
const heading1 = React.createElement(
  'h1',
  { id: 'title', key: 'h1' },
  'Namaste React',
);
console.log(heading1); // returns an object in the console. THUS, REACT ELEMENTS ARE JUST THE OBJECTS.


// JSX code:
const heading = (
  <h1 id='title' key='h2'>
    Namaste React
  </h1>
); // When writing multiple lines of JSX code, the code is to be wrapped in a parentheses.
// As we pass attributes/properties here, as id we can pass className here as well. It's just that in React we write "className" instead of only "class".

const root = ReactDOM.createRoot(document.getElementById('root')); // tells what is the root element inside our app.

// passing react element inside the root:
root.render(heading);
