import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import { getByQuestions } from '../../redux/api/question/getByQuestions';
import { reset } from '../../redux/feature/question/allQuestionsSlice';

=======
import QuestionListContent from './QustionListContent.jsx';
import QuestionPageNation from './QuestionPageNation.jsx';
>>>>>>> e828e0a690aff293cc69e0d8bf8d3d17def467e2
const QuestionListMain = () => {
  const [questions, setQuestions] = useState([]);
  const [isFetch, setisFetch] = useState(false);

  // useEffect(async () => {
  //   const result = await axios
  //     .get(`${process.env.REACT_APP_API_URL}/questions`)
  //     .then((res) => res.data);
  //   setQuestions(result);
  // }, []);

  // const user = () => {
  //   questions.map((cur, idx) => {
  //     console.log(cur);
  //   });
  // };

  const dispatch = useDispatch();
  // const questionsData = useSelector((state) => state.allQuestions.questions);

  useEffect(() => {
<<<<<<< HEAD
    dispatch(reset());
    dispatch(getByQuestions());
=======
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
>>>>>>> e828e0a690aff293cc69e0d8bf8d3d17def467e2
  }, []);

  return (
    <QuestionListLayout>
<<<<<<< HEAD
      <QuestionListContent>
        <QuestionLeftBox>
          <div>
            <span>1</span>
            <span>votes</span>
          </div>
          <div>
            <span>0</span>
            <span>answers</span>
          </div>
          <div>
            <span>2</span>
            <span>views</span>
          </div>
        </QuestionLeftBox>
        <QuestionRightBox>
          <h3>질문 제목</h3>
          {/* map 으로 수정 */}
          <div>
            <span>질문 내용</span>
          </div>
          <div>
            <div>tag</div>
            {/* <div>{user}</div> */}
          </div>
        </QuestionRightBox>
      </QuestionListContent>
=======
      {isFetch &&
        questions.map((question, index) => {
          return <QuestionListContent key={index} question={question} />;
        })}
      <QuestionPageNation />
>>>>>>> e828e0a690aff293cc69e0d8bf8d3d17def467e2
    </QuestionListLayout>
  );
};

export default QuestionListMain;

const QuestionListLayout = styled.div``;
