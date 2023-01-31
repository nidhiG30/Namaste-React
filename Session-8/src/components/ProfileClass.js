import React from 'react';
class Profile extends React.Component {
  constructor(props) {
    super(props);
    
    // Create State
    this.state = {
        count: 0
      }
  }

  render() {
    return (
      <div>
        <h1>Profile Class Component</h1>
        {/* React attaches all the props from parent element to the "this" of CBC */}
        <h2>Name: {this.props.name}</h2>
        <h3>XYZ: {this.props.xyz}</h3>

        {/* Access the state variable */}
        <h3>Count: {this.state.count}</h3>
      </div>
    );
  }
}

export default Profile;
