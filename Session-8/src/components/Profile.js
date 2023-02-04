import {useEffect, useState} from 'react';

const Profile = (props) => {
  const [count, setCount] = useState(0); // creating state with setFunction().

  useEffect(() => {   // Example 1
    // API Call
  }, [count]);
  
  return (
    <div>
      <h2>Profile Component</h2>
      <h3>Name: {props.name}</h3> {/* Using props */}
      <h3>Count: {count}</h3> {/* Using state */}
      <button onClick={() => setCount(1)}>Click</button> {/* setFunction in Function comp */}
    </div>
  )
}

export default Profile;