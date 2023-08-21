import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
  witdh: 726.78px;
  display: flex;
`;

const AnswerContents = styled.div`
  witdh: 670px;
  padding: 0 16px 0 0;
`;

const AnswerGet = () => {
  const url = process.env.REACT_APP_API_URL;
  const [answers, setAnswers] = useState([]);
  const { questionId } = useParams();

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

  return (
    <AnswerTitleLayout>
      <h2>Answer</h2>
      <AnswerTitleBox>
        {answers.map((answer) => (
          <AnswerContents key={answer.answerId}>
            {answer.answerContent}
          </AnswerContents>
        ))}
      </AnswerTitleBox>
    </AnswerTitleLayout>
  );
};

export default AnswerGet;
