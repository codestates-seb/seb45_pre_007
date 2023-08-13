import React from 'react';
import { styled } from 'styled-components';
import google from '../../assert/google.png';
import github from '../../assert/github.png';
import facebook from '../../assert/facebook.png';

const OAuthLogin = () => {
  return (
    <OAuthLoginBox>
      <GoogleBox>
        <GoogleIcon />
        <GoogleText>Log in with Google</GoogleText>
      </GoogleBox>
      <GithubBox>
        <GithubIcon />
        <GithubText>Log in with GitHub</GithubText>
      </GithubBox>
      <FacebookBox>
        <FacebookIcon />
        <FacebookText>Log in with Facebook</FacebookText>
      </FacebookBox>
    </OAuthLoginBox>
  );
};

export default OAuthLogin;

const OAuthLoginBox = styled.div`
  margin: 0 0 16px 0;
`;

// google
const GoogleBox = styled.div`
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
`;

const GoogleIcon = styled.img.attrs({
  src: `${google}`,
})`
  width: 18px;
  height: 18px;
`;

const GoogleText = styled.div`
  font-size: 13px;
  color: #3b4045;
`;

// github
const GithubBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 3px;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 6px;
  background-color: #2f3337;

  width: 288px;
  height: 38px;

  margin: 8px 0;
  padding: 10.4px;
`;

const GithubIcon = styled.img.attrs({
  src: `${github}`,
})`
  width: 18px;
  height: 18px;
`;

const GithubText = styled.div`
  color: #ffffff;
  font-size: 13px;
`;

// facebook
const FacebookBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 3px;
  border-radius: 6px;
  background-color: #395499;

  width: 288px;
  height: 38px;

  margin: 8px 0;
  padding: 10.4px;
`;

const FacebookIcon = styled.img.attrs({
  src: `${facebook}`,
})`
  width: 18px;
  height: 18px;
`;

const FacebookText = styled.div`
  font-size: 13px;
  color: #ffffff;
`;
