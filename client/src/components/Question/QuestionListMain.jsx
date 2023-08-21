import { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';
import QuestionListContent from './QustionListContent.jsx';
import QuestionPageNation from './QuestionPageNation.jsx';
const QuestionListMain = () => {
  const [questions, setQuestions] = useState([]);
  const [isFetch, setisFetch] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_API_URL}/questions`
        );
        setisFetch(true);
        setQuestions(result.data);
        console.log(result.data);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <QuestionListLayout>
      {isFetch &&
        questions.map((question, index) => {
          return <QuestionListContent key={index} question={question} />;
        })}
      <QuestionPageNation />
    </QuestionListLayout>
  );
};

export default QuestionListMain;

const QuestionListLayout = styled.div``;
