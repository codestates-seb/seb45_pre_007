import React, { useState } from 'react';
import { styled, css } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import useDetectClose from '../../hooks/useDetectClose';
import { useSelector } from 'react-redux';

const Search = () => {
  const { handleOnPress, isSelected, ref } = useDetectClose(false);
  const searchHint1 = [
    {
      title: <Title>[tag]</Title>,
      content: <span>search within a tag</span>,
    },
    {
      title: <Title>user:1234</Title>,
      content: <span>search by author</span>,
    },
    {
      title: <Title>&quot;words here&quot;</Title>,
      content: <span>exact phrase</span>,
    },
    {
      title: <Title>collective:&quot;Name&quot;</Title>,
      content: <span>collective content</span>,
    },
  ];

  const searchHint2 = [
    {
      title: <Title>answer:0</Title>,
      content: <span>unanswered questions</span>,
    },
    {
      title: <Title>score:3</Title>,
      content: <span>posts with a 3+ score</span>,
    },
    {
      title: <Title>is:question</Title>,
      content: <span>type of post</span>,
    },
    {
      title: <Title>isaccepted:yes</Title>,
      content: <span>search within status</span>,
    },
  ];

  const loginData = useSelector((state) => state.login);
  const successedUser = loginData.isSuccessed;
  const navigete = useNavigate();
  console.log(successedUser);

  const handleGoToPage = () => {
    if (successedUser) {
      navigete('/ask');
    } else {
      navigete('/login');
    }
  };

  return (
    <SearchBox successedUser={successedUser}>
      <DropdownContainer>
        <SearchInputBox>
          <SearchArea onClick={handleOnPress} ref={ref}>
            <button
              className="s-topbar--item s-btn s-btn__icon s-btn__muted d-none sm:d-inline-flex js-searchbar-trigger"
              role="menuitem"
              aria-label="Search"
              aria-haspopup="true"
              aria-controls="search"
              title="Click to show search"
            >
              <svg
                aria-hidden="true"
                className="svg-icon iconSearch"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
              </svg>
            </button>
          </SearchArea>
          <SearchInput
            placeholder="Search..."
            successedUser={successedUser}
            isSelected={isSelected}
            onClick={handleOnPress}
            ref={ref}
          />
        </SearchInputBox>
        <Menu isDropped={isSelected} successedUser={successedUser}>
          <SearchTop>
            <Ul>
              {searchHint1.map((current, index) => (
                <Li key={index}>
                  <ListItem>
                    {current.title}
                    {current.content}
                  </ListItem>
                </Li>
              ))}
            </Ul>
            <Ul>
              {searchHint2.map((current, index) => (
                <Li key={index}>
                  <ListItem>
                    {current.title}
                    {current.content}
                  </ListItem>
                </Li>
              ))}
            </Ul>
          </SearchTop>
          <SearchBottom>
            <AskQuestion onClick={handleGoToPage}>Ask a question</AskQuestion>
            <SearchHelp>Search help</SearchHelp>
          </SearchBottom>
        </Menu>
      </DropdownContainer>
    </SearchBox>
  );
};

export default Search;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 656.55px;

  @media (max-width: 640px) {
    max-width: 100%;
  }

  ${({ successedUser }) =>
    successedUser &&
    css`
      max-width: 100%;
    `}
`;

const DropdownContainer = styled.div`
  position: relative;
  /* text-align: center; */
  width: 100%;
  height: 100%;
`;

const Menu = styled.div`
  background: white;
  position: absolute;
  top: 55px;
  left: 70%;
  width: 660px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid hsl(210, 8%, 85%);
  opacity: 0;
  visibility: hidden;

  transform: translate(-70%, -20px);
  z-index: 999;

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: white;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-70%, 0);
    `};

  @media (max-width: 640px) {
    /* left: 95%; */
    width: 100%;
  }

  ${({ successedUser }) =>
    successedUser &&
    css`
      width: 99%;
    `}
`;

const Ul = styled.ul`
  width: 50%;
  & > li {
    /* margin-bottom: 10px; */
  }

  & > li:first-of-type {
    /* margin-top: 10px; */
  }

  list-style-type: none;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const ListItem = styled.div`
  display: flex;
  gap: 5px;
  padding: 5px;
`;

const Title = styled.div`
  font-family: ui-monospace, 'Cascadia Mono', 'Segoe UI Mono', 'Liberation Mono',
    Menlo, Monaco, Consolas, monospace;
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  padding: 2px;
  font-size: 13px;

  color: #0c0d0e;

  p {
    font-size: 12px;
    color: #6a737c;
  }

  span {
    color: #6a737c;
  }

  &:nth-child(4) {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid hsl(210, 8%, 90%);
  }

  &:nth-child(5) {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid hsl(210, 8%, 90%);
  }

  &:last-child {
    border-bottom: 1px solid hsl(210, 8%, 90%);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

// search input
const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 8px;

  @media (max-width: 640px) {
    display: flex;
    justify-content: flex-end;
    padding: 0;
  }
`;

const SearchArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: hsl(210, 8%, 55%);

    position: absolute;
    top: 19px;
    left: 20px;
    cursor: pointer;
    width: 19px;
    height: 19px;

    @media (max-width: 640px) {
      fill: hsl(210, 8%, 35%);
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 3px 0 0 0;
      width: 19px;
      height: 19px;
      margin: 0;
      position: unset;
    }
  }

  @media (max-width: 640px) {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 20%;
    height: 52px;
    margin: 0;
    position: unset;

    &:hover {
      background-color: #e4e6e8;
    }
  }
`;

const SearchInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  border: 1.3px solid #bbc0c4;
  border-radius: 5px;

  margin: 0 10px 0 0;
  padding: 0 0 0 35px;

  width: 100%;
  height: 32px;
  outline: none;

  &:focus {
    border: 1.3px solid #6cbbf7;
    box-shadow: 0px 0px 0px 3px #dcebf8;
  }

  ${({ successedUser }) =>
    successedUser &&
    css`
      margin: 0;
    `}

  @media (max-width: 640px) {
    display: none;
  }
`;

const SearchTop = styled.div`
  display: flex;
  width: 100%;
  padding: 3px 0 0 3px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const SearchBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 12px;
`;

// ask question button
const AskQuestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 11px;
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
  border-radius: 6px;

  width: 85px;
  height: 33px;

  &:hover {
    background-color: #b3d3ea;
  }
`;

// search help
const SearchHelp = styled.div`
  color: #0074cc;
  font-size: 11px;

  &:hover {
    color: hsl(206, 100%, 52%);
  }
`;
