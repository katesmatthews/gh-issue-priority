import React from 'react';
import styled from 'styled-components';
import Repo from '../components/Repo';

const Repos = styled.div`
  padding: 10px;
  box-sizing: border-box;
  margin: 20px 10px 0px 0px;
  width: 40%;
  min-width: 400px;
  box-shadow: 5px 5px 40px 2px lightgrey;
  border-radius: 5px;
`;

const Content = styled.div`
  @media (max-width: 768px) {
    height: 400px;
    overflow: scroll;
  }
`;


function RepoContainer({ repoList }) {

  const repoComponents = repoList.map(repo => (
    <Repo
      key={repo.id}
      repoId={repo.id}
      name={repo.full_name}
      issuesURL={repo.issues_url.slice(0, repo.issues_url.length - 9)}
    />
  ));


  return (
    <Repos>
      <h3>
        Repositories:
      </h3>
      <Content>
        {repoComponents}
      </Content>
    </Repos>
  );
}

export default RepoContainer;
