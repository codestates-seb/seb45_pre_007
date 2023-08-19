import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';

const AskComment = ({ setComment }) => {
  //   const questionTitle = useSelector((state) => state.question.title);
  //   const dispatch = useDispatch();
  //   const [title, setTitle] = useState('');

  //   useEffect(() => {
  //     setTitle(questionTitle);
  //   }, []);

  // const handleChangeTitle = (e) => {
  //   dispatch(setEditTitle(e.target.value));
  //   setTitle(e.target.value);
  // };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setComment(false);
    }
  };

  return (
    <AskCommentLayout>
      <AskCommentLists>
        <AskCommentInputBox>
          <AskCommentInput onKeyDown={(e) => handleKeyDown(e)} />
        </AskCommentInputBox>
      </AskCommentLists>
    </AskCommentLayout>
  );
};

export default AskComment;

const AskCommentLayout = styled.div`
  display: flex;
`;

const AskCommentLists = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AskCommentInputBox = styled.div``;

const AskCommentInput = styled.input.attrs((props) => ({
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
