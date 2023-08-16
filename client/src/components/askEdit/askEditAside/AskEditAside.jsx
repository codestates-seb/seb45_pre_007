import React from 'react';
import { css, styled } from 'styled-components';
import EditAsideContent from './EditAsideCotent.jsx';

const AskEditAside = ({ isFocus, index }) => {
  // const text = "to make links (use https whenever possible)
  // <https://example.com>
  // [example](https://example.com)
  // <a href="https://example.com">example</a>";

  // const code1 = ["<div class="bg-black-050 p8 bar-sm ff-mono my4 wmx2">
  // ```<br>
  // like so<br>
  // ```
  // </div>"];

  // const code2 = "   <div class="bg-black-050 p8 bar-sm ff-mono my4 wmx2">
  // ```python<br>
  // <span class="fc-blue-600">def</span> function(foo):<br>
  // <span class="fc-blue-600">&nbsp;&nbsp;&nbsp;&nbsp;print</span>(foo)<br>
  // ```
  // </div>"

  const aside = [
    {
      id: 0,
      title: <AskEditAsideTitle>How to Edit</AskEditAsideTitle>,
      content: (
        <>
          <AskEditAsideText>Correct minor typos or mistakes</AskEditAsideText>
          <AskEditAsideText>
            Clarify meaning without changing it
          </AskEditAsideText>
          <AskEditAsideText>Add related resources or links</AskEditAsideText>
          <AskEditAsideText>
            <i>Always</i> respect the author’s intent
          </AskEditAsideText>
          <AskEditAsideText>
            Don’t use edits to reply to the author
          </AskEditAsideText>
        </>
      ),
    },
    {
      id: 1,
      title: <AskEditAsideTitle>How to Format</AskEditAsideTitle>,
      content: (
        <>
          <AskEditAsideText>
            create code fences with backticks ` or tildes ~
          </AskEditAsideText>
          <AskEditAsideText>
            add language identifier to highlight code
          </AskEditAsideText>
          <AskEditAsideText>put returns between paragraphs</AskEditAsideText>
          <AskEditAsideText>for linebreak add 2 spaces at end</AskEditAsideText>
          <AskEditAsideText>
            <i>_italic_</i> or <b>**bold**</b>
          </AskEditAsideText>
          <AskEditAsideText>indent code by 4 spaces</AskEditAsideText>
          <AskEditAsideText>
            backtick escapes <code>`like _so_`</code>
          </AskEditAsideText>
          <AskEditAsideText>
            quote by placing &gt; at start of line
          </AskEditAsideText>
          <AskEditAsideText></AskEditAsideText>
          <AskEditAsideText>formatting help »</AskEditAsideText>
          <AskEditAsideText>asking help »</AskEditAsideText>
        </>
      ),
    },
    {
      id: 2,
      title: <AskEditAsideTitle>How to tag</AskEditAsideTitle>,
      content: (
        <>
          <AskEditAsideText>
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Choose one or more (up to 5) tags that
            will help answerers to find and interpret your question.
          </AskEditAsideText>
          <AskEditAsideText>
            complete the sentence: my question is about...
          </AskEditAsideText>
          <AskEditAsideText>
            use tags that describe things or concepts that are essential, not
            incidental to your question
          </AskEditAsideText>
          <AskEditAsideText>favor using existing popular tags</AskEditAsideText>
          <AskEditAsideText>
            read the descriptions that appear below the tag
          </AskEditAsideText>
          <AskEditAsideText>
            If your question is primarily about a topic for which you can&apos;t
            find a tag:
          </AskEditAsideText>
          <AskEditAsideText>
            combine multiple words into single-words with hyphens (e.g.
            python-3.x), up to a maximum of 35 characters
          </AskEditAsideText>
          <AskEditAsideText>
            creating new tags is a privilege; if you can&apos;t yet create a tag
            you need, then post this question without it, then ask the community
            to create it for you
          </AskEditAsideText>
          <AskEditAsideText>popular tags »</AskEditAsideText>
        </>
      ),
    },
  ];

  // 하나의 컴포넌트에서 관리하고 연결하려면 컴포넌트 마다 다른 값을 주어야 한다
  console.log(index); // 컴포넌트 마다 다른 값
  console.log(isFocus); // 전체에서 보는 값

  return (
    <AskEditAsideLayout index={index} isFocus={isFocus}>
      <AskEditAsideBox key={aside[isFocus].id}>
        <EditAsideContent
          id={aside[isFocus].id}
          title={aside[isFocus].title}
          content={aside[isFocus].content}
          img={aside[isFocus].img}
        />
      </AskEditAsideBox>
    </AskEditAsideLayout>
  );
};

export default AskEditAside;

const AskEditAsideLayout = styled.div`
  position: absolute;

  /* right: 230px; */
  /* left: 66vw; */
  width: 349px;
  max-width: 349px;

  border-radius: 4px;
  margin: 0 0 15px 24px;

  ${({ isFocus, index }) =>
    index !== isFocus &&
    css`
      display: none;
    `}
`;

const AskEditAsideBox = styled.div``;

const AskEditAsideTitle = styled.div`
  font-size: 15px;
  /* background-color: hsl(47, 83%, 91%); */
`;

const AskEditAsideText = styled.p`
  font-size: 12px;

  margin: 12px 0;
  color: #232629;

  span {
    color: #0074cc;
  }
`;
