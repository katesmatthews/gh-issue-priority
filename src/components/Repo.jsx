import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedRepo } from '../actions/repoActions';
import { getIssues } from '../actions/issueActions';


const RepoCard = styled.div`
  padding: 5px;
  border: 1px solid #9c9c9c;
  border-radius: 3px;  
  background-color: ${({selected}) => selected ? '#e0e0e0' : '' };
  margin: 5px;
  :hover {
    border: 1px solid black;
  }
`;

function Repo({ repoId, name, issuesURL }) {

  const dispatch = useDispatch();
  const selectedRepo = useSelector(state => state.repos.repoId);
  const apiKey = useSelector(state => state.key.apiKey);

  function handleSelect() {
    dispatch(setSelectedRepo(repoId));
    dispatch(getIssues(issuesURL, apiKey));
  }

  return (
    <RepoCard
      onClick={handleSelect}
      selected={selectedRepo === repoId}
    >
      {name}
    </RepoCard>
  );
}

export default Repo;
