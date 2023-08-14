import React from 'react';
import { styled } from 'styled-components';

const AskTag = () => {
  return (
    <AskTagLayout>
      <AskTagBox>
        <AskTagList>
          <AskTagItem>
            <AskTagTextBox>
              <AskTagText>Tags</AskTagText>
              <AskTagDescription>
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </AskTagDescription>
            </AskTagTextBox>
            <AskTagInputBox>
              <AskTagInput
                placeholder="e.g. (mysql json typescript)"
                readonly="readonly"
              />
            </AskTagInputBox>
          </AskTagItem>
        </AskTagList>
      </AskTagBox>
    </AskTagLayout>
  );
};

export default AskTag;

const AskTagLayout = styled.div`
  display: flex;
  align-items: flex-start;
  width: 70%;
  margin: 12px 0 0 0;

  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 4px;
  background-color: #ffffff;
`;

const AskTagBox = styled.div`
  width: 100%;
`;

const AskTagList = styled.div`
  padding: 24px;
`;

const AskTagItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const AskTagTextBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

const AskTagText = styled.div`
  font-size: 15px;
  font-weight: 600;

  color: #232629;

  @media (max-width: 810px) {
    font-size: 13px;
  }
`;

const AskTagDescription = styled.div`
  margin: 4px 0 2px 0;
  font-size: 12px;
  color: #3b4045;
`;

const AskTagInputBox = styled.div``;

const AskTagInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  border: 1.3px solid #bbc0c4;
  border-radius: 5px;

  font-size: 13px;

  margin: 4px 0 0 0;
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
