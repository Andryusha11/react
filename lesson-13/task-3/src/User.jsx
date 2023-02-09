import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount = () => {
    this.fetchUser(this.props.match.params.userId);
    console.log(this.props.match.params.userId);
    console.log(this.state.user);
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.fetchUser(this.props.match.params.userId);
    }
  };

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
          src={this.state.user?.avatar_url}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{this.state.user?.name}</span>
          <span className="user__location">{this.state.user?.location}</span>
        </div>
      </div>
    );
  }
}

export default User;

// {this.state.user}
