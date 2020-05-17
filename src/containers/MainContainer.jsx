import React from 'react';
import styled from 'styled-components';
import RepoContainer from './RepoContainer';
import IssueContainer from './IssueContainer';

const Main = styled.div``;

function MainContainer() {
  return (
    <Main>
      <RepoContainer/>
      <IssueContainer/>
    </Main>
  );
}

export default MainContainer;
