import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import {
  resetAskComment,
  setAskComment,
} from '../../redux/feature/askEdit/askCommentSlice';
import { postToAskComment } from '../../redux/api/askEdit/postAskCommentApi';

const AskComment = ({ setComment }) => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.login.token);
  const askId = useSelector((state) => state.ask.id);
  console.log(askId);

  const commentData = useSelector((state) => state.askComment.content);

  const handleAskComment = async () => {
    await dispatch(
      postToAskComment({
        id: askId,
        content: commentData,
        token,
      })
    );

    dispatch(resetAskComment());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && commentData !== '') {
      setComment(false);
      handleAskComment();
    }
  };

  const handleCloseComment = () => {
    setComment(false);
  };

  return (
    <AskCommentLayout>
      <AskCommentLists>
        <AskCommentInputBox>
          <AskCommentInput
            onClick={handleCloseComment}
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e) => dispatch(setAskComment(e.target.value))}
          />
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
