import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import dateFommated from '../../utils/dateFomatted';
import { deleteByAskComment } from '../../redux/api/askEdit/deleteAskComment';
import { useParams } from 'react-router-dom';
import { setComments } from '../../redux/feature/question/questionSlice';
import axios from 'axios';

const AskComments = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editContent, setEditContent] = useState('');
  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.askComment.content);
  const questionComment = useSelector((state) => state?.question?.comments);
  const getUser = useSelector((state) => state.users.user);
  const token = useSelector((state) => state.login.token);
  const successedStatus = useSelector((state) => state.deleteComment.status);
  const { questionId } = useParams();
  const url = process.env.REACT_APP_API_URL;
  let userQuestionId = +questionId;

  // 댓글 수정 => 해당 객체안에 있는 값을 바꾸어야 하므로 특정 id를 조회해서 변경해주어야 함
  const isEditChange = (comment) => {
    dispatch(
      setComments(
        questionComment.map((cur) => {
          if (cur.questionCommentId === comment.questionCommentId) {
            setIsOpen(true);
            return { ...cur, isEdit: true };
          } else {
            // 해당 객체가 아니라면 isEdit를 false로 해준다
            setIsOpen(false);
            return { ...cur, isEdit: false };
          }
        })
      )
    );
  };

  const handleCommentChange = async (comment) => {
    let commentId = comment.questionCommentId;
    try {
      const response = await axios.patch(
        `${url}/questions/${questionId}/comments/${commentId}`,
        {
          content: editContent,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const updatedComment = {
        ...comment,
        commentContent: response.data.questionCommentContent,
        lastModifiedAt: response.data.lastModifiedAt,
        isEdit: false,
      };

      // 업데이트한 댓글을 원래 comments에서 대체
      dispatch(
        setComments(
          questionComment.map((cur) =>
            cur.questionCommentId === commentId ? updatedComment : cur
          )
        )
      );

      setIsOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleKeyDown = (e, comment) => {
    if (e.key === 'Enter' && editContent !== '') {
      handleCommentChange(comment);
      setIsOpen(false);
    }
  };

  // 댓글 삭제
  // 현재 클릭한 comment를 받아와서 그 comment의 questionCommentId 가져옴
  const handleDeleteComment = (comment) => {
    let userCommentId = comment.questionCommentId;
    dispatch(deleteByAskComment({ userQuestionId, userCommentId, token }));

    if (successedStatus === 204) {
      dispatch(
        setComments(
          questionComment.filter(
            (cur, idx) => cur.questionCommentId !== userCommentId
          )
        )
      );
    }
  };

  console.log(getUser.userName);

  return (
    <AskCommentsLayout>
      {questionComment.length > 0 &&
        questionComment.map((comment, index) => (
          <>
            {comment?.isEdit && isOpen ? (
              <AskCommentInputBox>
                <AskCommentInput
                  placeholder={comment?.commentContent}
                  // 매개변수로 넘겨줄 때 조심하기!
                  onKeyDown={(e) => handleKeyDown(e, comment)}
                  onChange={(e) => setEditContent(e.target.value)}
                />
              </AskCommentInputBox>
            ) : (
              <div className="comments" key={index}>
                <ul>
                  <li>
                    <div className="commentBox">
                      <div className="commentLists">
                        <span className="commentContent">
                          {comment?.commentContent}
                        </span>
                        <span className="commentUser">
                          <span className="commentUserDash">&nbsp;–</span>&nbsp;
                          {comment?.commentUser}&nbsp;
                        </span>
                        <span className="lastModifiedAt">
                          {dateFommated(comment?.lastModifiedAt)}
                          {comment?.lastModifiedAt !== comment?.createdAt ? (
                            <span className="updateIcon">
                              &nbsp;
                              <svg
                                aria-hidden="true"
                                className="va-text-bottom o50 svg-icon iconPencilSm"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                              >
                                <path
                                  fill="#9199a1"
                                  d="m2 10.12 6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"
                                ></path>
                                <path
                                  fill="#9199a1"
                                  d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0Z"
                                ></path>
                              </svg>
                            </span>
                          ) : null}
                        </span>
                        {getUser.userName === comment?.commentUser && (
                          <>
                            <span
                              className="editIcon"
                              onClick={() => {
                                isEditChange(comment);
                                setIsOpen(true);
                              }}
                            >
                              &nbsp;edit&nbsp;
                            </span>
                            <span
                              className="deleteIcon"
                              onClick={() => handleDeleteComment(comment)}
                            >
                              delete
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </>
        ))}
    </AskCommentsLayout>
  );
};

export default AskComments;

const AskCommentsLayout = styled.div`
  margin: 12px 0 10px 0;
  font-size: 13px;
  color: #232629;

  border-top: 1px solid hsl(210, 8%, 90%);

  .commentBox {
    padding: 6px;
    border-bottom: 1px solid hsl(210, 8%, 90%);
  }

  .commentLists {
    display: flex;
    align-items: center;
    line-height: 1.4;
  }

  .commentContent {
  }

  .commentUser {
    cursor: pointer;
    color: hsl(206, 100%, 40%);

    .commentUserDash {
      color: #232629;
    }

    &:hover {
      color: hsl(206, 100%, 52%);
    }
  }

  .lastModifiedAt {
    display: flex;
    align-items: center;
    color: #9199a1;
  }

  .updateIcon {
    display: flex;
    align-items: center;
  }

  .editIcon {
    cursor: pointer;
    color: #9199a1;
  }

  .deleteIcon {
    cursor: pointer;
  }
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
