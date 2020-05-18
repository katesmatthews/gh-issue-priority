import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector, useDispatch} from 'react-redux';
import Issue from '../components/Issue';

const moveLeft = keyframes`
from { transform: translateX(50px) }
to { transform: translateX(0px) }
`;

const Issues = styled.div`
  width: 100%;
  animation-name: ${moveLeft};
  animation-duration: .3s;
`;

function IssueContainer({ issueList, selectedRepo }) {

  const issueComponents = issueList.map(issue => (
    <Issue 
      key={issue.id}
      issueId={issue.id}
      issueList={issueList}
      selectedRepo={selectedRepo}
      avatarURL={issue.assignee ? issue.assignee.avatar_url : null}
      title={issue.title}
      created={issue.created_at}
      updated={issue.updated_at}
    />
  ));

  return (
    <Issues>
      <h3> 
        Issues: 
      </h3>
      {issueComponents.length ? issueComponents : <div> This repository has no issues. </div>}
    </Issues>
  );
}

export default IssueContainer;
