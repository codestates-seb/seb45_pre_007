import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import dateFommated from '../../utils/dateFomatted';
const QustionListContent = ({ question }) => {
  const navigate = useNavigate();
  const handleCilck = (e) => {
    navigate(`/questions/${question.questionId}`);
  };
  return (
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
        <div onClick={handleCilck}>
          <h3>{question.questionTitle}</h3>
        </div>
        <QuestionContentBox>
          <div dangerouslySetInnerHTML={{ __html: question.questionContent }} />
        </QuestionContentBox>
        <QuestionContentUserInfo>
          <div>
            <button>javascript</button>
            <button>reacte</button>
            <button>client</button>
          </div>
          <div>
            <img src={question.avatarImg} alt="유저 이미지"></img>
            <span>{question.questionUser}</span>
            {dateFommated(question.createdAt)}
          </div>
        </QuestionContentUserInfo>
      </QuestionRightBox>
    </QuestionListContent>
  );
};

export default QustionListContent;

const QuestionListContent = styled.div`
  border-top: 1px solid #e3e6e8;
  display: flex;
  padding: 16px;
`;

const QuestionLeftBox = styled.div`
  margin-right: 16px;
  margin-bottom: 4px;
  div {
    display: flex;
    justify-content: right;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
      'Segoe UI', 'Liberation Sans', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    margin-bottom: 5px;
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
    font-size: 20px;
    line-height: 22px;
    margin-top: -1.9px;
    margin-bottom: 5px;
    padding-right: 24px;
    color: rgb(0, 116, 207);

    cursor: pointer;
    &:hover {
      color: #84d3ff;
    }
  }
`;

const QuestionContentBox = styled.div`
  margin-bottom: 8px;
  div {
    margin-bottom: 8px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
      'Segoe UI', 'Liberation Sans', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
  }
`;

const QuestionContentUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  div:last-child {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    span {
      color: rgb(0, 116, 207);
      margin: 2px;
    }
  }
  div:first-child {
    button {
      text-align: center;
      margin-right: 4px;
      margin-bottom: 2px;
      border: 1px;
      padding: 5px 6px;
      padding-bottom: 8px;
      background-color: #e1ecf4;
      color: #39739d;
      margin-bottom: 8px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
        'Segoe UI', 'Liberation Sans', sans-serif;
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      border-radius: 5px;
      &:hover {
        background-color: #d0e3f1;
      }
    }
  }
  align-items: center;
  img {
    width: 18px;
    height: 18px;
  }
`;
