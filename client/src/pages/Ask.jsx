import React from 'react';
import { styled } from 'styled-components';

const Ask = () => {
  return (
    <AskBox>
      <AskTitleBox>
        <AskTitle>Ask a public question</AskTitle>
      </AskTitleBox>
    </AskBox>
  );
};

export default Ask;

const AskBox = styled.div``;

const AskTitleBox = styled.div``;
const AskTitle = styled.h1`
  font-size: 27px;
  color: #232629;
  margin: 24px 0 27px;
`;
