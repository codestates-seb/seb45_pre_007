import React, { useState } from 'react';
import { css, styled } from 'styled-components';
import OAuthLogin from '../components/login/OAuthLogin.jsx';
import LoginForm from '../components/login/LoginForm.jsx';
import LoginDown from '../components/login/LoginDown.jsx';
import { Link } from 'react-router-dom';
import logo1 from '../assert/logo1.png';

export const Login = () => {
  const [allCheck, setAllCheck] = useState(true);

  return (
    <LoginBox check={allCheck}>
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
  padding: 24px;
  background-color: #f2f2f3;

  ${({ check }) =>
    check
      ? css`
          height: 100%;
        `
      : css`
          /* height: 0; */
        `}
`;

// depth: html, body, #root, App.js
