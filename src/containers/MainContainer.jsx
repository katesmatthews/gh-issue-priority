import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import RepoContainer from './RepoContainer';
import IssueContainer from './IssueContainer';


const Main = styled.div``;

function MainContainer() {

  const repoList = useSelector(state => state.repos.list);
  const reposPending = useSelector(state => state.repos.isPending);
  const repoError = useSelector(state => state.repos.err);

  // If repos are loading / not available, render accordingly
  if (reposPending) return <div> Loading repos... </div>;
  if (repoError) return <div> Error loading repos! Try again. </div>;
  if (!repoList) return null;
  if (!repoList.length) return <div> No repos found </div>

  return (
    <Main>
      <RepoContainer repoList={repoList}/>
      <IssueContainer/>
    </Main>
  );
}

export default MainContainer;
