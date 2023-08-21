import React, { useState } from 'react';
import { styled } from 'styled-components';
import OAuthSign from '../components/Sign/OAuthSign.jsx';
import SignDown from '../components/Sign/SignDown.jsx';
import SignInfo from '../components/Sign/SignInfo.jsx';
import SignForm from '../components/Sign/SignForm.jsx';
// 유효성 검사 유틸파일 생성, 회원가입 기능 구현 완료, 회원가입 완료 시 로그인 페이지로 리다이렉트

const SignUp = () => {
  return (
    <SignLayout>
      <SignRow>
        <SignInfo />
        <SignRightBox>
          <OAuthSign />
          <SignForm />
          <SignDown />
        </SignRightBox>
      </SignRow>
    </SignLayout>
  );
};

export default SignUp;

const SignLayout = styled.div`
  background-color: #f1f2f3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const SignRow = styled.div`
  display: flex;
`;

const SignRightBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
