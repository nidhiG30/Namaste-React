import React from 'react';
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Dummy Name',
        location: 'Dummy Location',
      },
    };

    console.log('Child - Constructor ' + this.props.name);  // 3
  }

  // Method used to call APIs
  async componentDidMount() {
    console.log('Child - ComponentDidMount ' + this.props.name);  // 5
    const data = await fetch('https://api.github.com/users/nidhig30');
    const json = await data.json();
    console.log(json);  // 7
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  render() {
    const { count } = this.state;
    console.log('Child - Render ' + this.props.name);  // 4 || 8 (because of setState in 'async componentDidMount()' call)
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state?.userInfo?.avatar_url} />
        <h2>Name: {this.state?.userInfo?.name}</h2>
        <h3>Location: {this.state?.userInfo?.location}</h3>
      </div>
    );
  }
}

export default Profile;


// support@hdfcbank.com