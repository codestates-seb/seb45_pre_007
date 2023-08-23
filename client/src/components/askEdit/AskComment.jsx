import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import {
  resetAskComment,
  setAskComment,
} from '../../redux/feature/askEdit/askCommentSlice';
import { postToAskComment } from '../../redux/api/askEdit/postAskCommentApi';
import { useParams } from 'react-router-dom';
import { setComments } from '../../redux/feature/question/questionSlice';

const AskComment = ({ setComment }) => {
  const dispatch = useDispatch();
  const { questionId } = useParams();

  const token = useSelector((state) => state.login.token);
  const questionComment = useSelector((state) => state.question.comments);
  // 댓글을 추가했을 때 새로고침 없이 렌더가 될 수 있도록, 새로고침 후에 결국 추가한 댓글이 덧붙일 수 있도록 하기 위함
  const commentData = useSelector((state) => state.askComment.content);

  const handleAskComment = async () => {
    const action = await dispatch(
      postToAskComment({
        id: questionId,
        content: commentData,
        token,
      })
    );
    console.log(action);

    if (postToAskComment.fulfilled.match(action)) {
      if (action.payload && action.payload.status === 200) {
        const commentData = action.payload.data;
        dispatch(
          setComments([
            // 원본을 그대로 두고,
            ...questionComment,
            // 새롭게 작성한 댓글을 추가해준다
            {
              commentUser: commentData.questionCommentUser,
              commentContent: commentData.questionCommentContent,
              // 나머지는 똑같은 key로 들어오기 때문에 스프레드 문법으로 작성한다
              ...commentData,
            },
          ])
        );
      } else {
        alert('댓글을 다시 입력해 주세요.');
      }
    }

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
