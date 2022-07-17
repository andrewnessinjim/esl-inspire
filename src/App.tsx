import React from 'react';

import styled from "styled-components/macro";

import PlaceholderSection from './PlaceholderSection';

const AppContainer = styled.main`
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <PlaceholderSection theme='dark'/>
      <PlaceholderSection theme='light'/>
    </AppContainer>
  );
}

export default App;
