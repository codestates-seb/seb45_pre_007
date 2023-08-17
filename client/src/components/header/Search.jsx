import React from 'react';
import { styled, css } from 'styled-components';
import { Link } from 'react-router-dom';
import useDetectClose from '../../hooks/useDetectClose';
import search from '../../assert/search.png';

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

  return (
    <SearchBox>
      <DropdownContainer>
        <SearchInputBox>
          <SearchArea onClick={handleOnPress} ref={ref}>
            <HeaderSearch />
          </SearchArea>
          <SearchInput
            placeholder="Search..."
            isSelected={isSelected}
            onClick={handleOnPress}
            ref={ref}
          />
        </SearchInputBox>
        <Menu isDropped={isSelected}>
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
            <AskQuestion to="/ask">Ask a question</AskQuestion>
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
  left: 69%;
  width: 642px;

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

  @media (max-width: 640px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const SearchArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    cursor: pointer;
    padding: 15px;
    height: 52px;

    &:hover {
      background-color: #e4e6e8;
    }
  }
`;

const HeaderSearch = styled.img.attrs({
  src: `${search}`,
})`
  position: absolute;
  margin-left: 40px;
  cursor: pointer;
  width: 19px;
  height: 19px;

  @media (max-width: 640px) {
    margin: 0;
    position: unset;
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
const AskQuestion = styled(Link)`
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
