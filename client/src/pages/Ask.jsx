import React from 'react';
import { styled } from 'styled-components';
import AskNotice from '../components/ask/AskNotice.jsx';
import ask from '../assert/ask.png';
import AskTitle from '../components/ask/AskTitle.jsx';
import AskTag from '../components/ask/AskTag.jsx';
import AskDuplicate from '../components/ask/AskDuplication.jsx';

const Ask = () => {
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
            <AskTitle />
            <AskTag />
            <AskDuplicate />
          </AskMainBox>
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
  width: 100%;
`;
