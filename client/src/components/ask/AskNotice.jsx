import React from 'react';
import { styled } from 'styled-components';

const AskNotice = () => {
  const steps = [
    {
      step: (
        <>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail..</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community.
          </li>
          <li>Review your question and post it to the site.</li>
        </>
      ),
    },
  ];

  return (
    <AskNoticeBox>
      <AskNoticeLists>
        <AskNoticeItem>
          <AskNoticeTitle>Writing a good question</AskNoticeTitle>
          <AskNoticeTextUp>
            You’re ready to&nbsp;<span>ask</span>&nbsp;a&nbsp;
            <span>programming-related question</span>&nbsp;and this form will
            help guide you through the process.
          </AskNoticeTextUp>
          <AskNoticeTextDown>
            Looking to ask a non-programming question? See&nbsp;
            <span>the topics here</span>&nbsp;to find a relevant site.
          </AskNoticeTextDown>
          <AskNoticeStep>Steps</AskNoticeStep>
          <AskNoticeUl>
            {steps.map((current, index) => (
              <AskNoticeList key={index}>{current.step}</AskNoticeList>
            ))}
          </AskNoticeUl>
        </AskNoticeItem>
      </AskNoticeLists>
    </AskNoticeBox>
  );
};

export default AskNotice;

const AskNoticeBox = styled.div`
  width: 100%;
  margin: 16px 0 0 0;
  /* display: flex; */
`;

const AskNoticeLists = styled.div`
  margin: 0 0 16px 0;
`;

const AskNoticeItem = styled.div`
  width: 70%;
  padding: 24px;
  border: 1px solid
    rgb(
      calc(165.75 + 0 * 0.35),
      calc(165.75 + 115.6 * 0.35),
      calc(165.75 + 204 * 0.35)
    );

  border-radius: 6px;
  background-color: #ebf4fb;
`;

const AskNoticeTitle = styled.h1`
  font-size: 21px;
  color: #3b4045;
  margin: 0 0 8px;
  font-weight: 400;
`;

const AskNoticeTextUp = styled.p`
  font-size: 15px;
  color: #3b4045;

  span {
    color: #0074cc;
  }
`;

const AskNoticeTextDown = styled(AskNoticeTextUp)`
  margin: 3px 0 15px 0;
`;

const AskNoticeStep = styled.h5`
  font-size: 13px;
  font-weight: 600;
  color: #3b4045;
  margin: 0 0 8px 0;
`;

const AskNoticeUl = styled.ul`
  line-height: 1.3;
  margin: 0;
  padding: 0;
  padding-inline-start: 2rem;
`;

const AskNoticeList = styled.li`
  font-size: 13px;
  color: #3b4045;
  list-style: none;
  position: relative;

  li {
    &::before {
      content: '•';
      position: absolute;
      left: -0.7em;
      line-height: 0.7em;
      font-size: 1.5em;
    }
  }
`;
