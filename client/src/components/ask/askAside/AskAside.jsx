import React from 'react';
import { css, styled } from 'styled-components';
import AsideContent from './AsideContent.jsx';

const AskAside = ({ isFocus, index }) => {
  const aside = [
    {
      id: 0,
      title: <AskAsideTitle>Writing a good title</AskAsideTitle>,
      content: (
        <>
          <AskAsideText>Your title should summarize the problem.</AskAsideText>
          <AskAsideText>
            You might find that you have a better idea of your title after
            writing out the rest of the question.
          </AskAsideText>
        </>
      ),
      img: (
        <>
          <svg
            aria-hidden="true"
            className="svg-spot spotPencil"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
            <path
              d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
              opacity=".2"
            ></path>
          </svg>
        </>
      ),
    },
    {
      id: 1,
      title: <AskAsideTitle>Introduce the problem</AskAsideTitle>,
      content: (
        <>
          <AskAsideText>
            Explain how you encountered the problem you’re trying to solve, and
            any difficulties that have prevented you from solving it yourself.
          </AskAsideText>
        </>
      ),
      img: (
        <>
          <svg
            aria-hidden="true"
            className="svg-spot spotPencil"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
            <path
              d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
              opacity=".2"
            ></path>
          </svg>
        </>
      ),
    },
    {
      id: 2,
      title: <AskAsideTitle>Expand on the problem</AskAsideTitle>,
      content: (
        <>
          <AskAsideText>
            Show what you’ve tried, tell us what happened, and why it didn’t
            meet your needs.
          </AskAsideText>
          <AskAsideText>
            Not all questions benefit from including code, but if your problem
            is better understood with code you’ve written, you should include
            a&nbsp;<span>minimal,&nbsp;reproducible&nbsp;example.</span>
          </AskAsideText>
          <AskAsideText>
            Please make sure to post code and errors as text directly to the
            question (and&nbsp;<span>not&nbsp;as&nbsp;images</span>), and&nbsp;
            <span>format&nbsp;them&nbsp;appropriately.</span>
          </AskAsideText>
        </>
      ),
      img: (
        <>
          <svg
            aria-hidden="true"
            className="svg-spot spotPencil"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
            <path
              d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
              opacity=".2"
            ></path>
          </svg>
        </>
      ),
    },
    {
      id: 3,
      title: <AskAsideTitle>Adding tags</AskAsideTitle>,
      content: (
        <>
          <AskAsideText>
            Tags help ensure that your question will get attention from the
            right people.
          </AskAsideText>
          <AskAsideText>
            Tag things in more than one way so people can find them more easily.
            Add tags for product lines, projects, teams, and the specific
            technologies or languages used.
          </AskAsideText>
          <AskAsideText>
            <span>Learn more about tagging</span>
          </AskAsideText>
        </>
      ),
      img: (
        <>
          <svg
            aria-hidden="true"
            className="svg-spot spotPencil"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
            <path
              d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
              opacity=".2"
            ></path>
          </svg>
        </>
      ),
    },
    {
      id: 4,
      title: (
        <AskAsideTitle>
          Make sure we don’t already have an answer for your question
        </AskAsideTitle>
      ),
      content: (
        <>
          <AskAsideText>
            Stack Overflow is a huge database of knowledge.
          </AskAsideText>
          <AskAsideText>
            Please make sure your question isn’t already answered before
            posting, or your question might be closed as a duplicate.
          </AskAsideText>
        </>
      ),
      img: (
        <>
          <svg
            aria-hidden="true"
            className="svg-spot spotBell"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              d="M11.81.8a1.37 1.37 0 1 0-2.5 1.16l1.91 4.09a1.37 1.37 0 0 0 2.5-1.16l-1.9-4.1Zm-8.7 3.98a1.37 1.37 0 0 1 1.94-.18l3.97 3.28A1.37 1.37 0 0 1 7.26 10L3.3 6.72a1.38 1.38 0 0 1-.19-1.94Zm34.91 23.57a21.3 21.3 0 0 0-.23-12.08 19.78 19.78 0 0 0-3-5.95 3.49 3.49 0 0 0-1.9-4.19 3.49 3.49 0 0 0-4.43 1.25c-2.2.13-4.4.71-6.44 1.58a21.65 21.65 0 0 0-9.3 7.6c-.82 1.18-1.6 2.39-2.4 3.6l-.38.6c-2.34 3.6-3.55 5.07-4.87 5.64-1.08.47-2.3 1.1-2.82 2.22A3 3 0 0 0 3.7 32.6l27.82 12.98c1.96.91 4.33-.6 4.27-2.8a8.47 8.47 0 0 0-.39-2.24c-.41-1.36-.07-3.24 1.2-7.35.49-1.6 1-3.21 1.42-4.84ZM.27 14.11c.02-.76.66-1.35 1.42-1.33l4.75.16a1.38 1.38 0 0 1-.1 2.75l-4.74-.16a1.38 1.38 0 0 1-1.33-1.42Zm45.99 15.63a1.37 1.37 0 1 0 .73-2.65l-4.96-1.37a1.37 1.37 0 1 0-.74 2.65l4.97 1.37Zm-2.74 6.53c-.5.57-1.37.64-1.94.14l-3.42-2.96a1.38 1.38 0 0 1 1.8-2.08l3.42 2.96c.57.5.64 1.36.14 1.94Zm3.22-15.37a1.37 1.37 0 1 0-1.05-2.54l-4.4 1.8a1.38 1.38 0 0 0 1.05 2.55l4.4-1.8Z"
              opacity=".2"
            ></path>
            <path d="M13.73 22.3a1 1 0 1 1-1.78-.92c3.61-7.07 8.02-10.8 13.34-11.26a1 1 0 0 1 .17 2c-4.53.39-8.4 3.66-11.73 10.17Zm22.33 3.55c1.13-4.3.95-8.36-.23-12.08a19.77 19.77 0 0 0-3.01-5.95 3.49 3.49 0 0 0-1.9-4.18 3.49 3.49 0 0 0-4.42 1.24c-2.21.13-4.4.71-6.44 1.58a21.65 21.65 0 0 0-9.3 7.6c-.83 1.18-1.61 2.39-2.4 3.6l-.38.6c-2.34 3.6-3.55 5.07-4.87 5.64a9.4 9.4 0 0 0-1.9 1.08 3 3 0 0 0 .52 5.12l27.83 12.98a3 3 0 0 0 4.26-2.8 8.47 8.47 0 0 0-.38-2.24c-.41-1.36-.07-3.24 1.19-7.34l.21-.7c.43-1.38.85-2.75 1.22-4.15Zm-4.23 14.48a1 1 0 0 1-1.43.94L2.58 28.29a1 1 0 0 1-.18-1.7c.43-.32.93-.6 1.5-.86 1.84-.8 3.17-2.4 5.76-6.39l.39-.6c.77-1.19 1.53-2.38 2.35-3.53a19.65 19.65 0 0 1 8.44-6.91 15.72 15.72 0 0 1 6.23-1.44 1 1 0 0 0 .92-.57c.42-.9 1.3-1.21 2.09-.84.8.37 1.11 1.24.7 2.13a1 1 0 0 0 .15 1.09 15.96 15.96 0 0 1 3 5.7 19.36 19.36 0 0 1 .2 10.97c-.37 1.36-.78 2.71-1.2 4.06l-.21.7c-1.4 4.55-1.77 6.61-1.2 8.52.2.61.3 1.18.3 1.71Zm-14.78-.72a1 1 0 1 1 1.78.9 2.44 2.44 0 1 0 4.44 2.03 1 1 0 0 1 1.85.77 4.44 4.44 0 1 1-8.07-3.7Z"></path>
          </svg>
        </>
      ),
    },
  ];

  // 하나의 컴포넌트에서 관리하고 연결하려면 컴포넌트 마다 다른 값을 주어야 한다
  // console.log(index); // 컴포넌트 마다 다른 값
  // console.log(isFocus); // 전체에서 보는 값

  return (
    <AskAsideLayout index={index} isFocus={isFocus}>
      <AskAsideBox key={aside[isFocus].id}>
        <AsideContent
          id={aside[isFocus].id}
          title={aside[isFocus].title}
          content={aside[isFocus].content}
          img={aside[isFocus].img}
        />
      </AskAsideBox>
    </AskAsideLayout>
  );
};

export default AskAside;

const AskAsideLayout = styled.div`
  position: absolute;

  /* right: 230px; */
  /* left: 66vw; */
  width: 349px;
  max-width: 349px;

  border-radius: 4px;
  box-shadow:
    0 1px 2px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  ${({ isFocus, index }) =>
    index !== isFocus &&
    css`
      display: none;
    `}
`;

const AskAsideBox = styled.div``;

const AskAsideTitle = styled.div`
  font-size: 15px;
  background-color: 1px solid hsl(210, 8%, 97.5%);
`;

const AskAsideText = styled.p`
  font-size: 12px;
  margin: 0 0 12px;
  color: #232629;

  span {
    color: #0074cc;
  }
`;
