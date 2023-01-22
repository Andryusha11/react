import React, { Component } from 'react';

class Search extends Component {
  state = { value: '' };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Search text: ${this.state.value}`);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          className="search__input"
        />
        <button className="search__button">Search</button>
      </form>
    );
  }
}

export default Search;
