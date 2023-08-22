import { css, styled } from 'styled-components';
import { ReactComponent as FilterIcon } from '../../assert/filtericon.svg';
import { useState } from 'react';

const QuestionFilterBar = ({ questions }) => {
  //! 각 버튼을 눌렀을 때 하나의 버튼 배경 색만 변경
  const [isSelected, setIsSelected] = useState(null);
  const filterQuestions = [
    {
      title: 'Newest',
    },
    {
      title: 'Active',
    },
    {
      title: 'Bountied',
    },
    {
      title: 'More',
    },
  ];

  return (
    <QuestionFilterLayout>
      <QuestionTotalBox>
        {questions.length > 0 ? questions.length : '0'} questions
      </QuestionTotalBox>
      <QuestionFilterBox>
        {filterQuestions.map((cur, idx) => (
          <QuestionFilterMenu
            key={idx}
            isSelected={isSelected}
            title={cur.title}
          >
            <QuestionFilterMenuButton onClick={() => setIsSelected(cur.title)}>
              <p>{cur.title}</p>
            </QuestionFilterMenuButton>
          </QuestionFilterMenu>
        ))}
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

const QuestionFilterBox = styled.div`
  display: flex;
  border: 0.8px solid #babfc4;
  border-radius: 5px;
`;

const QuestionFilterMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  border-left: 0.8px solid #babfc4;

  &:first-child {
    border: none;
  }

  &:hover {
    background-color: rgb(248, 249, 249);

    &:first-child {
      /* border-left */
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  ${({ isSelected, title }) =>
    isSelected === title &&
    css`
      background-color: hsl(210, 8%, 90%);

      &:hover {
        background-color: hsl(210, 8%, 90%);
      }

      &:first-child {
        /* border-left */
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    `}
`;

const QuestionFilterMenuBox = styled.div``;

const QuestionFilterMenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 12px;
    line-height: 14px;
    padding: 9.6px;
    margin-right: -1px;
  }
`;

const QuestionFilterButton = styled.button`
  display: flex;
  background-color: #e1ecf4;
  color: #39739d;
  border-radius: 5px;
  padding: 9.6px;
  margin-left: 16px;
  p {
    margin-left: 0.4rem;
  }
`;
