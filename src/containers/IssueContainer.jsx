import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch} from 'react-redux';
import Issue from '../components/Issue';

const Issues = styled.div`
  width: 100%;
`;

function IssueContainer({ issueList }) {

  const issueComponents = issueList.map(issue => (
    <Issue 
      key={issue.id}
      issueId={issue.id}
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
      {issueComponents}
    </Issues>
  );
}

export default IssueContainer;
