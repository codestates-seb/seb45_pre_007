import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css, styled } from 'styled-components';
import { postToLogin } from '../../redux/api/loginApi';
import {
  logout,
  resetLogin,
  setEmail,
  setPassword,
} from '../../redux/feature/loginSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ check, setCheck }) => {
  //! 데이터 유효성 검사 state

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.login);

  const handleLoginSumbit = async () => {
    // postToLogin 액션이 비동기 요청이므로, 액션을 dispatch 한 후에 즉시 loginData의 값을 확인하면
    // 액션 처리가 완료되기 전 상태를 확인할 수 밖에 없다
    // 따라서 postToLogin 액션의 결과가 완료된 후에 loginData 값을 사용하도록 해야한다
    const action = await dispatch(
      postToLogin({ email: loginData.email, password: loginData.password })
    );

    // postToLogin 액션의 비동기 처리 완료가 성공적으로 처리되었는지 확인
    if (postToLogin.fulfilled.match(action)) {
      if (action.payload && action.payload.status === 200) {
        console.log(loginData.token);
        navigate('/questions');
      }
    } else {
      alert('로그인에 실패했습니다.');
      setCheck(false);
    }

    dispatch(resetLogin());
  };

  const handleCheckLogin = () => {
    // 이메일과 비밀번호를 입력하지 않았을 경우
    if (!loginData.email || !loginData.password) {
      setCheck(false);
    }
  };

  console.log(check);

  return (
    <LoginFormBox>
      <LoginFormItem>
        <EmailFormbox>
          <EmailText>Email</EmailText>
          <LoginDataBox>
            <EmailInput
              onChange={(e) => dispatch(setEmail(e.target.value))}
              value={loginData.email}
              check={check}
            />
            <svg
              aria-hidden="true"
              className="email-icon js-alert-icon svg-icon iconAlertCircle"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"></path>
            </svg>
          </LoginDataBox>
        </EmailFormbox>
        <PasswordFormbox>
          <PasswordTextBox>
            <PasswordText>Password</PasswordText>
            <PasswordFind onClick={() => dispatch(logout())}>
              Forgot password?
            </PasswordFind>
          </PasswordTextBox>
          <LoginDataBox>
            <PasswordInput
              onChange={(e) => dispatch(setPassword(e.target.value))}
              value={loginData.password}
              check={check}
            />
            <svg
              aria-hidden="true"
              className="email-icon js-alert-icon svg-icon iconAlertCircle"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"></path>
            </svg>
          </LoginDataBox>
        </PasswordFormbox>
        <LoginSubmitBox>
          <LoginSubmit
            onClick={() => {
              handleLoginSumbit();
              handleCheckLogin();
            }}
          >
            Log in
          </LoginSubmit>
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

  ${({ check }) =>
    check
      ? css`
          width: 288px;
        `
      : css`
          width: 299px;
        `}
`;

const LoginFormItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 640px) {
    width: 266px;
  }
`;

// email
const EmailFormbox = styled.div`
  margin: 5px 6px 6px 6px;
`;

const LoginDataBox = styled.div`
  display: flex;

  position: relative;

  svg {
    fill: hsl(358, 68%, 59%);
    position: relative;
    top: 5px;
    right: 10%;
  }
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
  height: 32px;
  border-radius: 5px;
  outline: none;

  ${({ check }) =>
    check
      ? css`
          width: 240px;
          border: 1.3px solid #bbc0c4;
          padding: 7.8px 9.1px;

          &:focus {
            border: 1.3px solid #6cbbf7;
            box-shadow: 0px 0px 0px 3px #dcebf8;
          }
        `
      : css`
          width: 258px;
          border: 1.3px solid hsl(358, 68%, 59%);
          padding: 0 32px 0 9.1px;
          &:focus {
            box-shadow: 0px 0px 0px 3px hsla(358, 62%, 47%, 0.15);
          }
        `}

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
  height: 32px;
  border-radius: 5px;
  outline: none;

  ${({ check }) =>
    check
      ? css`
          width: 240px;
          border: 1.3px solid #bbc0c4;
          padding: 7.8px 9.1px;

          &:focus {
            border: 1.3px solid #6cbbf7;
            box-shadow: 0px 0px 0px 3px #dcebf8;
          }
        `
      : css`
          width: 258px;
          border: 1.3px solid hsl(358, 68%, 59%);
          padding: 0 32px 0 9.1px;
          &:focus {
            box-shadow: 0px 0px 0px 3px hsla(358, 62%, 47%, 0.15);
          }
        `}

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
