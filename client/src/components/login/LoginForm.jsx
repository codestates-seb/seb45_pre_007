import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css, styled } from 'styled-components';
import { postToLogin } from '../../redux/api/loginApi';
import {
  setNextLevel,
  logout,
  resetLogin,
  setEmail,
  setPassword,
} from '../../redux/feature/loginSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ allCheck, setAllCheck }) => {
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [pwdErrMsg, setPwdErrMsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.login);

  const handleLoginSumbit = async () => {
    if (!loginData.email) {
      setEmailErrMsg('Email cannot be empty.');
    } else {
      setEmailErrMsg('');
    }

    if (!loginData.password) {
      setPwdErrMsg('Password cannot be empty.');
    } else {
      setPwdErrMsg('');
    }

    if (loginData.email && loginData.password) {
      // postToLogin 액션이 비동기 요청이므로, 액션을 dispatch 한 후에 즉시 loginData의 값을 확인하면
      // 액션 처리가 완료되기 전 상태를 확인할 수 밖에 없다
      // 따라서 postToLogin 액션의 결과가 완료된 후에 loginData 값을 사용하도록 해야한다
      const action = await dispatch(
        postToLogin({ email: loginData.email, password: loginData.password })
      );

      // postToLogin 액션의 비동기 처리 완료가 성공적으로 처리되었는지 확인
      if (postToLogin.fulfilled.match(action)) {
        if (action.payload && action.payload.status === 200) {
          if (loginData.nextLevel) {
            navigate(loginData.nextLevel);
            dispatch(setNextLevel(''));
          } else {
            navigate('/questions');
          }
        }
      } else {
        setAllCheck(false);
        setEmailErrMsg('The email is not a valid email address.');
        setPwdErrMsg('The password is not a valid password.');
      }

      dispatch(resetLogin());
    }
  };

  const handleCheckLogin = () => {
    const { email, password } = loginData;

    if ((!email && !password) || !email || !password) {
      setAllCheck(false);
    } else {
      setAllCheck(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLoginSumbit();
    }
  };

  return (
    <LoginFormBox check={allCheck}>
      <LoginFormItem>
        <EmailFormbox>
          <EmailText>Email</EmailText>
          <EmailDataBox check={emailErrMsg}>
            <EmailInput
              onChange={(e) => dispatch(setEmail(e.target.value))}
              value={loginData.email}
              check={allCheck}
            />
            <svg
              aria-hidden="true"
              className="emailIcon js-alert-icon svg-icon iconAlertCircle"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"></path>
            </svg>
          </EmailDataBox>
          <ErrorMessage check={emailErrMsg}>{emailErrMsg}</ErrorMessage>
        </EmailFormbox>
        <PasswordFormbox>
          <PasswordTextBox>
            <PasswordText>Password</PasswordText>
            <PasswordFind onClick={() => dispatch(logout())}>
              Forgot password?
            </PasswordFind>
          </PasswordTextBox>
          <PasswordDataBox check={pwdErrMsg}>
            <PasswordInput
              onChange={(e) => dispatch(setPassword(e.target.value))}
              value={loginData.password}
              check={allCheck}
              onKeyDown={(e) => handleKeyDown(e)}
            />
            <svg
              aria-hidden="true"
              className="pwdIcon js-alert-icon svg-icon iconAlertCircle"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"></path>
            </svg>
          </PasswordDataBox>
          <ErrorMessage check={pwdErrMsg}>{pwdErrMsg}</ErrorMessage>
        </PasswordFormbox>
        <LoginSubmitBox>
          <LoginSubmit
            onClick={() => {
              handleLoginSumbit();
              handleCheckLogin();
            }}
            check={allCheck}
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
          height: 234px;
        `
      : css`
          width: 300px;
          height: 281px;
        `}
`;

const LoginFormItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 640px) {
    width: 266px;
  }

  ${({ check }) =>
    check
      ? css``
      : css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        `}
`;

// email
const EmailFormbox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 6px 6px 6px;
`;

const ErrorMessage = styled.div`
  color: hsl(358, 62%, 52%);
  font-size: 12px;
  margin: 4px 0;
  padding: 2px;
  display: ${({ check }) => !check && 'none'};
`;

const EmailDataBox = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 32px;
  border-radius: 5px;
  outline: none;

  ${({ check }) =>
    !check
      ? css`
          border: 1.3px solid #bbc0c4;
          padding: 7.8px 9.1px;
          &:focus {
            border: 1.3px solid #6cbbf7;
            box-shadow: 0px 0px 0px 3px #dcebf8;
          }
        `
      : css`
          border: 1.3px solid hsl(358, 68%, 59%);
          padding: 0 8px;
          &:focus {
            box-shadow: 0px 0px 0px 3px hsla(358, 62%, 47%, 0.15);
          }
        `}
  ${({ check }) => css`
    svg {
      fill: hsl(358, 68%, 59%);
      display: ${!check ? 'none' : 'block'};
    }
  `}
`;

const PasswordDataBox = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 32px;
  border-radius: 5px;
  outline: none;

  ${({ check }) =>
    !check
      ? css`
          border: 1.3px solid #bbc0c4;
          padding: 7.8px 9.1px;
          &:focus {
            border: 1.3px solid #6cbbf7;
            box-shadow: 0px 0px 0px 3px #dcebf8;
          }
        `
      : css`
          border: 1.3px solid hsl(358, 68%, 59%);
          padding: 0 8px;
          &:focus {
            box-shadow: 0px 0px 0px 3px hsla(358, 62%, 47%, 0.15);
          }
        `}
  ${({ check }) => css`
    svg {
      fill: hsl(358, 68%, 59%);
      display: ${!check ? 'none' : 'block'};
    }
  `}
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
  outline: none;
  border: none;
  width: 100%;
  height: 30px;

  @media (max-width: 640px) {
    width: 219px;
  }
`;

// password
const PasswordFormbox = styled.div`
  display: flex;
  flex-direction: column;
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
  outline: none;
  border: none;
  width: 100%;
  height: 30px;

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
