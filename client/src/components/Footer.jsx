import React from 'react';
import styled from 'styled-components';
import StackOverFlowLogo from '../assert/Logo.png';
//git PR테스트 2
const spaceBetweenItems = '20px'; // 아이템 간격을 상수로 선언

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

// Footer 컴포넌트 정의
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>
        <img src={StackOverFlowLogo} alt="로고 이미지" />
      </FooterLogo>
      <Nav>
        <FooterItemDiv>
          <Title>
            <FooterLink>STACK OVERFLOW</FooterLink>
          </Title>
          <FlexUl>
            <ListItem>
              <FooterLink>Questions</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Help</FooterLink>
            </ListItem>
          </FlexUl>
        </FooterItemDiv>
        <FooterItemDiv>
          <Title>
            <FooterLink>
              <FooterLink>PRODUCTS</FooterLink>
            </FooterLink>
          </Title>
          <FlexUl>
            <ListItem>
              <FooterLink>Teams</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Advertising</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Collectives</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Talent</FooterLink>
            </ListItem>
          </FlexUl>
        </FooterItemDiv>
        <FooterItemDiv>
          <Title>
            <FooterLink>
              <FooterLink>COMPANY</FooterLink>
            </FooterLink>
          </Title>
          <FlexUl>
            <ListItem>
              <FooterLink>About</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Press</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Work Here</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Legal</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Privacy Policy</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Terms of Service</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Contact Us</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Cookie Settings</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Cookie Policy</FooterLink>
            </ListItem>
          </FlexUl>
        </FooterItemDiv>
        <FooterItemDiv>
          <Title>
            <FooterLink>
              <FooterLink>STACK EXCHANGE NETWORK</FooterLink>
            </FooterLink>
          </Title>
          <FlexUl>
            <ListItem>
              <FooterLink>Technology</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Culture & recreation</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Life & arts</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Science</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Professional</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Business</FooterLink>
            </ListItem>
            <ListItem marginTop="10px">
              <FooterLink>API</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink>Data</FooterLink>
            </ListItem>
          </FlexUl>
        </FooterItemDiv>
      </Nav>
      <FlexDiv marginRight="100px">
        <FlexUl direction="row">
          <ListItem marginRight="10px">
            <FooterLink>Blog</FooterLink>
          </ListItem>
          <ListItem marginRight="10px">
            <FooterLink>Facebook</FooterLink>
          </ListItem>
          <ListItem marginRight="10px">
            <FooterLink>Twitter</FooterLink>
          </ListItem>
          <ListItem marginRight="10px">
            <FooterLink>LinkedIn</FooterLink>
          </ListItem>
          <ListItem marginRight="10px">
            <FooterLink>Instagram</FooterLink>
          </ListItem>
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
