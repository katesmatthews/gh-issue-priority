import React from 'react';
import styled from 'styled-components';

const RepoCard = styled.div`
  padding: 5px;
  border: 1px solid grey;
  border-radius: 3px;  
  margin: 5px;
  :hover {
    border: 1px solid black;
  }
`;

function Repo({ repoId, name, issuesURL }) {
  return (
    <RepoCard>
      {name}
    </RepoCard>
  );
}

export default Repo;
