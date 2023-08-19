import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { resetQuestion } from '../../redux/feature/question/questionSlice';
import { getByQuestion } from '../../redux/api/question/getByQuestion';

const AskComments = () => {
  const questionComment = useSelector((state) => state.question.comments);
  console.log(questionComment);
  const dispatch = useDispatch();

  const askId = useSelector((state) => state.ask.id);
  console.log(askId);

  useEffect(() => {
    // 가져오기 전에 초기화를 먼저 해주어야 함
    dispatch(resetQuestion());
    dispatch(getByQuestion(askId));
    console.log(questionComment);
  }, [askId, dispatch]);

  const dummyComments = [
    {
      commentUser: 'shimdokite',
      commentContent:
        'Lorem ipsum dolor sit amet consectetur. Facilisi nunc vestibulum laoreet facilisis amet sapien. Turpis eleifend facilisis sed porttitor dui pharetra eget morbi erat.',
      createdAt: 'Aug 20, 2023 at 3:01',
      lastModifiedAt: 'Aug 20, 2023 at 3:01',
    },
    {
      commentUser: 'bbosong',
      commentContent:
        'Lorem ipsum dolor sit amet consectetur. Facilisi nunc vestibulum laoreet facilisis amet sapien. Turpis eleifend facilisis sed porttitor dui pharetra eget morbi erat.',
      createdAt: 'Aug 20, 2023 at 3:01',
      lastModifiedAt: 'Aug 20, 2023 at 3:01',
    },
    {
      commentUser: 'namsoon',
      commentContent:
        'Lorem ipsum dolor sit amet consectetur. Facilisi nunc vestibulum laoreet facilisis amet sapien. Turpis eleifend facilisis sed porttitor dui pharetra eget morbi erat.',
      createdAt: 'Aug 20, 2023 at 3:01',
      lastModifiedAt: 'Aug 20, 2023 at 3:01',
    },
  ];

  return (
    <AskCommentsLayout>
      {dummyComments.map((comment, index) => (
        <div key={index}>
          <ul>
            <li>
              <div className="commentBox">
                <div className="commentLists">
                  <span className="commentContent">
                    {comment.commentContent}
                  </span>
                  <span className="commentUser">
                    &nbsp;–&nbsp;{comment.commentUser}&nbsp;
                  </span>
                  <span className="createdAt">{comment.createdAt}</span>
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
    line-height: 1.4;
  }

  .commentContent {
  }

  .commentUser {
    color: hsl(206, 100%, 40%);

    &:hover {
      color: hsl(206, 100%, 52%);
    }
  }

  .createdAt {
    color: #9199a1;
  }
`;
