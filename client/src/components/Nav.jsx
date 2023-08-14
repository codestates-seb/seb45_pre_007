import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEarthAmericas,
  faCircleExclamation,
  faStar,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

export const DivContainer = styled.div`
  width: 200px;
  border-right: 1px solid #e1e2e5;
  li {
    list-style: none;
  }
  > div {
    padding: 4px 0px 4px 8px;
  }
`;

export const ListChild = styled.li`
  > ol {
    margin-bottom: 12px;
    padding: 0px;
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
    padding: 4px 4px 4px 14px;
    height: 30px;

    :hover {
      color: #0c0d0e;
    }
  }
  > ol > li:nth-last-child(6) {
    padding: 4px 4px 4px 0px;
  }

  //Collectives
  li:nth-last-child(2) {
    margin: 16px 0px 10px 0px;
    font-size: 11px;
    cursor: auto;
    color: #6a737c;
  }

  //star icon
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
  height: 30px;

  :hover {
    background-color: #f9f9f9;
    border-right: 3px solid #f48424;
  }
`;

export const NavOl = styled.ol`
  padding: 0;
  //Home
  > li:first-child {
    font-size: 13px;
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

export const ActiveStyle = styled.div`
  color: #0c0d0e;
  background-color: #f2f2f3;
  border-right: 3px solid #f48424;
  font-weight: 500;
  line-height: 26px;
`;

const Nav = () => {
  const navigate = useNavigate();

  // question 페이지 생성 후 경로 변경 예정
  const navigateTo = () => {
    navigate('/QuestionPage');
  };
  const navigateFor = () => {
    navigate('/');
  };

  return (
    <DivContainer>
      <div>
        <nav>
          <NavOl>
            <li>
              <HoverDiv onClick={() => navigateFor}>Home</HoverDiv>
            </li>

            <ListChild>
              <ol>
                <li>PUBLIC</li>
                <li>
                  <div>
                    <FontAwesomeIcon icon={faEarthAmericas} />
                    <span onClick={() => navigateTo}>Questions</span>
                  </div>
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
    </DivContainer>
  );
};

export default Nav;
