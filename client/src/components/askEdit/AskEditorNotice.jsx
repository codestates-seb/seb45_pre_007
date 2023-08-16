import React from 'react';
import { styled } from 'styled-components';

const AskEditorNotice = () => {
  return (
    <AskEditorNoticeLayout>
      <AskEditorNoticeTextUp>
        Your edit will be placed in a queue until it is peer reviewed
      </AskEditorNoticeTextUp>
      <AskEditorNoticeTextDown>
        We welcome edits that make the post easier to understand and more
        valuable for readers. Because community members review edits, please try
        to make the post substantially better than how you found it, for
        example, by fixing grammar or adding additional resources and hyperlinks
      </AskEditorNoticeTextDown>
    </AskEditorNoticeLayout>
  );
};

export default AskEditorNotice;

const AskEditorNoticeLayout = styled.div`
  padding: 10px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 5px;
  border: 1px dotted #ae0000;
  border-radius: 6px;
  background-color: hsl(47, 87%, 94%);
`;

// const AskEditorNoticeBox = styled.div``;
const AskEditorNoticeTextUp = styled.p`
  color: #3b4045;
  font-size: 13px;
  margin: 0 0 13px 0;
`;

const AskEditorNoticeTextDown = styled(AskEditorNoticeTextUp)`
  margin: 0;
`;
