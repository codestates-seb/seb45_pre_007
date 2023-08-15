import React from 'react';
import { styled } from 'styled-components';
import StackOverFlowLogo from '../assert/logo1.png';
import { navData, socialLinks } from '../utils/footerDataUtils.js';

const spaceBetweenItems = '20px';

const FooterContainer = styled.footer`
  display: flex;
  background-color: #232629;
  color: #babfc4;
  margin: 15px 0; /* 바깥 여백을 margin으로 조절 */
  padding: 20px 0;
  flex-grow: 1;
`;

const FooterLogo = styled.div`
  margin-right: 20px;
  margin-left: 50px;
  flex-grow: 2.5;
  text-align: right;

  img {
    width: 33px;
    height: 37px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-grow: 4;
`;

const FooterItemDiv = styled.div`
  margin-right: ${spaceBetweenItems};
  flex-grow: 1;
`;

const Title = styled.h5`
  line-height: 17px;
  margin: 0;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: left;
`;

const FlexUl = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: left;
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  text-align: left;
  font-size: 13px;
  padding: 4px 0;
  margin-right: ${spaceBetweenItems}; // 상수로 지정한 간격 사용
  margin-top: ${(props) => props.marginTop};
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2.5;
  margin-right: ${spaceBetweenItems}; // 상수로 지정한 간격 사용
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    cursor: pointer;
    color: #8e7c63;
  }
`;

const Ptag = styled.p`
  font-size: 11px;
  flex-grow: 1;
  margin-top: 180px;
`;

const Svnrev = styled.span`
  text-decoration: underline;
`;

const NavSection = ({ title, links }) => (
  <FooterItemDiv>
    <Title>
      <FooterLink>{title}</FooterLink>
    </Title>
    <FlexUl>
      {links.map((link) => (
        <ListItem key={link}>
          <FooterLink>{link}</FooterLink>
        </ListItem>
      ))}
    </FlexUl>
  </FooterItemDiv>
);

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>
        <img src={StackOverFlowLogo} alt="로고 이미지" />
      </FooterLogo>
      <Nav>
        {navData.map((section) => (
          <NavSection
            key={section.title}
            title={section.title}
            links={section.links}
          />
        ))}
      </Nav>
      <FlexDiv marginRight="100px">
        <FlexUl direction="row">
          {socialLinks.map((link) => (
            <ListItem key={link} marginRight="10px">
              <FooterLink>{link}</FooterLink>
            </ListItem>
          ))}
        </FlexUl>
        <Ptag>
          Site design / logo © 2023 Stack Exchange Inc user contributions
          <br /> licensed under
          <Svnrev>
            <FooterLink>CC BY-SA</FooterLink>
          </Svnrev>
          . rev 2023.8.10.43574
        </Ptag>
      </FlexDiv>
    </FooterContainer>
  );
};

export default Footer;
