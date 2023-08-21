import { styled } from 'styled-components';
import { ReactComponent as FilterIcon } from '../../assert/filtericon.svg';

const QuestionFilterBar = () => {
  return (
    <QuestionFilterLayout>
      <QuestionTotalBox>question</QuestionTotalBox>
      <QuestionFilterBox>
        <QuestionFilterMenu>
          <QuestionFilterMenuButton>
            <p>Newest</p>
          </QuestionFilterMenuButton>
          <QuestionFilterMenuButton>
            <p>Active</p>
          </QuestionFilterMenuButton>
          <QuestionFilterMenuButton>
            <p>Bountied</p>
          </QuestionFilterMenuButton>
          <QuestionFilterMenuButton>
            <p>Unaswered</p>
          </QuestionFilterMenuButton>
          <QuestionFilterMenuButton>
            <p>More</p>
          </QuestionFilterMenuButton>
        </QuestionFilterMenu>
      </QuestionFilterBox>
      <QuestionFilterMenuBox>
        <QuestionFilterButton>
          <FilterIcon />
          <p>Filter</p>
        </QuestionFilterButton>
      </QuestionFilterMenuBox>
    </QuestionFilterLayout>
  );
};

export default QuestionFilterBar;

const QuestionFilterLayout = styled.div`
  margin-bottom: 12px;
  display: flex;
`;
const QuestionTotalBox = styled.div`
  width: 263px;
  height: 22px;
`;

const QuestionFilterBox = styled.div``;

const QuestionFilterMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 0.8px solid #babfc4;
  border-radius: 5px;
  margin-right: 16px;
`;

const QuestionFilterMenuBox = styled.div``;

const QuestionFilterMenuButton = styled.button`
  p {
    font-size: 12px;
    line-height: 14px;
  }
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9.6px;
  margin-bottom: -1px;
  margin-right: -1px;
  border-left: 0.8px solid #babfc4;
  &:first-child {
    border: none;
  }
  &:hover {
    background-color: rgb(248, 249, 249);
  }
`;

const QuestionFilterButton = styled.button`
  display: flex;
  background-color: #e1ecf4;
  color: #39739d;
  border-radius: 5px;
  padding: 9.6px;
  p {
    margin-left: 0.4rem;
  }
`;
