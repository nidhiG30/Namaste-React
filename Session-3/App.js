import React from 'react';
import ReactDOM from 'react-dom/client';

// Functional Component
const Title = () => (
  <h1 id='title' key='h2'>
    Namaste React
  </h1>
);
// This Title can be written in small letters as well: "const title". BUT ONLY WHEN it becomes a Functional Component then as per convention we must start from UpperCase letter.

// NOTE: While using arrow function syntax, if using return statement, then make sure to keep it in curly braces, otherwise if no return statement is used, must wrap the code in parentheses if multiple lines are there.

// Component Composition: Functional Component inside React Functional Component
const HeaderComponent = () => {
  return (
    <div>
      {Title()}
      <h2>Namaste React Functional Component</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};
// <Title/> OR {Title()} because functional components are JavaScript functions at the end.
// Inside "{}", we can write any piece of JavaScript code, any piece refers to JavaScript Expressions only.

const root = ReactDOM.createRoot(document.getElementById('root')); // tells what is the root element inside our app.

// passing react element inside the root:
root.render(<HeaderComponent />);
