import React from 'react';
import styled from 'styled-components';
import Repo from '../components/Repo';

const Repos = styled.div`
  width: 40%;
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
      {repoComponents}
    </Repos>
  );
}

export default RepoContainer;
