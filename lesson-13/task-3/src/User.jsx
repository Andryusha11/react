import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.fetchUser(this.props.match.params.userId);
    console.log(this.props.match.params.userId);
    console.log(this.state.user);
  }

  fetchUser = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          user: data,
        })
      );
  };

  render() {
    return (
      <div className="user">
        <img
          alt="User Avatar"
          src="https://avatars1.githubusercontent.com/u/9919?v=4"
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">Git</span>
          <span className="user__location">hub</span>
        </div>
      </div>
    );
  }
}

export default User;

// {this.state.user}
