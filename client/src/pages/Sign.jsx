import React from 'react';
import { styled } from 'styled-components';
import OAuthSign from '../components/Sign/OAuthSign.jsx';
const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignUpForm = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <SignUpContainer>
      <OAuthSign />
      <SignUpForm onSubmit={handleSubmit}>
        <FormTitle>Create an Account</FormTitle>
        <InputField type="text" placeholder="Username" />
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <InputField type="password" placeholder="Confirm Password" />
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
