import React from 'react';
import { css, styled } from 'styled-components';

const Hamburger = ({ isOpen }) => {
  return (
    <HamburgerBox>
      <HamburgerItem isOpen={isOpen}>
        <HamburgerLine isOpen={isOpen} />
        <HamburgerLine isOpen={isOpen} />
        <HamburgerLine isOpen={isOpen} />
      </HamburgerItem>
      <XBox isOpen={isOpen}>
        <XLine1 isOpen={isOpen} />
        <XLine2 isOpen={isOpen} />
      </XBox>
    </HamburgerBox>
  );
};

export default Hamburger;

const HamburgerBox = styled.div``;

const HamburgerItem = styled.div`
  ${({ isOpen }) =>
    !isOpen &&
    css`
      position: relative;
      height: 35%;
      transition: all 0.4s ease;
    `};
`;

const HamburgerLine = styled.div`
  ${({ isOpen }) =>
    !isOpen &&
    css`
      width: 16px;
      height: 2px;
      background-color: #525960;
      margin: 3px 0;
      transition: all 0.2s ease;
    `};
`;

const XBox = styled.div`
  ${({ isOpen }) =>
    isOpen &&
    css`
      position: relative;
      padding: 13.5px 15px 0 0;
      height: 30px;
      transition: all 0.4s ease;
    `};
`;

const XLine1 = styled.div`
  ${({ isOpen }) =>
    isOpen &&
    css`
      position: absolute;
      width: 16px;
      height: 2px;
      background-color: #525960;
      transition: all 0.2s ease;
      transform-origin: center;
      transform: rotate(-45deg);
    `};
`;

const XLine2 = styled(XLine1)`
  ${({ isOpen }) =>
    isOpen &&
    css`
      position: absolute;
      width: 16px;
      height: 2px;
      background-color: #525960;
      transition: all 0.2s ease;
      transform-origin: center;
      transform: rotate(45deg);
    `};
`;
