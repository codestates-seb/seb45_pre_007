import React from 'react';
import { styled } from 'styled-components';

const LoginForm = () => {
  return (
    <LoginFormBox>
      <LoginFormItem>
        <EmailFormbox>
          <EmailText>Email</EmailText>
          <EmailInput />
        </EmailFormbox>
        <PasswordFormbox>
          <PasswordTextBox>
            <PasswordText>Password</PasswordText>
            <PasswordFind>Forgot password?</PasswordFind>
          </PasswordTextBox>
          <PasswordInput />
        </PasswordFormbox>
        <LoginSubmitBox>
          <LoginSubmit>Log in</LoginSubmit>
        </LoginSubmitBox>
      </LoginFormItem>
    </LoginFormBox>
  );
};

export default LoginForm;

const LoginFormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 288px;
  height: 234px;

  margin: 0 0 24px;
  padding: 24px;

  background-color: #ffffff;
  border-radius: 8px;
  box-shadow:
    0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.1);

  @media (max-width: 640px) {
    width: 266px;
  }
`;

const LoginFormItem = styled.div`
  @media (max-width: 640px) {
    width: 266px;
  }
`;

// email
const EmailFormbox = styled.div`
  margin: 5px 6px 6px 6px;
`;

const EmailText = styled.div`
  font-size: 15px;
  font-weight: 600;

  margin: 5px 0px;
  padding: 0px 2px;
`;

const EmailInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  width: 240px;
  height: 32px;

  border: 1.3px solid #bbc0c4;
  border-radius: 5px;
  outline: none;
  padding: 7.8px 9.1px;

  &:focus {
    border: 1.3px solid #6cbbf7;
    box-shadow: 0px 0px 0px 3px #dcebf8;
  }

  @media (max-width: 640px) {
    width: 219px;
  }
`;

// password
const PasswordFormbox = styled.div`
  margin: 10px 6px 6px 6px;
`;

const PasswordTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    width: 219px;
  }
`;

const PasswordText = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin: 5px 0px;
`;

const PasswordFind = styled.div`
  cursor: pointer;
  font-size: 12px;
  color: #0074cc;

  &:hover {
    color: hsl(206, 100%, 52%);
  }
`;

const PasswordInput = styled.input.attrs((props) => ({
  type: 'password',
}))`
  width: 240px;
  height: 32px;

  border: 1.3px solid #bbc0c4;
  border-radius: 5px;
  outline: none;
  padding: 7.8px 9.1px;

  &:focus {
    border: 1.3px solid #6cbbf7;
    box-shadow: 0px 0px 0px 3px #dcebf8;
  }

  @media (max-width: 640px) {
    width: 219px;
  }
`;

const LoginSubmitBox = styled.div`
  margin: 20px 6px 6px 6px;
`;

const LoginSubmit = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13.5px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(206, 100%, 52%);
  border-radius: 6px;

  width: 240px;
  height: 37.8px;

  padding: 10.4px;

  &:hover {
    background-color: #0174cd;
  }

  @media (max-width: 640px) {
    width: 219px;
  }
`;
