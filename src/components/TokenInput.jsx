import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setApiKey } from '../actions/keyActions';
import { getRepos } from '../actions/repoActions';

const InputContainer = styled.div``;

const Input = styled.input``;
const Button = styled.button``;


function TokenInput() {

  // Value to store inputted API key
  const [keyInput, setKeyInput] = useState('');

  const dispatch = useDispatch();

  // Handler to update store with API key and retrieve repos
  function handleSubmit() {
    dispatch(setApiKey(keyInput));
    dispatch(getRepos(keyInput));
    // Reset input field to empty
    setKeyInput('');  
  }

  return (
    <InputContainer>
      <Input
        onChange={e => setKeyInput(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter') handleSubmit()}}
        placeholder="Enter GitHub API Key"
        type="password"
        value={keyInput}
      />
      <Button
        onClick={handleSubmit}
      >
        Get Repos
      </Button>
    </InputContainer>
  );
}

export default TokenInput;
