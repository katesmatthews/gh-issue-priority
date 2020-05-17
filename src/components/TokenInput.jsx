import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const InputContainer = styled.div``;

const Input = styled.input``;
const Button = styled.button``;

function TokenInput() {

  const [keyInput, setKeyInput] = useState('');

  const dispatch = useDispatch();

  function handleSubmit() {
    // dispatch actions to set API key in store and get repos
    console.log(`setting API key to: ${keyInput}`)
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
