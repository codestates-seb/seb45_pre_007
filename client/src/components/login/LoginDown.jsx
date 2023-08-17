import React from 'react';
import { css, styled } from 'styled-components';
import { Link } from 'react-router-dom';

const LoginDown = () => {
  return (
    <LoginDownBox>
      <AccountBox>
        <AccountText>Don&apos;t have an account?</AccountText>
        <SignUpButton to="/signup">Sign up</SignUpButton>
      </AccountBox>
      <EmployerBox>
        <EmployerItem>
          <EmployerText>
            Are you an employer?
            <SignUpOnTextDown width={'640px'}>Sign up on</SignUpOnTextDown>
          </EmployerText>
        </EmployerItem>
        <SignOnDownHoverBox>
          <TalentTextDown width={'640px'}>Talent</TalentTextDown>
        </SignOnDownHoverBox>
        <SignOnHoverBox>
          <SignUpOnText>Sign up on</SignUpOnText>
          <TalentText>Talent</TalentText>
          <SignOnIcon>
            <svg
              aria-hidden="true"
              className="va-text-bottom sm:d-none svg-icon iconShareSm"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path
                d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"
                className="icon"
              ></path>
            </svg>
          </SignOnIcon>
        </SignOnHoverBox>
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

  &:hover {
    color: hsl(206, 100%, 52%);
  }
`;

const TalentText = styled.div`
  color: #0074cc;
  margin: 0 3px 0 0;

  @media (max-width: 640px) {
    display: none;
  }
`;

const TalentTextDown = styled.div`
  margin: 2px 0 0 3px;

  ${({ width }) =>
    width === '640px' &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `};

  @media (min-width: 640px) {
    display: none;
  }
`;

const SignUpOnText = styled.span`
  margin: 0 3px 0 0;
  @media (max-width: 640px) {
    display: none;
  }
`;

const SignUpOnTextDown = styled.span`
  margin: 0 0 0 3px;
  color: #0074cc;

  &:hover {
    color: hsl(206, 100%, 52%);
  }

  ${({ width }) =>
    width === '640px' &&
    css`
      display: flex;
    `};

  @media (min-width: 640px) {
    display: none;
  }
`;

const EmployerBox = styled.div`
  display: flex;

  margin: 12px 0 0 0;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const EmployerItem = styled.div``;

const EmployerText = styled.div`
  display: flex;
`;

const SignOnIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #0074cc;

  .icon {
    fill: hsl(206, 100%, 40%);
  }

  @media (max-width: 640px) {
    .icon {
      display: none;
    }
  }
`;

const SignOnHoverBox = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 0 0 3px;
  color: #0074cc;

  &:hover {
    color: hsl(206, 100%, 52%);

    ${TalentText}, ${SignOnIcon}, ${SignUpOnText} {
      color: hsl(206, 100%, 52%);
      .icon {
        fill: hsl(206, 100%, 52%);
      }
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;

    &:hover {
      color: hsl(206, 100%, 52%);

      ${TalentTextDown}, ${SignUpOnTextDown} {
        color: hsl(206, 100%, 52%);
        .icon {
          fill: hsl(206, 100%, 52%);
        }
      }
    }
  }
`;

const SignOnDownHoverBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 0 0 3px;
  color: #0074cc;

  @media (max-width: 640px) {
    &:hover {
      color: hsl(206, 100%, 52%);
    }
  }
`;
