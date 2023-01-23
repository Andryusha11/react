import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends Component {
  state = {
    filterText: '',
  };

  handleChange = (e) => {
    this.setState({
      filterText: e.target.value,
    });
    console.log(this.state.filterText);
  };

  render() {
    const filterUsers = this.props.users.filter((user) =>
      user.name.toLowerCase().includes(this.state.filterText.toLowerCase())
    );
    console.log(filterUsers);
    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          count={filterUsers.length}
          onChange={this.handleChange}
        />

        {filterUsers.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
        <User />
      </div>
    );
  }
}

export default UsersList;
