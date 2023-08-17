import React from 'react';
import {
  SignUpForm,
  SignSpan,
  InputField,
  SignParagraph,
  SignReCapthaBox,
  SignLabelBox,
  LabelTextBox,
  SignLabel,
  SubmitButton,
  SignA,
} from './SignUpStyles.jsx'; // 재사용할 스타일드 컴포넌트를 불러옵니다.

const SignUpFormContainer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <SignSpan>Display name</SignSpan>
      <InputField type="text" placeholder="Username" />
      <SignSpan>Email</SignSpan>
      <InputField type="email" placeholder="Email" />
      <SignSpan>Password</SignSpan>
      <InputField type="password" placeholder="Password" />
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
          <svg
            aria-hidden="true"
            className="svg-icon iconHelpSm"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path d="M7 1C3.74 1 1 3.77 1 7c0 3.26 2.77 6 6 6 3.27 0 6-2.73 6-6s-2.73-6-6-6Zm1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08Zm.73-3.07-.47.3c-.2.15-.36.36-.44.6a3.6 3.6 0 0 0-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42A4.6 4.6 0 0 1 7.7 6.07c.15-.1.21-.21.3-.33.18-.2.28-.47.28-.74.01-.67-.53-1.14-1.18-1.14-.9 0-1.18.7-1.18 1.46H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 0 1 1.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.79h-.01Z"></path>
          </svg>
        </div>
      </SignLabelBox>
      <SubmitButton type="submit">Sign Up</SubmitButton>
      <SignParagraph>
        By clicking “Sign up”, you agree to our
        <SignA>terms of service</SignA> and acknowledge that you have read and
        and understand our <SignA>privacy policy</SignA>
        and <SignA>code of conduct</SignA>.
      </SignParagraph>
    </SignUpForm>
  );
};

export default SignUpFormContainer;
