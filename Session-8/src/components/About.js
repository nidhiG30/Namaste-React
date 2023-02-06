import ProfileFunctionalComponent from './Profile';
import Profile from './ProfileClass';
import { Component } from 'react';

class About extends Component {
  // React.Component replaced by Component.
  constructor(props) {
    super(props);
    // console.log('Parent - Constructor'); // 1
  }

  // API call
  componentDidMount() {
    // console.log('Parent - ComponentDidMount');  // *6
  }

  render() {
    // console.log('Parent - render'); // 2
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is the Namaste React Live Course</p>
        <ProfileFunctionalComponent />
      </div>
    );
  }
}

export default About;
