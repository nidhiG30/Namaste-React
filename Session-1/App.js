const heading1 = React.createElement('h1', { id: 'title' }, 'Heading 1'); // 'React' here is a global variable which comes from our injected React.js files (CDN files)

const heading2 = React.createElement('h2', { id: 'title' }, 'Heading 2');

const container = React.createElement('div', { id: 'container' }, [
  heading1,
  heading2,
]);

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root')); // 'createRoot' - create & return 'React Element'. 'ReactDOM' - Helps to render the React Element on the DOM which can be seen on browser.

root.render(container);
