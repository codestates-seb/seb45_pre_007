import React from 'react';
import { styled } from 'styled-components';

const Hamburger = ({ isOpen }) => {
  return (
    <div>
      <HamburgerBox trans={isOpen}>
        <HamburgerLine1 trans={isOpen} />
        <HamburgerLine2 trans={isOpen} />
        <HamburgerLine3 trans={isOpen} />
      </HamburgerBox>
    </div>
  );
};

export default Hamburger;

const HamburgerBox = styled.div`
  position: relative;
  width: 15px;
  height: 15px;

  ${(props) =>
    props.trans &&
    `
    padding-top: 5px;
  `}
`;

const HamburgerLine1 = styled.div`
  width: 16px;
  height: 2px;
  background-color: #525960;
  margin: 3px 0;
  transition: all 0.1s ease;

  ${(props) =>
    props.trans &&
    `
      position: absolute;
      transform-origin: center;
      transform: rotate(-45deg);

      width: 16px;
      height: 2px;
  `}
`;

const HamburgerLine2 = styled(HamburgerLine1)`
  ${(props) =>
    props.trans &&
    `
      display:none
  `}
`;

const HamburgerLine3 = styled(HamburgerLine1)`
  ${(props) =>
    props.trans &&
    `
      position: absolute;
      transform-origin: center;
      transform: rotate(45deg);

      width: 16px;
      height: 2px;
  `}
`;
