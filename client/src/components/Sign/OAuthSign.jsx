import React from 'react';
import { styled } from 'styled-components';
import google from '../../assert/google.png';
import github from '../../assert/github.png';
import facebook from '../../assert/facebook.png';
// PR 테스트 및 코드수정
const OAuthSign = () => {
  return (
    <OAuthSignBox>
      <GoogleBox>
        <GoogleIcon />
        <GoogleText>Sign up with Google</GoogleText>
      </GoogleBox>
      <GithubBox>
        <GithubIcon />
        <GithubText>Sign up with GitHub</GithubText>
      </GithubBox>
      <FacebookBox>
        <FacebookIcon />
        <FacebookText>Sign up with Facebook</FacebookText>
      </FacebookBox>
    </OAuthSignBox>
  );
};

export default OAuthSign;

const OAuthSignBox = styled.div`
  margin: 0 0 16px 0;
`;

// google
const GoogleBox = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 3px;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 6px;
  background-color: #ffffff;

  width: 288px;
  height: 38px;

  margin: 8px 0;
  padding: 10.4px;

  &:hover {
    background-color: hsl(210, 8%, 97.5%);
  }

  @media (max-width: 640px) {
    width: 266px;
  }
`;

const GoogleIcon = styled.img.attrs({
  src: `${google}`,
})`
  width: 17px;
  height: 17px;
`;

const GoogleText = styled.div`
  font-size: 13px;
  color: #3b4045;
`;

// github
const GithubBox = styled(GoogleBox)`
  background-color: #2f3337;

  &:hover {
    background-color: hsl(210, 8%, 15%);
  }
`;

const GithubIcon = styled.img.attrs({
  src: `${github}`,
})`
  width: 17px;
  height: 17px;
`;

const GithubText = styled.div`
  color: #ffffff;
  font-size: 13px;
`;

// facebook
const FacebookBox = styled(GoogleBox)`
  border: none;
  background-color: #395499;

  &:hover {
    background-color: #314a86;
  }
`;

const FacebookIcon = styled.img.attrs({
  src: `${facebook}`,
})`
  width: 17px;
  height: 17px;
`;

const FacebookText = styled.div`
  font-size: 13px;
  color: #ffffff;
`;
