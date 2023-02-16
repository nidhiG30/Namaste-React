import ProfileFunctionalComponent from './Profile';
import Profile from './ProfileClass';
import { Component } from 'react';
import UserContext1 from '../utils/UserContext1';

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
    console.log('Parent - render'); // 2
    return (
      <div>
        <h1>About Us Page</h1>

        <UserContext1.Consumer>
          {value => console.log(value)}
        </UserContext1.Consumer>

        <p>This is the Namaste React Live Course</p>
        <Profile />
      </div>
    );
  }
}

export default About;
