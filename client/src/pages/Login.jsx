import React, { useState } from 'react';
import { css, styled } from 'styled-components';
import OAuthLogin from '../components/login/OAuthLogin.jsx';
import LoginForm from '../components/login/LoginForm.jsx';
import LoginDown from '../components/login/LoginDown.jsx';
import { Link } from 'react-router-dom';
import logo1 from '../assert/logo1.png';
import LoginVaild from '../components/login/LoginVaild.jsx';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
  const [allCheck, setAllCheck] = useState(true);
  const loginData = useSelector((state) => state.login);

  return (
    <LoginBox ask={loginData.nextLevel}>
      {loginData.nextLevel === '/ask' && <LoginVaild />}
      <Logo to="/">
        <img src={logo1} alt="logo" />
      </Logo>
      {/* OAuth Login */}
      <OAuthLogin />

      {/* Login Form */}
      <LoginForm allCheck={allCheck} setAllCheck={setAllCheck} />

      {/* Login footer */}
      <LoginDown />
    </LoginBox>
  );
};

const Logo = styled(Link)`
  img {
    cursor: pointer;
    width: 37px;
    height: 37px;

    margin: 0 0 15px 0;
  }
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ ask }) =>
    ask !== '/ask' &&
    css`
      height: 100%;
    `}

  padding: 24px;

  background-color: #f2f2f3;
`;

// depth: html, body, #root, App.js
