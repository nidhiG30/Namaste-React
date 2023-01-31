import React from 'react';
class Profile extends React.Component {
  constructor(props) {
    super(props);

    // Create State
    this.state = {
      count: 0,
      count2: 0 // Multiple states are created in single state object 'this.state'
    };
  }

  render() {
    // Destructuring the 'state'
    const { count } = this.state;
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>XYZ: {this.props.xyz}</h3>

        {/* Access the state variable */}
        <h3>Count: {count}</h3>
      </div>
    );
  }
}

export default Profile;
