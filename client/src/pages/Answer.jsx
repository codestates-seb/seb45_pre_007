import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import LoginNav from '../components/LoginNav.jsx';
import Aside from '../components/Aside.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineUpCircle, AiOutlineDownCircle } from 'react-icons/ai';
import axios from 'axios';
import AnswerDetail from '../components/answer/AnswerDetail.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/feature/counterSlice.js';
import AnswerGet from '../components/answer/AnswerGet.jsx';
import { setNextLevel } from '../redux/feature/login/loginSlice.js';
import { deleteByAsk } from '../redux/api/ask/deleteAsk.js';

const AnswerLayout = styled.section`
  display: flex;
  justify-content: center;
`;

const AnswerBox = styled.section`
  width: 1100px;
  text-align: left;
  padding: 24px;
`;

const AnswerTitle = styled.div`
  width: 1051px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-bottom: 8px;

  h1 {
    color: #3b4045;
    font-size: 27px;
  }
`;

const AnswerSubTitle = styled.div`
  width: 1051px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgb(227, 230, 232);
  span {
    font-size: 13px;
    color: #6a737c;
    margin: 0 2px 0 0;
  }
`;

const AnswerContentBox = styled.div`
  width: 1051px;
  display: flex;
  justify-content: space-between;
`;

const AnswerVote = styled.div`
  width: 56.78px;
  padding: 0 16px 0 0;
  color: #232629;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  button {
    cursor: pointer;
  }
`;
const AnswerCount = styled.div`
  font-size: 19px;
  margin: 2px;
  padding: 4px 0;
  width: 44.78px;
  //width: 32.84px;
  text-align: center;
`;

const AnswerContent = styled.div`
  width: 670.22px;
  padding: 0 16px 0 0;
  color: #232629;
  font-size: 15px;
  display: flex;
  justify-content: flex-start;
  align-content: space-between;
  flex-wrap: wrap;
`;

const AnswerSubContent = styled.div`
  width: 670.22px;
  height: 79.69px;
  margin: 16px 0;
  padding: 4px 0 0;
  color: #232629;
  font-size: 13px;
  display: flex;
  justify-content: flex-start;
  //align-items: flex-end;
`;

const AnswerContentCategory = styled.div`
  width: 446.22px;
  height: 25px;
  //margin: -4px;
  display: flex;
  justify-content: flex-start;

  button {
    color: #6a737c;
    font-size: 13px;
    padding-right: 8px;
  }
`;

const AnswerContentUserInfo = styled.div`
  width: 200px;
  height: 67px;
  padding: 5px 6px 7px 7px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 3px;
  background-color: #d0e3f1;

  div {
    font-size: 11px;
    color: #6a737c;
    margin: 1px 0 4px;
    width: 187px;
    height: 15.69px;
  }

  p {
    font-size: 13px;
    width: 147px;
    height: 35px;
    color: #0074cc;
    padding-left: 8px;
  }

  img {
    width: 32px;
    height: 32px;
  }
`;

const AnswerContentComment = styled.div`
  width: 654px;
  height: 17px;
  font-size: 13px;
  padding-left: 71px;

  button {
    color: #838c95;
  }
`;

const AnswerBtn = styled.div`
  font-size: 13px;
  background-color: #0a95ff;
  padding: 10.4px;
  cursor: pointer;
  display: inline-block;
  color: white;
  text-align: center;
  box-sizing: border-box;
  box-shadow: rgba(255, 255, 255, 0.4);
  line-height: 0.938rem;
  white-space: nowrap;
  border-radius: 0.188rem;

  &:hover {
    background-color: #0174cd;
  }
`;

const Answer = () => {
  const navigate = useNavigate();
  const [questionData, setQuestionData] = useState({});
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_API_URL;
  const { questionId } = useParams();
  const loginData = useSelector((state) => state.login);
  const successedUser = loginData.isSuccessed;
  const { loading } = useSelector((state) => state.askDelete);
  const token = useSelector((state) => state.login.token);
  const loggedInUser = useSelector((state) => state.users.user);
  const getUser = useSelector((state) => state.users.user);

  console.log('loginData.userName:', getUser.userName);

  const AskBtn = () => {
    if (successedUser) {
      navigate('/ask');
    } else {
      dispatch(setNextLevel('/ask'));
      navigate('/login');
    }
  };

  const EditBtn = () => {
    const editRoute = `/questions/${questionId}/edit`;
    navigate(editRoute);
  };

  const handleDeleteAsk = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      dispatch(deleteByAsk({ id: +questionId, token }));
      navigate('/');
    }
  };

  useEffect(() => {
    const fetchQuestionData = async () => {
      try {
        const response = await axios.get(`${url}/questions/${questionId}`);
        setQuestionData(response.data);
      } catch (error) {
        console.error('Error fetching question data:', error);
      }
    };

    fetchQuestionData();
  }, [questionId]);

  return (
    <AnswerLayout>
      <LoginNav />
      <AnswerBox>
        <AnswerTitle>
          <h1>{questionData.questionTitle}</h1>
          <AnswerBtn onClick={AskBtn}>Ask Question</AnswerBtn>
        </AnswerTitle>
        <AnswerSubTitle>
          <span>Asked&nbsp;{questionData.createdAt} </span>
          <span>
            &nbsp;&nbsp;&nbsp;Modified&nbsp;{questionData.lastModifiedAt}
          </span>
          <span>&nbsp;&nbsp;&nbsp;Viewed&nbsp;</span>
        </AnswerSubTitle>
        <AnswerContentBox>
          <AnswerVote>
            <button>
              <AiOutlineUpCircle
                size={40.78}
                strokeWidth={1}
                onClick={() => dispatch(increment())}
              />
            </button>
            <AnswerCount>{count}</AnswerCount>
            <button>
              <AiOutlineDownCircle
                size={40.78}
                strokeWidth={1}
                onClick={() => dispatch(decrement())}
              />
            </button>
          </AnswerVote>
          <AnswerContent>
            <p
              dangerouslySetInnerHTML={{ __html: questionData.questionContent }}
            />
            <AnswerSubContent>
              <AnswerContentCategory>
                <button>Share</button>
                <button type="submit" onClick={EditBtn}>
                  Edit
                </button>
                {getUser.userName === questionData.questionUser && (
                  <button onClick={handleDeleteAsk}>Delete</button>
                )}
                <button>Follow</button>
              </AnswerContentCategory>
              <AnswerContentUserInfo>
                <div>asked: {questionData.createdAt}</div>
                <img src={questionData.avatarImg} alt="test"></img>
                <p>{questionData.questionUser}</p>
              </AnswerContentUserInfo>
            </AnswerSubContent>
          </AnswerContent>
          <Aside />
        </AnswerContentBox>
        <AnswerContentComment>
          <button>Add a comment</button>
        </AnswerContentComment>
        <AnswerGet />
        <AnswerDetail />
      </AnswerBox>
    </AnswerLayout>
  );
};

export default Answer;
