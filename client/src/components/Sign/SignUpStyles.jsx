import { styled } from 'styled-components';

export const SignLayout = styled.div`
  background-color: #f1f2f3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const SignRow = styled.div`
  display: flex;
`;

export const SignLeftBox = styled.div`
  margin-right: 48px;
  margin-bottom: 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SignRightBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SignFlexBox = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const SignIconBox = styled.div`
  box-sizing: border-box;
  padding-right: 10px;
`;

export const SignReCapthaBox = styled.div`
  display: flex;
  background-color: #f1f2f3;
  justify-content: center;
  align-items: center;
  width: 266px;
  height: 144px;
`;

export const SignH1 = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 27px;
  color: #232629;
  margin-bottom: 32px;
`;

export const SignA = styled.a`
  color: #007bff; /* 기본 링크 색상 */

  &:visited {
    color: #007bff; /* 방문한 링크 색상 */
  }

  &:hover {
    color: #8295ff; /* 호버 시 링크 색상 */
  }
`;

export const SignSpan = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #232629;
  margin-bottom: 4px;
`;

export const SignParagraph = styled.p`
  font-size: 12px;
  margin: 4px 0;
`;

export const SignLabelBox = styled.div`
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

export const LabelTextBox = styled.div`
  margin-left: 5px;
`;

export const SignLabel = styled.label`
  font-size: 12px;
`;

export const SignUpForm = styled.form`
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

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
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
