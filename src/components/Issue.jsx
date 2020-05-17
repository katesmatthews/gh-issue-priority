import React from 'react';
import styled from 'styled-components';
import noAssignee from '../img/no-assignee.png';

const IssueCard = styled.div`
  border: 1px solid #6e6e6e;
  border-radius: 3px;
  padding: 5px;
  display: flex-column;
  justify-content: space-between;
  margin: 5px;
`;

const Avatar = styled.img`
  width: 40px;
  margin-right: 20px;
`;

const Header = styled.div`
  display: flex;
  padding: 5px;
  // justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: #e0e0e0;
`;

const Title = styled.h4`
  text-align: center;
`;

function Issue({ issueId, avatarURL, title, created, updated }) {
  return (
    <IssueCard>
      <Header>
        <Avatar src={avatarURL ? avatarURL : noAssignee} />
        <Title> {title} </Title>
      </Header>
      <div> {`Created: ${created}`} </div>
      <div> {`Updated: ${updated}`} </div>
    </IssueCard>
    );
}

export default Issue;
