import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';

import GitUserCard from './Components/GitUserCard';
import Followers from './Components/Followers';
import SearchInput from './Components/SearchInput';

const AppStyles = styled.div`



background: repeating-radial-gradient(#c5c6c7,#1f2833);
height: 100vh;
width: 100%;


`;




class App extends Component {

state = {
  userDetails: [],
  userFollowers: [],
  userSearch: [],
  currentUser: ''
}


componentDidMount() {
  axios
  .get('https://api.github.com/users/lukasjaronis')
  .then(response => {
    this.setState({
      userDetails: response.data
    });
  })

  axios
  .get('https://api.github.com/users/lukasjaronis/followers')
  .then(response => {
    this.setState({
      userFollowers: response.data
    })
  })
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.currentUser !== this.state.currentUser) {

    this.setState({
      userSearch: [...this.state.userSearch, this.state.currentUser]
    });

    axios
    .get(`https://api.github.com/users/${this.state.currentUser}`)
    .then(response => {
      this.setState({
        userDetails: response.data
      });
    });

    axios
    .get(`https://api.github.com/users/${this.state.currentUser}/followers`)
    .then(response => {
      this.setState({
        userFollowers: response.data
      });
    });
  }
}

searchUsers = search => {
  this.setState
  ({currentUser: search});
}

  render() {
    return (
      <AppStyles>
      <div className="App">
      <SearchInput searchUsers={this.searchUsers} searches={this.state.userSearches} />
      <GitUserCard userDetails={this.state.userDetails} userFollowers={this.state.userFollowers.length} />
      <Followers userFollowers={this.state.userFollowers} searchUsers={this.searchUsers} />
      </div>
      </AppStyles>
    );
  }
}

export default App;
