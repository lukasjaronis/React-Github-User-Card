import React, { Component } from "react";

class AppHeader extends Component {
  state = {
    searchText: ""
  };

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.searchText);
    this.setState({ searchText: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.searchText}
          onChange={this.handleChange}
          placeholder="..."
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default AppHeader;
