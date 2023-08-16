import React from 'react';
import { styled } from 'styled-components';

const AsideContent = ({ title, content, img }) => {
  return (
    <AskAsideLayout>
      <AskAsideBox>
        <AskAsideUp>
          <AskAsideTitle>{title}</AskAsideTitle>
        </AskAsideUp>
        <AskAsideDown>
          <AskAsideIcon>{img}</AskAsideIcon>
          <AskAsideDownBox>{content}</AskAsideDownBox>
        </AskAsideDown>
      </AskAsideBox>
    </AskAsideLayout>
  );
};

export default AsideContent;

const AskAsideLayout = styled.div`
  width: 100%;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 4px;
  box-shadow:
    0 1px 2px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;

const AskAsideBox = styled.div``;

const AskAsideUp = styled.div`
  padding: 12px;
  border-bottom: 1px solid hsl(210, 8%, 85%);
`;

const AskAsideTitle = styled.div`
  background-color: 1px solid hsl(210, 8%, 97.5%);
`;

const AskAsideDown = styled.div`
  display: flex;
  padding: 16px;
  background-color: #ffffff;
`;

const AskAsideIcon = styled.div``;

const AskAsideDownBox = styled.div`
  width: 100%;
  margin: 0 8px;
`;
