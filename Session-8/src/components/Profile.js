import {useState} from 'react';

const Profile = (props) => {
  const [count] = useState(0); // creating state without setFunction().
  const [count2] = useState(0); // One-by-one states are created in func comp
  return (
    <div>
      <h2>Profile Component</h2>
      <h3>Name: {props.name}</h3> {/* Using props */}
      <h3>Count: {count}</h3> {/* Using state */}
    </div>
  )
}

export default Profile;