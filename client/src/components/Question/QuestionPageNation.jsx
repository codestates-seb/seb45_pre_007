import { styled } from 'styled-components';

const QuestionPageNation = () => {
  return (
    <QuestionPageNationLayout>
      <QuestionPageNumberBox>
        <QuestionPageNumberItem>1</QuestionPageNumberItem>
        <QuestionPageNumberItem>2</QuestionPageNumberItem>
        <QuestionPageNumberItem>3</QuestionPageNumberItem>
        <span>...</span>
        <QuestionPageNumberItem>4</QuestionPageNumberItem>
        <QuestionPageNumberItem>5</QuestionPageNumberItem>
        <QuestionPageNumberItem>Next</QuestionPageNumberItem>
      </QuestionPageNumberBox>
      <QuestionPageNumberBox>
        <QuestionPageNumberItem>15</QuestionPageNumberItem>
        <QuestionPageNumberItem>30</QuestionPageNumberItem>
        <QuestionPageNumberItem>50</QuestionPageNumberItem>
        <span>per page</span>
      </QuestionPageNumberBox>
    </QuestionPageNationLayout>
  );
};

export default QuestionPageNation;

const QuestionPageNationLayout = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    margin: 20px 0;
  }
`;

const QuestionPageNumberBox = styled.div`
  display: flex;
  span {
    margin-right: 0.5rem;
    font-size: 13px;
    font-weight: 400;
    line-height: 25px;
  }
`;

const QuestionPageNumberItem = styled.button`
  border: 1px solid #d6d9dc;
  padding: 3px 8px;
  margin-right: 0.5rem;
  border-radius: 5px;
  &:hover {
    background-color: #f48225;
  }
`;
