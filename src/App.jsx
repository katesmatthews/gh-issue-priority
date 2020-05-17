import React from 'react';
import styled from 'styled-components';
import TokenInput from './components/TokenInput';
import MainContainer from './containers/MainContainer';

const AppContainer = styled.div``;

const Header = styled.div``;

const Title = styled.h1``;

function App() {
  return (
    <AppContainer>
      <Header>
        <Title>
          GitHub Issue Priorities
        </Title>
        <TokenInput/>
      </Header>
      <MainContainer/>
    </AppContainer>
  );
}

export default App;
