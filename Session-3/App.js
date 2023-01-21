import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element:
const heading1 = React.createElement(
  'h1',
  { id: 'title', key: 'h1' },
  'Namaste React',
);

// React element inside React Functional Component
const HeaderComponent = () => (
  <div>
    {heading1}
    <h2>Namaste React Functional Component</h2>
    <h2>This is a h2 tag</h2>
  </div>
);
// We can omit "return" keyword if using arrow function syntax.

const root = ReactDOM.createRoot(document.getElementById('root')); // tells what is the root element inside our app.

// passing react element inside the root:
root.render(<HeaderComponent />);
