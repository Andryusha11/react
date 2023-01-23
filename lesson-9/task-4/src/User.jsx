import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <ul className="users">
        <li className="user">
          <span className="user__name">{this.props.name}</span>
          <span className="user__age">{this.props.age}</span>
        </li>
      </ul>
    );
  }
}

export default User;
