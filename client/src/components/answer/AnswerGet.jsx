import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteByAnswer } from '../../redux/api/answer/deleteAnswer';

const AnswerTitleLayout = styled.div`
  width: 727px;

  font-size: 13px;

  h2 {
    width: 727px;
    height: 44.69px;
    font-size: 19px;
    margin: 0 0 19px;
    padding: 20px 0 0;
  }
`;

const AnswerTitleBox = styled.div`
  width: 726.78px;
  display: flex;
  flex-wrap: wrap;
`;

const AnswerContents = styled.div`
  width: 726px;
  padding: 0;
  display: flex;
  justify-content: space-between;

  button {
    color: #6a737c;
    font-size: 12px;
    padding-left: 12px;
  }
`;

const AnswerGet = () => {
  const url = process.env.REACT_APP_API_URL;
  const [answers, setAnswers] = useState([]);
  const { questionId } = useParams();
  const { loading } = useSelector((state) => state.deleteAnswer);
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
  let id = +questionId;

  useEffect(() => {
    axios
      .get(`${url}/questions/${questionId}/answers`)
      .then((response) => {
        setAnswers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching answers:', error);
      });
  }, []);

  const handleDelete = (answerId) => {
    dispatch(deleteByAnswer({ id, answerId, token }));
  };

  return (
    <AnswerTitleLayout>
      <h2>Answer</h2>
      <AnswerTitleBox>
        {answers.map((answer) => (
          <AnswerContents key={answer.answerId}>
            <div dangerouslySetInnerHTML={{ __html: answer.answerContent }} />
            <button
              onClick={() => handleDelete(answer.answerId)}
              disabled={loading === 'pending'}
            >
              {loading === 'pending' ? 'Deleting...' : 'Delete'}
            </button>
          </AnswerContents>
        ))}
      </AnswerTitleBox>
    </AnswerTitleLayout>
  );
};

export default AnswerGet;
