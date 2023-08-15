import React from 'react';
import { styled } from 'styled-components';
import AskAside from '../ask/askAside/AskAside.jsx';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AskProblem = ({ isFocus, setIsFocus, modules }) => {
  return (
    <ProblemLayout>
      <AskProblemLayout>
        <AskProblemBox>
          <AskProblemList>
            <AskProblemItem>
              <AskProblemTextBox>
                <AskProblemText>
                  What are the details of your problem?
                </AskProblemText>
                <AskProblemDescription>
                  Introduce the problem and expand on what you put in the title.
                  Minimum 20 characters.
                </AskProblemDescription>
              </AskProblemTextBox>
              <AskProblemInputBox onClick={() => setIsFocus(1)}>
                <ReactQuill modules={modules} style={{ height: 210 }} />
              </AskProblemInputBox>
            </AskProblemItem>
          </AskProblemList>
        </AskProblemBox>
      </AskProblemLayout>
      <AsideBox>
        <AskAside isFocus={isFocus} index={1} />
      </AsideBox>
    </ProblemLayout>
  );
};

export default AskProblem;

const AskProblemLayout = styled.div`
  display: flex;
  align-items: flex-start;
  width: 70%;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 4px;
  background-color: #ffffff;
`;

const ProblemLayout = styled.div`
  display: flex;
  gap: 16px;
`;

const AsideBox = styled.div`
  position: relative;
`;

const AskProblemBox = styled.div`
  width: 100%;
`;

const AskProblemList = styled.div`
  padding: 24px;
`;

const AskProblemItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const AskProblemTextBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

const AskProblemText = styled.div`
  font-size: 15px;
  font-weight: 600;

  color: #232629;

  @media (max-width: 810px) {
    font-size: 13px;
  }
`;

const AskProblemDescription = styled.div`
  margin: 4px 0 6px 0;
  font-size: 12px;
  color: #3b4045;
`;

const AskProblemInputBox = styled.div`
  height: 256px;
  max-height: 256px;
  min-height: 81px;
`;
