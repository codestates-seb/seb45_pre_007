import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getByQuestions } from '../../redux/api/question/getByQuestions';
import { reset } from '../../redux/feature/question/allQuestionsSlice';

const QuestionListMain = () => {
  const [questions, setQuestions] = useState([]);

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
    dispatch(reset());
    dispatch(getByQuestions());
  }, []);

  return (
    <QuestionListLayout>
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
    </QuestionListLayout>
  );
};

export default QuestionListMain;

const QuestionListLayout = styled.div``;

const QuestionListContent = styled.div`
  display: flex;
  padding: 16px;
`;

const QuestionLeftBox = styled.div`
  margin-right: 16px;
  margin-bottom: 4px;
  div {
    display: flex;
  }
  span {
    margin-left: 0.4rem;
  }
`;

const QuestionRightBox = styled.div`
  flex-grow: 1;
  h3 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
      'Segoe UI', 'Liberation Sans', sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
  }
`;
