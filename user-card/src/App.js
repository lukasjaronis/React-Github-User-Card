import React from 'react';
import './App.css';
import styled from 'styled-components';

import GitMyUser from './Components/GitMyUser';


const AppStyles = styled.div`



background: repeating-radial-gradient(#c5c6c7,#1f2833);
height: 100vh;
width: 100%;


`;

function App() {
  return (
    <AppStyles>
    <div className="App">
<GitMyUser />
    </div>
    </AppStyles>
  );
}

export default App;
