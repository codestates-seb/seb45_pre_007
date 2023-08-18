import React, { useState } from 'react';
import { styled } from 'styled-components';
import AskNotice from '../components/ask/AskNotice.jsx';
import ask from '../assert/ask.png';
import AskTitle from '../components/ask/AskTitle.jsx';
import AskTag from '../components/ask/AskTag.jsx';
import AskDuplicate from '../components/ask/AskDuplication.jsx';
import DiscardModal from '../components/ask/DiscardModal.jsx';
import AskProblem from '../components/ask/AskProblem.jsx';
import AskExpand from '../components/ask/AskExpand.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { resetAsk } from '../redux/feature/askSlice.js';
import { postToAsk } from '../redux/api/askApi.js';
import { useLocation, useNavigate } from 'react-router-dom';

const Ask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(0);
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
        [
          {
            color: [
              '#000000',
              '#e60000',
              '#ff9900',
              '#ffff00',
              '#008a00',
              '#0066cc',
              '#9933ff',
              '#ffffff',
              '#facccc',
              '#ffebcc',
              '#ffffcc',
              '#cce8cc',
              '#cce0f5',
              '#ebd6ff',
              '#bbbbbb',
              '#f06666',
              '#ffc266',
              '#ffff66',
              '#66b966',
              '#66a3e0',
              '#c285ff',
              '#888888',
              '#a10000',
              '#b26b00',
              '#b2b200',
              '#006100',
              '#0047b2',
              '#6b24b2',
              '#444444',
              '#5c0000',
              '#663d00',
              '#666600',
              '#003700',
              '#002966',
              '#3d1466',
              'custom-color',
            ],
          },
          { background: [] },
        ],
        ['image', 'video'],
        ['clean'],
      ],
    },
  };
  const dispatch = useDispatch();

  const askData = useSelector((state) => state.ask);

  const handleAskSumbit = () => {
    dispatch(postToAsk({ title: askData.title, content: askData.content }));
    dispatch(resetAsk());
  };

  // const { pathname } = useLocation();
  // const navigate = useNavigate();

  // const goToLogin = () => {
  //   navigate('/login', { state: pathname });
  // };

  return (
    <AskBox>
      <AskItems>
        <AskNoticeBox>
          <AskItem>
            <AskTitleBox>
              <AskTitleText>Ask a public question</AskTitleText>
            </AskTitleBox>
            <AskNotice />
          </AskItem>
        </AskNoticeBox>
        <AskFormBox>
          <AskMainBox>
            <AskTitle isFocus={isFocus} setIsFocus={setIsFocus} />
            <AskProblem
              isFocus={isFocus}
              setIsFocus={setIsFocus}
              modules={modules}
            />
            <AskExpand
              isFocus={isFocus}
              setIsFocus={setIsFocus}
              modules={modules}
            />
            <AskTag isFocus={isFocus} setIsFocus={setIsFocus} />
            <AskDuplicate isFocus={isFocus} setIsFocus={setIsFocus} />
          </AskMainBox>
          <AskSubmitBox>
            <AskSubmitButton onClick={handleAskSumbit}>
              Post your question
            </AskSubmitButton>
            <DiscardButton onClick={() => setIsOpen(!isOpen)}>
              Discard draft
            </DiscardButton>
            <DiscardModalBox>
              <DiscardModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </DiscardModalBox>
          </AskSubmitBox>
        </AskFormBox>
      </AskItems>
    </AskBox>
  );
};

export default Ask;

const AskBox = styled.div`
  display: flex;
  justify-content: center;

  margin: 0;
  max-width: 100%;

  background-color: #f8f9f9;
`;

const AskItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1264px;
  min-height: 750px;
  padding: 0 24px;
`;

const AskNoticeBox = styled.div`
  width: 100%;
`;

const AskItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const AskTitleBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  background-repeat: no-repeat;
  background-image: url(${ask});
  background-position: center right;
  background-size: 570px 130px;

  @media (min-width: 1050px) {
    height: 130px;
  }
`;

const AskTitleText = styled.h1`
  font-size: 27px;
  font-weight: 600;
  color: #232629;
`;

const AskFormBox = styled.div`
  width: 100%;
  margin: 0 0 48px 0;
`;

const AskMainBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const AskSubmitBox = styled.div`
  display: flex;
  width: 100%;
`;

const AskSubmitButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(206, 100%, 52%);
  border-radius: 6px;

  width: 135px;
  margin: 12px 8px 0 0;
  padding: 12px 10.4px;

  &:hover {
    background-color: #0174cd;
  }
`;

const DiscardButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  color: hsl(358, 62%, 47%);
  border-radius: 6px;

  width: 100px;
  margin: 12px 8px 0 8px;
  padding: 12px 10px;

  &:hover {
    background-color: hsl(358, 75%, 97%);
  }
`;

const DiscardModalBox = styled.div``;
