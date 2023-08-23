import React from 'react';
import { styled } from 'styled-components';

const AskEditSummary = () => {
  return (
    <AskEditSummaryLayout>
      <AskEditSummaryLists>
        <AskEditSummaryText>Edit Summary</AskEditSummaryText>
        <AskEditSummaryInputBox>
          <AskEditSummaryInput
            readOnly
            placeholder="briefly explain your changes (corrected spelling, fixed grammar, improved formatting)"
          />
        </AskEditSummaryInputBox>
      </AskEditSummaryLists>
    </AskEditSummaryLayout>
  );
};

export default AskEditSummary;

const AskEditSummaryLayout = styled.div``;

const AskEditSummaryLists = styled.div``;

const AskEditSummaryText = styled.div`
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: #0c0d0e;

  margin: 2px 0 4px 0;
  padding: 0 2px;
`;

const AskEditSummaryInputBox = styled.div``;

const AskEditSummaryInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  border: 1.3px solid #bbc0c4;
  border-radius: 5px;

  font-size: 13px;

  margin: 0 0 15px 0;
  padding: 0 0 0 9px;

  width: 100%;
  height: 32px;
  outline: none;

  &:focus {
    border: 1.3px solid #6cbbf7;
    box-shadow: 0px 0px 0px 3px #dcebf8;
  }
  /* 
    @media (max-width: 640px) {
      display: none;
    } */
`;
