import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginNav from '../components/LoginNav.jsx';
import Aside from '../components/Aside.jsx';
import QuestionFilterBar from '../components/Question/QuestionFilterBar.jsx';
import QuestionListMain from '../components/Question/QuestionListMain.jsx';
import { setNextLevel } from '../redux/feature/login/loginSlice.js';
const Question = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.login);
  const successedUser = loginData.isSuccessed;
  const navigete = useNavigate();
  // console.log(successedUser);

  const handleGoToPage = () => {
    if (successedUser) {
      navigete('/ask');
    } else {
      dispatch(setNextLevel('/ask'));
      navigete('/login');
    }
  };

  return (
    <QuestionLayout>
      <QuestionLeftBox>
        {/* nav, 광고 */}
        <LoginNav />
      </QuestionLeftBox>
      <QuestionRightBox>
        {/* main, Aside */}
        <QuestionMainBox>
          <QuestionTitleAndAsk>
            <QuestionTitle>All Questions</QuestionTitle>
            <QuestionButton onClick={() => handleGoToPage()}>
              Ask Question
            </QuestionButton>
          </QuestionTitleAndAsk>
          <QuestionFilterBar />
          <QuestionListMain />
        </QuestionMainBox>
        <QuestionAside>
          <Aside />
        </QuestionAside>
      </QuestionRightBox>
    </QuestionLayout>
  );
};

export default Question;

const QuestionLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const QuestionLeftBox = styled.div`
  padding-top: 24px;
`;

const QuestionRightBox = styled.div`
  display: flex;
  padding: 24px;
`;

const QuestionMainBox = styled.div``;

const QuestionMain = styled.div``;

const QuestionAside = styled.div`
  margin-left: 24px;
  margin-bottom: 15px;
`;

const QuestionTitleAndAsk = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const QuestionTotalNumberAndFilter = styled.div`
  display: flex;
`;

const QuestionTitle = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 35px;
  color: #232629;
  margin-right: 12px;
`;

const QuestionButton = styled.button`
  width: 98px;
  height: 37px;
  background-color: #1096fb;
  border-radius: 5px;
  text-align: center;
  color: white;

  &:hover {
    background-color: #0074cc;
  }
`;
