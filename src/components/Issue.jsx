import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setIssueOrder } from '../actions/issueActions';
import { fuzzyTime, ddmmyyyy } from '../utils/datetime';
import noAssignee from '../img/no-assignee.png';

const IssueCard = styled.div`
  border: 1px solid #6e6e6e;
  border-radius: 3px;
  padding: 5px;
  display: flex;
  margin: 5px;
  height: 10vh;
`;

const Avatar = styled.img`
  width: 40px;
  margin-right: 20px;
`;

const Header = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  height: 40px;
  background-color: #e0e0e0;
`;

const Title = styled.h4`
  text-align: center;
`;

const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 5px;
`;

const Arrow = styled.div``;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Issue({ issueId, issueList, selectedRepo, avatarURL, title, created, updated }) {

  const dispatch = useDispatch();

  const vals = [ issueId, issueList, selectedRepo, dispatch, setIssueOrder ];

  return (
    <IssueCard>
      <Arrows>
        <Arrow onClick={() => reorderIssues('up', ...vals)}> /\ </Arrow>
        <Arrow onClick={() => reorderIssues('down', ...vals)}> \/ </Arrow>
      </Arrows>
      <Content>
        <Header>
          <Avatar src={avatarURL ? avatarURL : noAssignee} />
          <Title> {title} </Title>
        </Header>
        <div> {`Created: ${ddmmyyyy(created)}`} </div>
        <div> {`Updated: ${fuzzyTime(updated)}`} </div>
      </Content>
    </IssueCard>
    );
}

// Handler for up/down arrow clicks, to reorder issues and save order in localStorage
function reorderIssues(direction, issueId, issueList, selectedRepo, dispatch, setIssueOrder) {
  const issues = issueList.slice();

  for (let i = 0; i < issues.length; i++) {
    if (issues[i].id === issueId) {
      if (direction === 'up') {
        // If up arrow clicked for topmost issue, do nothing
        if (i === 0) return;
        // Otherwise swap current and previous issue
        [issues[i - 1], issues[i]] = [issues[i], issues[i - 1]]
      } else if (direction === 'down') {
        // If down arrow clicked for bottommost issue, do nothing
        if (i === issues.length - 1) return;
        // Otherwise swap current and next issue
        [issues[i + 1], issues[i]] = [issues[i], issues[i + 1]]
      }
      break;
    }
  }

  // Create array of issue IDs, ordered by new sort
  const newIssuePriority = issues.map(issue => issue.id);
  // Save new order in localStorage so it will persist
  window.localStorage.setItem(selectedRepo, JSON.stringify(newIssuePriority));
  // Update store with new ordering of issues
  dispatch(setIssueOrder(issues));
}

export default Issue;
