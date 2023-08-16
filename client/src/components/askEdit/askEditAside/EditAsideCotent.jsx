import React from 'react';
import { styled } from 'styled-components';

const EditAsideContent = ({ title, content, img }) => {
  return (
    <EditAskAsideLayout>
      <EditAskAsideBox>
        <EditAskAsideUp>
          <EditAskAsideTitle>{title}</EditAskAsideTitle>
        </EditAskAsideUp>
        <EditAskAsideDown>
          <EditAskAsideDownBox>{content}</EditAskAsideDownBox>
        </EditAskAsideDown>
      </EditAskAsideBox>
    </EditAskAsideLayout>
  );
};

export default EditAsideContent;

const EditAskAsideLayout = styled.div`
  width: 100%;
  border: 1px solid hsl(47, 65%, 84%);
  border-radius: 4px;
`;

const EditAskAsideBox = styled.div``;

const EditAskAsideUp = styled.div`
  padding: 12px;
  background-color: hsl(47, 83%, 91%);
  border-bottom: 1px solid hsl(47, 65%, 84%);
`;

const EditAskAsideTitle = styled.div`
  color: hsl(210, 8%, 25%);
  background-color: hsl(47, 83%, 91%);
`;

const EditAskAsideDown = styled.div`
  display: flex;
  padding: 4px 15px;
  background-color: hsl(47, 87%, 94%);
`;

const EditAskAsideDownBox = styled.div`
  width: 100%;
  margin: 0 8px;
`;
