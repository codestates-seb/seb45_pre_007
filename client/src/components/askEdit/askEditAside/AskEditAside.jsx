import React from 'react';
import { css, styled } from 'styled-components';
import EditAsideContent from './EditAsideCotent.jsx';

const AskEditAside = ({ isFocus, index }) => {
  const aside = [
    {
      id: 0,
      title: <AskEditAsideTitle>How to Edit</AskEditAsideTitle>,
      content: (
        <AskNoticeList>
          <li>Correct minor typos or mistakes</li>
          <li>Clarify meaning without changing it</li>
          <li>Add related resources or links</li>
          <li>
            <i>Always</i> respect the author’s intent
          </li>
          <li>Don’t use edits to reply to the author</li>
        </AskNoticeList>
      ),
    },
    {
      id: 1,
      title: <AskEditAsideTitle>How to Format</AskEditAsideTitle>,
      content: (
        <AskNoticeList>
          <li>create code fences with backticks ` or tildes ~</li>
          <CodeBox>
            ```
            <br />
            like so
            <br />
            ```
          </CodeBox>
          <li>add language identifier to highlight code</li>
          <CodeBox>
            ```python
            <br />
            <span>def</span> function(foo):
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;print</span>
            (foo)
            <br />
            ```
          </CodeBox>
          <li>put returns between paragraphs</li>
          <li>for linebreak add 2 spaces at end</li>
          <li>
            <i>_italic_</i> or <b>**bold**</b>
          </li>
          <li>indent code by 4 spaces</li>
          <li>
            backtick escapes <span className="code">`like _so_`</span>
          </li>
          <li>quote by placing &gt; at start of line</li>

          <li>
            <li>
              to make links (use https whenever possible)
              <span className="none">&lt;https://example.com&gt;</span>
              <span className="none">[example](https://example.com)</span>
              <span className="none">
                &lt;a href=&quot;https://example.com&quot;&gt;example&lt;/a&gt;
              </span>
            </li>
          </li>

          <AnotherTags style={{ margin: 0 }}>formatting help »</AnotherTags>
          <AnotherTags>asking help »</AnotherTags>
        </AskNoticeList>
      ),
    },
    {
      id: 2,
      title: <AskEditAsideTitle>How to Tag</AskEditAsideTitle>,
      content: (
        <>
          <AskEditAsideText>
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Choose one or more (up to 5) tags that
            will help answerers to find and interpret your question.
          </AskEditAsideText>
          <AskNoticeList>
            <li>complete the sentence: my question is about...</li>
            <li>
              use tags that describe things or concepts that are essential, not
              incidental to your question
            </li>
            <li>
              favor using <span>existing popular tags</span>
            </li>
            <li>read the descriptions that appear below the tag</li>
          </AskNoticeList>
          <AskEditAsideText>
            If your question is primarily about a topic for which you can&apos;t
            find a tag:
          </AskEditAsideText>
          <AskNoticeList>
            <li>
              combine multiple words into single-words with hyphens (e.g.
              <span className="python">python-3.x</span>), up to a maximum of 35
              characters
            </li>
            <li>
              <span>creating new tags is a privilege;</span> if you can&apos;t
              yet create a tag you need, then post this question without it,
              then <span>ask the community to create it for you</span>
            </li>
          </AskNoticeList>
          <AnotherTags>popular tags »</AnotherTags>
        </>
      ),
    },
  ];

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

const AskNoticeList = styled.ul`
  font-size: 13px;
  color: #3b4045;
  list-style: none;
  position: relative;

  li {
    margin: 12px 0 12px 10px;

    &::before {
      content: '•';
      position: absolute;
      left: -0.5em;
      line-height: 0.7em;
      font-size: 1.5em;
    }

    span {
      color: #0074cc;

      &:hover {
        color: hsl(206, 100%, 52%);
      }
    }

    .none {
      color: #232629;

      &:hover {
        color: #232629;
      }
    }

    .code {
      font-family: ui-monospace, 'Cascadia Mono', 'Segoe UI Mono',
        'Liberation Mono', Menlo, Monaco, Consolas, monospace;
      color: #232629;
      background-color: #e3e2e8;

      &:hover {
        color: #232629;
      }
    }

    .python {
      font-size: 12px;

      background-color: hsl(205, 46%, 92%);
      border-radius: 4px;

      margin: 0 2px 0 0;
      padding: 0 6px 2px 6px;
    }
  }
`;

const CodeBox = styled.div`
  font-family: ui-monospace, 'Cascadia Mono', 'Segoe UI Mono', 'Liberation Mono',
    Menlo, Monaco, Consolas, monospace;
  color: #232629;
  background-color: #f1f2f3;

  margin: 4px 0;
  padding: 8px;

  width: 68%;

  span {
    color: #0074cc;
  }
`;

const AnotherTags = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 0 16px 0;

  font-size: 13px;
  color: #0074cc;

  &:hover {
    color: hsl(206, 100%, 52%);
  }
`;
