import React from 'react';
import { styled } from 'styled-components';
import AskAside from '../ask/askAside/AskAside.jsx';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AskExpand = ({ isFocus, setIsFocus, modules }) => {
  return (
    <ExpandLayout>
      <AskExpandLayout>
        <AskExpandBox>
          <AskExpandList>
            <AskExpandItem>
              <AskExpandTextBox>
                <AskExpandText>
                  What did you try and what were you expecting?
                </AskExpandText>
                <AskExpandDescription>
                  Describe what you tried, what you expected to happen, and what
                  actually resulted. Minimum 20 characters.
                </AskExpandDescription>
              </AskExpandTextBox>
              <AskExpandInputBox onClick={() => setIsFocus(2)}>
                <ReactQuill
                  modules={modules}
                  style={{ height: 210 }}
                  readOnly
                />
              </AskExpandInputBox>
            </AskExpandItem>
          </AskExpandList>
        </AskExpandBox>
      </AskExpandLayout>
      <AsideBox>
        <AskAside isFocus={isFocus} index={2} />
      </AsideBox>
    </ExpandLayout>
  );
};

export default AskExpand;

const AskExpandLayout = styled.div`
  display: flex;
  align-items: flex-start;
  width: 70%;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 4px;
  background-color: #ffffff;
`;

const ExpandLayout = styled.div`
  display: flex;
  gap: 16px;
`;

const AsideBox = styled.div`
  position: relative;
`;

const AskExpandBox = styled.div`
  width: 100%;
`;

const AskExpandList = styled.div`
  padding: 24px;
`;

const AskExpandItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const AskExpandTextBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

const AskExpandText = styled.div`
  font-size: 15px;
  font-weight: 600;

  color: #232629;

  @media (max-width: 810px) {
    font-size: 13px;
  }
`;

const AskExpandDescription = styled.div`
  margin: 4px 0 6px 0;
  font-size: 12px;
  color: #3b4045;
`;

const AskExpandInputBox = styled.div`
  height: 256px;
  max-height: 256px;
  min-height: 81px;

  .ql-toolbar {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .ql-container {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
