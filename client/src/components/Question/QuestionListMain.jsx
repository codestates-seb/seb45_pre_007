import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import QuestionListContent from './QustionListContent.jsx';
import QuestionPageNation from './QuestionPageNation.jsx';
import QuestionFilterBar from './QuestionFilterBar.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getByQuestions } from '../../redux/api/question/getByQuestions.js';

const QuestionListMain = () => {
  const [questions, setQuestions] = useState([]);
  const [isFetch, setisFetch] = useState(false);

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getByQuestions());
  }, []);

  // const user = () => {
  //   questions.map((cur, idx) => {
  //     console.log(cur);
  //   });
  // };

  // const questionsData = useSelector((state) => state.allQuestions.questions);

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
      <QuestionFilterBar questions={questions} />
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
