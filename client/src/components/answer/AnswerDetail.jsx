import React, { useMemo, useRef } from 'react';
import { styled } from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetAnswer,
  setAnswerContent,
} from '../../redux/feature/answer/postAnswerSlice';
import { postToAnswer } from '../../redux/api/answer/postAnswer';

const AnswerFormLayout = styled.form`
  width: 727px;
  height: 424.47px;
  font-size: 13px;

  h2 {
    width: 727px;
    height: 44.69px;
    font-size: 19px;
    margin: 0 0 19px;
    padding: 20px 0 0;
  }
`;

const AnswerTitle = styled.div`
  width: 727px;
  height: 424.47px;
  font-size: 13px;

  h2 {
    width: 727px;
    height: 44.69px;
    font-size: 19px;
    margin: 0 0 19px;
    padding: 20px 0 0;
  }
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

const AnswerBtnbox = styled.form`
  width: 731px;
  height: 62.78px;
  margin: 0 -2px;
  padding: 10px 0 15px;
`;

const AnswerBtn = styled.div`
  font-size: 13px;
  background-color: #0a95ff;
  padding: 10.4px;
  cursor: pointer;
  display: inline-block;
  color: white;
  text-align: center;
  box-sizing: border-box;
  box-shadow: rgba(255, 255, 255, 0.4);
  line-height: 0.938rem;
  white-space: nowrap;
  border-radius: 0.188rem;

  &:hover {
    background-color: #0174cd;
  }
`;

const AnswerDetail = () => {
  const { questionId } = useParams();
  // 토큰을 보내기 위해 가져오는 데이터
  const token = useSelector((state) => state.login.token);
  const answerContent = useSelector((state) => state.postAnswer.content);
  const dispatch = useDispatch();

  // console.log(questionId);
  // console.log(89, token);
  // console.log(90, answerContent);

  const handleAnswerSubmit = async () => {
    if (answerContent) {
      await dispatch(
        postToAnswer({ id: questionId, token: token, content: answerContent })
      );
    }
    dispatch(resetAnswer());
  };

  const quillRef = useRef();
  const navigate = useNavigate();
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, 'link', 'image'],
        ],
      },
    };
  }, []);

  // const PostAnswer = () => {
  //   const quill = quillRef.current.getEditor();
  //   const text = quill.getText();
  //   const data = {
  //     answerId: 0,
  //     answerContent: text,
  //     createdAt: new Date().toISOString(),
  //   };
  //   const url = process.env.REACT_APP_API_URL;
  //   const headers = {
  //     Authorization: loginData.token,
  //   };
  //   axios
  //     .post(`${url}/questions/${questionId}/answers`, data, { headers })
  //     .then((response) => {
  //       console.log(response.status);
  //       if (response.status === 201) {
  //         navigate('/questions');
  //       } else {
  //         alert('답변이 등록되지 않았습니다.');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error posting answer:', error);
  //       alert('An error occurred while posting the answer.');
  //     });
  // };

  return (
    <AnswerFormLayout>
      <h2>Your Answer</h2>
      <AnswerInputBox>
        <ReactQuill
          ref={quillRef}
          value={answerContent}
          onChange={(content) => dispatch(setAnswerContent(content))}
          modules={modules}
          style={{ height: 210 }}
        />
      </AnswerInputBox>
      <AnswerBtnbox>
        <AnswerBtn onClick={handleAnswerSubmit}>Post your Answer</AnswerBtn>
      </AnswerBtnbox>
    </AnswerFormLayout>
  );
};

export default AnswerDetail;
