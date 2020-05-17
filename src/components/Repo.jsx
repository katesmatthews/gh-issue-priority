import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedRepo } from '../actions/repoActions';


const RepoCard = styled.div`
  padding: 5px;
  border: 1px solid #9c9c9c;
  border-radius: 3px;  
  background-color: ${({selected}) => selected ? '#c4c4c4' : '' };
  margin: 5px;
  :hover {
    border: 1px solid black;
  }
`;

function Repo({ repoId, name, issuesURL }) {

  const dispatch = useDispatch();
  const selectedRepo = useSelector(state => state.repos.repoId);

  function handleSelect() {
    dispatch(setSelectedRepo(repoId));
    // dispatch action to retrieve issues
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
