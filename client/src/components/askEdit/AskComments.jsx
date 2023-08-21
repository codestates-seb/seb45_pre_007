import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import dateFommated from '../../utils/dateFomatted';

const AskComments = () => {
  const dispatch = useDispatch();
  const questionComment = useSelector((state) => state?.question?.comments);
  //Todo: user 조회 후 정보를 redux에 저장
  const username = 'doyeon';

  // 회원가입 시 같은 이름이 있다면 막아야 한다(일단 생략...)
  // const handleChangeComment = (comment) => {
  //   if (username === comment.commentUser) {
  //   }
  // };

  return (
    <AskCommentsLayout>
      {questionComment.length > 0 &&
        questionComment.map((comment, index) => (
          <div key={index}>
            <ul>
              <li>
                <div className="commentBox">
                  <div className="commentLists">
                    <span className="commentContent">
                      {comment.commentContent}
                    </span>
                    <span className="commentUser">
                      <span className="commentUserDash">&nbsp;–</span>&nbsp;
                      {comment.commentUser}&nbsp;
                    </span>
                    <span className="lastModifiedAt">
                      {dateFommated(comment.lastModifiedAt)}
                      {comment.lastModifiedAt !== comment.createdAt ? (
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
                    {username === comment.commentUser && (
                      <>
                        <span className="editIcon">&nbsp;edit&nbsp;</span>
                        <span className="deleteIcon">delete</span>
                      </>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>
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
