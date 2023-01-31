import React from 'react';
import ProfileFunctionalComponent from './Profile';
import Profile from './ProfileClass';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is the Namaste React Live Course</p>
        <ProfileFunctionalComponent name={"Nidhi"}/>
        <Profile name={"Nitti Gaje"} xyz="abc" /> {/* React collects all the props for Class-Based-Components */}
      </div>
    );
  }
}

export default About;
