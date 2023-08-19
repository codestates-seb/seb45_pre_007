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
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e) => dispatch(setAskComment(e.target.value))}
          />
          <svg
            className="svg-icon iconClearSm pe-none"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            onClick={handleCloseComment}
          >
            <path d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"></path>
          </svg>
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
  width: 100%;
`;

const AskCommentInputBox = styled.div`
  display: flex;
  align-items: center;
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

  .svg-icon {
    margin: 0 10px 0 0;
    fill: hsl(205, 47%, 42%);

    &:hover {
      border: 1px solid white;
      border-radius: 4px;
      background: hsl(205, 46%, 92%);
    }
  }
`;

const AskCommentInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  outline: none;
  border: none;
  width: 100%;
  height: 30px;

  @media (max-width: 640px) {
    width: 219px;
  }
`;
