import React from 'react';
import { css, styled } from 'styled-components';
import { Link } from 'react-router-dom';

const SignDown = () => (
  <SignDownBox>
    Already have an account?
    <LoginButton>Log in</LoginButton>
    <SignDownTalentBox>
      Are you an employer?<SignDownA>Sign up on Talent</SignDownA>
      <svg
        aria-hidden="true"
        className="va-text-bottom sm:d-none svg-icon iconShareSm"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="hsl(206,100%,52%)"
      >
        <path d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"></path>
      </svg>
    </SignDownTalentBox>
  </SignDownBox>
);

export default SignDown;

const SignDownBox = styled.div`
  text-align: center;
  width: 284px;
  height: 46px;
  font-size: 13px;
  line-height: 17px;
  margin-bottom: 24px;
`;

const SignDownTalentBox = styled.div`
  margin-top: 12px;
`;

const SignDownA = styled.a`
  padding: 0 3px;
  color: #007bff; /* 기본 링크 색상 */

  &:visited {
    color: #007bff; /* 방문한 링크 색상 */
  }

  &:hover {
    color: #8295ff; /* 호버 시 링크 색상 */
  }
`;

const LoginButton = styled(Link)`
  padding-left: 3px;
  cursor: pointer;
  color: #0074cc;

  &:hover {
    color: hsl(206, 100%, 52%);
  }
`;
