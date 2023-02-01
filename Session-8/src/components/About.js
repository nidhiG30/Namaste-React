import Profile from './ProfileClass';
import { Component } from 'react';

class About extends Component {
  // React.Component replaced by Component.
  constructor(props) {
    super(props);
    console.log('Parent - Constructor'); // 1 (parent)
  }

  componentDidMount() {
    console.log('Parent - ComponentDidMount'); // 9 (parent)
  }

  render() {
    console.log('Parent - render'); // 2 (parent)
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is the Namaste React Live Course</p>
        <Profile name={'First Child'} xyz='abc' />
        <Profile name={'Second Child'} xyz='abc' />
        {/* React collects all the props for Class-Based-Components */}
      </div>
    );
  }
}

export default About;
