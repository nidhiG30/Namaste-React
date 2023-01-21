import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
  'h1',
  { id: 'title', key: 'h1' },
  'Heading 1 from Parcel',
);

const heading2 = React.createElement(
  'h2',
  { id: 'title', key: 'h2' },
  'Heading 2',
);

/**
<div cass="header">
      <h1>Namaste React</h1>
      <ul>
        <li>About Us</li>
        <li>Support</li>
        <li>Home</li>
      </ul>
    </div>
*/

const container = React.createElement(
  'div',
  { id: 'container', hello: 'world' },
  [
    React.createElement(
      'h1',
      { id: 'title', key: 'h1' },
      'Heading 1 from Parcel',
    ),
    React.createElement('ul', {}, [
      React.createElement('li', {}, 'About Us'),
      React.createElement('li', {}, 'Support'),
      React.createElement('li', {}, 'Home'),
    ]),
  ],
);
// We can provide any piece of attribute in the React Element, which is called props in React, which are properties that take data in {key: value} pair

console.log(heading1); // returns an object in the console. THUS, REACT ELEMENTS ARE JUST THE OBJECTS.

const root = ReactDOM.createRoot(document.getElementById('root')); // tells what is the root element inside our app.

// passing react element inside the root:
root.render(container);
