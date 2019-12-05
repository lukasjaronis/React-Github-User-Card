import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';

import GitUserCardUser from './Components/GitUserCardUser';
import GitFollower from './Components/GitFollower';

const AppStyles = styled.div`



background: repeating-radial-gradient(#c5c6c7,#1f2833);
height: 100vh;
width: 100%;


`;




class App extends Component {
  render() {
    return (
      <AppStyles>
      <div className="App">
  <GitUserCardUser />
  <GitFollower />
      </div>
      </AppStyles>
    );
  }
}

export default App;
