const heading1 = React.createElement('h1', { id: 'title' }, 'Heading 1');

const heading2 = React.createElement('h2', { id: 'title' }, 'Heading 2');

const container = React.createElement('div', { id: 'container', hello: 'world' }, [
  heading1,
  heading2,
]);
// We can provide any piece of attribute in the React Element, which is called props in React, which are properties that take data in {key: value} pair

console.log(container); // returns an object in the console. THUS, REACT ELEMENTS ARE JUST THE OBJECTS.

const root = ReactDOM.createRoot(document.getElementById('root')); // tells what is the root element inside our app.

// passing react element inside the root:
root.render(container);