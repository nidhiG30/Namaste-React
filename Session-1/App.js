const heading1 = React.createElement('h1', { id: 'title' }, 'Heading 1');

const heading2 = React.createElement('h2', { id: 'title' }, 'Heading 2');

const container = React.createElement('div', { id: 'container' }, [
  heading1,
  heading2,
]);
// When multiple elements are to be created inside a parent element (element in React, tag in HTML), we need to pass variables of those elements inside the array as there are multiple entries into the parent element. These child elements are already created and stored in separate variables.

console.log(container); // returns an object in the console. THUS, REACT ELEMENTS ARE JUST THE OBJECTS.

const root = ReactDOM.createRoot(document.getElementById('root')); // tells what is the root element inside our app.

// passing react element inside the root:
root.render(container);