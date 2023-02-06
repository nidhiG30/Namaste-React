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

    // console.log('Child - Constructor ' + this.props.name);
  }

  // Method used to call APIs
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);

    // console.log('Child - ComponentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    // Example 3
    if (this.state.count !== prevState.count) {
      // code
    }
    if (this.state.count2 !== prevState.count2) {
      // code
    }
    console.log('Component did update');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("componentWillUnmount");
  }

  render() {
    const { count } = this.state;
    // console.log('Child - Render ' + this.props.name);
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
