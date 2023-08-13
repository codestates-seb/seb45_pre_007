import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const LoginDown = () => {
  return (
    <LoginDownBox>
      <AccountBox>
        <AccountText>Don&apos;t have an account?</AccountText>
        <SignUpButton>Sign up</SignUpButton>
      </AccountBox>
      <EmployerBox>
        <EmployerText>Are you an employer?</EmployerText>
        <SignOnButton>
          Sign up on Talent
          <SignOnIcon>
            <svg
              aria-hidden="true"
              className="va-text-bottom sm:d-none svg-icon iconShareSm"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="hsl(206, 100%, 40%)"
            >
              <path d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"></path>
            </svg>
          </SignOnIcon>
        </SignOnButton>
      </EmployerBox>
    </LoginDownBox>
  );
};

export default LoginDown;

const LoginDownBox = styled.div`
  margin: 15px 0 0 0;
  font-size: 13px;
`;

const AccountBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const AccountText = styled.p``;

const SignUpButton = styled(Link)`
  cursor: pointer;
  color: #0074cc;
`;

const EmployerBox = styled.div`
  display: flex;
  gap: 5px;
  margin: 12px 0 0 0;
`;

const EmployerText = styled.p``;

const SignOnButton = styled.div`
  cursor: pointer;
  color: #0074cc;

  display: flex;
  gap: 5px;
`;

const SignOnIcon = styled.div``;
