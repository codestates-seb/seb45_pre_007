import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEarthAmericas,
  faCircleExclamation,
  faStar,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

export const DivBox = styled.div`
  position: absolute;
  z-index: 999;
  top: 52px;
  left: -48px;

  width: 240px;
  border-right: 1px solid #e1e2e5;
  background-color: #ffffff;
  box-shadow:
    0 1px 2px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  li {
    list-style: none;
  }
  > div {
    padding: 24px 0 0 0;
  }
`;

export const ListChild = styled.li`
  > ol {
    margin-bottom: 12px;
  }

  //PUBLIC
  li:first-child {
    margin: 10px 0px 4px 0px;
    padding: 0px;
    font-size: 11px;
    color: #6a737c;
  }

  //Questions, Tags, Users, Companies
  > ol > li:not(:first-child, :last-child, :nth-last-child(2)) {
    text-align: left;
    font-size: 13px;
    line-height: 26px;
    color: #525960;
    /* padding: 4px 4px 0 14px; */
    height: 30px;
    cursor: pointer;
    :hover {
      color: #0c0d0e;
    }
  }
  > ol > li:nth-last-child(6) {
    /* padding: 4px 4px 0 0px; */
  }

  // Collectives
  li:nth-last-child(2) {
    margin: 16px 0px 10px 0px;
    font-size: 11px;
    cursor: auto;
    color: #6a737c;
  }

  // star icon
  > ol > li:last-child {
    > svg {
      color: #f48424;
    }
  }
`;
export const FontAwesomeDiv = styled.div`
  // ! 아이콘
  display: flex;
  justify-content: space-between;
  margin-right: 15px;

  > svg {
    cursor: pointer;
    :hover {
      color: black;
    }
  }
`;
export const HoverDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
  height: 30px;
  color: ${({ isSelected }) => (isSelected ? '#0c0d0e' : '#000000')};
  background-color: ${({ isSelected }) => (isSelected ? '#f2f2f3' : 'white')};
  border-right: ${({ isSelected }) =>
    isSelected ? '3px solid #f48424' : 'none'};
  font-weight: ${({ isSelected }) => (isSelected ? '500' : 'normal')};
  line-height: ${({ isSelected }) => (isSelected ? 'normal' : 'none')};
  cursor: pointer;
  :hover {
    background-color: #f9f9f9;
    border-right: 3px solid #f48424;
  }
`;

export const NavOl = styled.ol`
  padding: 0;

  > li {
    padding-left: 8px;
  }

  //Home
  > li:first-child {
    font-size: 13px;
    padding-left: 0;
    div {
      cursor: pointer;
    }
  }

  span {
    font-size: 13px;
    cursor: pointer;
    color: #525960;
    padding: 8px 6px 8px 8px;

    &:hover {
      color: #0c0d0e;
    }
  }
  //TEAMS
  > li:nth-child(3) {
    font-size: 11px;
    color: #6a737c;
    margin: 24px 0 4px 0px;
  }

  //Create free Teams
  > li:nth-child(4) {
    svg {
      color: #f48424;
    }
  }

  > li:last-child {
    padding-bottom: 8px;
  }
  // Looking for your Teams?
  button {
    font-size: 13px;
    margin: 8px 8px 0 0;
    padding: 8px;
    border: none;
    background: none;
    outline: none;
    box-shadow: none;
    border-radius: 4px;
    color: #0063bf;
    background-color: #eff8ff;
    cursor: pointer;
    &:hover {
      color: #004585;
    }
  }
`;

export const ActiveHomeStyleDiv = styled.div`
  color: ${({ isSelected }) => (isSelected ? '#0c0d0e' : '#000000')};
  background-color: ${({ isSelected }) => (isSelected ? '#f2f2f3' : 'white')};
  border-right: ${({ isSelected }) =>
    isSelected ? '3px solid #f48424' : 'none'};
  font-weight: ${({ isSelected }) => (isSelected ? '500' : 'normal')};
  line-height: ${({ isSelected }) => (isSelected ? 'normal' : 'none')};
  padding: ${({ isSelected }) => (isSelected ? '6px 0 6px 0' : '8 6 8 8')};

  width: 100%;
  height: 30px;
  cursor: pointer;
`;

const Nav = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate('/questions');
    setHome(false);
    setQuestions(true);
  };
  const navigateFor = () => {
    navigate('/questions');
    setHome(true);
    setQuestions(false);
  };

  const [home, setHome] = useState(true);
  const [questions, setQuestions] = useState(false);

  return (
    <DivBox>
      <div>
        <nav>
          <NavOl>
            <li>
              <HoverDiv isSelected={home} onClick={navigateFor}>
                Home
              </HoverDiv>
            </li>

            <ListChild>
              <ol>
                <li>PUBLIC</li>
                <li>
                  <ActiveHomeStyleDiv
                    isSelected={questions}
                    onClick={navigateTo}
                  >
                    <FontAwesomeIcon icon={faEarthAmericas} />
                    <span>Questions</span>
                  </ActiveHomeStyleDiv>
                </li>
                <li>
                  <div>
                    <span>Tags</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>Users</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>Companies</span>
                  </div>
                </li>
                <li>
                  <FontAwesomeDiv>
                    COLLECTIVES
                    <FontAwesomeIcon icon={faCircleExclamation} size="lg" />
                  </FontAwesomeDiv>
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} size="xs" />
                  <span>Explore Collectives</span>
                </li>
              </ol>
            </ListChild>
            <li>
              <FontAwesomeDiv>
                TEAMS
                <FontAwesomeIcon icon={faCircleExclamation} size="lg" />
              </FontAwesomeDiv>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faBriefcase} size="xs" />
                <span>Create free Teams</span>
              </div>
            </li>
            <li>
              <button>Looking for your Teams?</button>
            </li>
          </NavOl>
        </nav>
      </div>
    </DivBox>
  );
};

export default Nav;
