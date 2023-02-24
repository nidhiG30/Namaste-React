import ProfileFunctionalComponent from './Profile';
import Profile from './ProfileClass';
import { Component } from 'react';
import UserContext from '../utils/UserContext';

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

        <UserContext.Consumer>
          {({ user }) => (
            <h4 className='font-bold text-xl p-10'>
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>

        <p>This is the Namaste React Live Course</p>
        <Profile />
      </div>
    );
  }
}

export default About;