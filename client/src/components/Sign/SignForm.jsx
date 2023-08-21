import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HelpSm } from '../../assert/iconHelpSm.svg';
import axios from 'axios';
import { isValidEmail, hasLetterAndNumber } from '../../utils/validationUtils';

const SignForm = () => {
  const [IdValue, setId] = useState('');
  const [EmailValue, setEmail] = useState('');
  const [PasswordValue, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 유효성 검사

    if (!isValidEmail(EmailValue)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
      return;
    } else {
      setEmailError('');
    }

    if (PasswordValue.length < 4 || !hasLetterAndNumber(PasswordValue)) {
      setPasswordError(
        '비밀번호는 최소 4자 이상이어야 하며, 최소 1개의 문자와 1개의 숫자를 포함해야 합니다.'
      );
      return;
    } else {
      setPasswordError('');
    }

    // 유효성 검사를 통과한 경우 axios를 사용하여 API로 Post 요청을 보냅니다.
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users`,
        {
          userName: IdValue,
          userEmail: EmailValue,
          hashedUserPassword: PasswordValue,
        }
      );

      console.log('API 응답:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('API 요청 실패:', error);
    }
  };

  const SaveId = (event) => {
    setId(event.target.value);
  };

  const SaveEmail = (event) => {
    setEmail(event.target.value);
  };

  const SavePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <SignSpan>Display name</SignSpan>
      <InputField
        className="Sign_Id"
        type="text"
        placeholder="Username"
        value={IdValue}
        onChange={SaveId}
      />
      <SignSpan>Email</SignSpan>
      <InputField
        className="Sign_Email"
        type="email"
        placeholder="Email"
        value={EmailValue}
        onChange={SaveEmail}
      />
      {emailError && <ErrorText>{emailError}</ErrorText>}
      <SignSpan>Password</SignSpan>
      <InputField
        className="Sign_Password"
        type="password"
        placeholder="Password"
        value={PasswordValue}
        onChange={SavePassword}
      />
      {passwordError && <ErrorText>{passwordError}</ErrorText>}
      <SignParagraph>
        Passwords must contain at least eight characters, including at least 1
        letter and 1 number.
      </SignParagraph>
      <SignReCapthaBox>
        <div>
          <input type="checkbox" />
          reCAPTHA
        </div>
      </SignReCapthaBox>
      <SignLabelBox>
        <div>
          <input type="checkbox" />
        </div>
        <LabelTextBox>
          <SignLabel
            htmlFor="opt-in"
            className="s-label fw-normal fs-caption px0"
          >
            Opt-in to receive occasional product updates, user research
            invitations, company announcements, and digests.
          </SignLabel>
        </LabelTextBox>
        <div>
          <HelpSm />
        </div>
      </SignLabelBox>
      <SubmitButton onClick={handleSubmit} type="submit">
        Sign Up
      </SubmitButton>
      <SignParagraph>
        By clicking “Sign up”, you agree to our
        <SignA>terms of service</SignA> and acknowledge that you have read and
        understand our <SignA>privacy policy</SignA>
        and <SignA>code of conduct</SignA>.
      </SignParagraph>
    </SignUpForm>
  );
};

export default SignForm;

const SignReCapthaBox = styled.div`
  display: flex;
  background-color: #f1f2f3;
  justify-content: center;
  align-items: center;
  width: 266px;
  height: 144px;
`;

const SignA = styled.a`
  color: #007bff; /* 기본 링크 색상 */

  &:visited {
    color: #007bff; /* 방문한 링크 색상 */
  }

  &:hover {
    color: #8295ff; /* 호버 시 링크 색상 */
  }
`;

const ErrorText = styled.p`
  font-size: 12px;
  color: red;
  margin: 4px 0;
`;

const SignSpan = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #232629;
  margin-bottom: 4px;
`;

const SignParagraph = styled.p`
  font-size: 12px;
  margin: 4px 0;
`;

const SignLabelBox = styled.div`
  display: flex;
  margin: 10px 6px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #232629;
`;

const LabelTextBox = styled.div`
  margin-left: 5px;
`;

const SignLabel = styled.label`
  font-size: 12px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 24px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 24px;
  background-color: #0a95ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0555aa;
  }
`;
