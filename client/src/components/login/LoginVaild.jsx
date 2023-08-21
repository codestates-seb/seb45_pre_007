import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const LoginVaild = () => {
  return (
    <LoginVaildLayout>
      <LoginVaildTextBold>
        You must be logged in to ask a question on Stack Overflow
      </LoginVaildTextBold>
      <LoginVaildText>
        Log in below or <GoToSignUp to="/signup">sign up</GoToSignUp>
      </LoginVaildText>
    </LoginVaildLayout>
  );
};

export default LoginVaild;

const LoginVaildLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid hsl(47, 73%, 50%);
  background-color: #fdf7e2;
  margin: 24px auto;
  padding: 32px;
`;

const LoginVaildText = styled.p`
  padding: 0 12px;
  font-size: 15px;
  color: #232629;
`;

const GoToSignUp = styled(Link)`
  color: #0074cc;
  font-size: 15px;
`;

const LoginVaildTextBold = styled(LoginVaildText)`
  margin: 12px 0 7.5px;
  font-weight: 700;
`;
