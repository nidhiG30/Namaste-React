import { useEffect, useState } from 'react';

const Profile = props => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Example 3
    // API Call
    const timer = setInterval(() => {
      console.log('Namaste React OP');
    }, 1000);
    console.log('useEffect');

    return () => {
      clearInterval(timer);
      console.log('useEffect Return');
    }

  }, []);

  console.log('render');  

  return (
    <div>
      <h2>Profile Component</h2>
      <h3>Name: {props.name}</h3> {/* Using props */}
      <h3>Count: {count}</h3> {/* Using state */}
      <button onClick={() => setCount(1)}>Click</button>{' '}
      {/* setFunction in Function comp */}
    </div>
  );
};

export default Profile;
