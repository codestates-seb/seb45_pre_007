import { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';
const QuestionListMain = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/questions`
      );
      setQuestions(result.data);
      console.log(result.data);
    }
    fetchData();
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
            <div>유저 ID</div>
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
