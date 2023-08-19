import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import AskEditTItle from '../components/askEdit/AskEditTItle.jsx';
import AskEditBody from '../components/askEdit/AskEditBody.jsx';
import AskEditTag from '../components/askEdit/AskEditTag.jsx';
import AskEditSummary from '../components/askEdit/AskEditSummary.jsx';
import AskRevision from '../components/askEdit/AskRevision.jsx';

import LoginNav from '../components/LoginNav.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getByQuestion } from '../redux/api/question/getByQuestion.js';
import { resetQuestion } from '../redux/feature/question/questionSlice.js';
import { postToAskEdit } from '../redux/api/askEdit/postAskEditApi.js';
import { Link, useNavigate } from 'react-router-dom';
import { resetAskEdit } from '../redux/feature/askEdit/askEditSlice.js';
import AskComment from '../components/askEdit/AskComment.jsx';
import AskComments from '../components/askEdit/AskComments.jsx';

const AskEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isFocus, setIsFocus] = useState(0);
  const [comment, setComment] = useState(false);
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
        [
          {
            color: [
              '#000000',
              '#e60000',
              '#ff9900',
              '#ffff00',
              '#008a00',
              '#0066cc',
              '#9933ff',
              '#ffffff',
              '#facccc',
              '#ffebcc',
              '#ffffcc',
              '#cce8cc',
              '#cce0f5',
              '#ebd6ff',
              '#bbbbbb',
              '#f06666',
              '#ffc266',
              '#ffff66',
              '#66b966',
              '#66a3e0',
              '#c285ff',
              '#888888',
              '#a10000',
              '#b26b00',
              '#b2b200',
              '#006100',
              '#0047b2',
              '#6b24b2',
              '#444444',
              '#5c0000',
              '#663d00',
              '#666600',
              '#003700',
              '#002966',
              '#3d1466',
              'custom-color',
            ],
          },
          { background: [] },
        ],
        ['clean'],
      ],
    },
  };

  const token = useSelector((state) => state.login.token);
  const askId = useSelector((state) => state.ask.id);
  const editData = useSelector((state) => state.askEdit);

  console.log(askId);

  useEffect(() => {
    // 가져오기 전에 초기화를 먼저 해주어야 함
    dispatch(resetQuestion());
    dispatch(getByQuestion(askId));
  }, [askId, dispatch]);

  const handleAskEditSumbit = async () => {
    if (editData.title && editData.content) {
      await dispatch(
        postToAskEdit({
          id: askId,
          title: editData.title,
          content: editData.content,
          token: token,
        })
      );

      navigate('/answer');
      dispatch(resetAskEdit());
    }
  };

  return (
    <AskEditLayout>
      {/* Nav ver.2 */}
      <LoginNav />
      <AskEditBox>
        <AskEditItems>
          <AskEditFormBox>
            <AskEditFormItem>
              <AskRevision />
              <AskEditTItle isFocus={isFocus} setIsFocus={setIsFocus} />
              <AskEditBody
                modules={modules}
                isFocus={isFocus}
                setIsFocus={setIsFocus}
              />
              <AskEditTag isFocus={isFocus} setIsFocus={setIsFocus} />
              <AskEditSummary />
            </AskEditFormItem>
            <AskSubmitBox>
              <AskSubmitButton onClick={handleAskEditSumbit}>
                Save edits
              </AskSubmitButton>
              <CancelButton to="/answer">Cancel</CancelButton>
            </AskSubmitBox>
          </AskEditFormBox>
          <AddCommentBox>
            {/*Todo: 생성한 Comment가 쌓이고 보일 수 있게 구현하기 */}
            <AskComments />
            <AddCommentText onClick={() => setComment(true)} comment={comment}>
              Add a comment
            </AddCommentText>
            {comment && <AskComment setComment={setComment} />}
          </AddCommentBox>
        </AskEditItems>
      </AskEditBox>
    </AskEditLayout>
  );
};

export default AskEdit;

const AskEditLayout = styled.div`
  // container
  display: flex;
  justify-content: space-between;
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
`;

const AskEditBox = styled.div`
  // content
  width: calc(100% - 164px);
  max-width: 1100px;
  min-height: 750px;
  padding: 24px;

  background-color: hsl(0, 0, 100%);
  border-radius: 0;
  /* border: 1px solid hsl(210, 8%, 85%); */

  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 0;
`;

const AskEditItems = styled.div`
  // box-border
  width: calc(100% - 365px - 24px);
  margin: 0;
  padding: 0;
`;

const AskEditFormBox = styled.div`
  // form
`;

const AskEditFormItem = styled.div`
  width: 100%;
  margin: 10px 0 0 0;
`;

const AskSubmitBox = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 0 16px 0;
`;

const AskSubmitButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(206, 100%, 52%);
  border-radius: 6px;

  width: 90px;
  margin: 12px 4px 0 0;
  padding: 12px 10.4px;

  &:hover {
    background-color: #0174cd;
  }
`;

const CancelButton = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  color: #0174cd;
  border-radius: 6px;

  width: 70px;
  margin: 12px 0 0 4px;
  padding: 12px 10px;

  &:hover {
    background-color: hsl(206, 100%, 97%);
  }
`;

const AddCommentBox = styled.div``;

const AddCommentText = styled.div`
  display: ${({ comment }) => (comment ? 'none' : 'block')};
  cursor: pointer;
  font-size: 13px;
  color: #0174cd;

  padding: 0 3px 2px;

  &:hover {
    color: hsl(206, 100%, 52%);
  }
`;
