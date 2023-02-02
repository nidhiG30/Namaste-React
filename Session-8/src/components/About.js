import Profile from './ProfileClass';
import { Component } from 'react';

class About extends Component {
  // React.Component replaced by Component.
  constructor(props) {
    super(props);
    console.log('Parent - Constructor');
  }

  // API call
  componentDidMount() {
    console.log('Parent - ComponentDidMount');
  }

  render() {
    console.log('Parent - render');
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is the Namaste React Live Course</p>
        <Profile name={'First Child'} xyz='abc' />
        {/* React collects all the props for Class-Based-Components */}
      </div>
    );
  }
}

export default About;
