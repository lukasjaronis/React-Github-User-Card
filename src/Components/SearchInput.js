import React, { Component } from "react";
import styled from 'styled-components';

const AppHeaderStyles = styled.div` 
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 1rem;


form {
    input {
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: 2px solid #66fcf1;
        padding: 5px;
        background: none;
        color: #66fcf1;
        letter-spacing: 2px;

        &::placeholder {
            color: #66fcf1;
        }

        &:focus {
          outline: none;
          border-top: 2px solid #45A29E;
        }
    }

    button {
        margin: 1rem;
        background: none;
        border: 1px solid #66fcf1;
        padding: 5px;
        color: #fff;

        &:hover {
           border: 1px solid #1F2833;
           background: #66fcf1;
           color: #1F2833;
        }
      
    }
}

`;

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
        <AppHeaderStyles>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.searchText}
          onChange={this.handleChange}
          placeholder="..."
        />
        <button type="submit">Search</button>
      </form>
      </AppHeaderStyles>
    );
  }
}

export default AppHeader;
