import React from 'react';
import { styled } from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import LoginNav from '../components/LoginNav.jsx';
import Aside from '../components/Aside.jsx';

const AnswerLayout = styled.section`
  display: flex;
`;

const AnswerBox = styled.section`
  width: 1051px;
  text-align: left;
  padding: 24px;
`;

const AnswerProfile = styled.div`
  height: 144px;
  display: flex;

  color: #545454;
`;

const AnswerInputBox = styled.div`
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

// () isFocus, setIsFocus, modules

const Answer = () => {
  return (
    <AnswerLayout>
      <LoginNav />
      <AnswerBox></AnswerBox>
    </AnswerLayout>
    // <AskProblemInputBox onClick={() => setIsFocus(1)}>
    //   <ReactQuill modules={modules} style={{ height: 210 }} />
    // </AskProblemInputBox>
  );
};

export default Answer;
