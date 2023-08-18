import React from 'react';
import { styled } from 'styled-components';
import AskAside from '../ask/askAside/AskAside.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from '../../redux/feature/askSlice.js';

const AskTitle = ({ isFocus, setIsFocus }) => {
  const title = useSelector((state) => state.ask.title);
  const dispatch = useDispatch();

  return (
    <TitleLayout>
      <AskTitleLayout>
        <AskTitleBox>
          <AskTitleList>
            <AskTitleItem>
              <AskTitleTextBox>
                <AskTitleText>Title</AskTitleText>
                <AskTitleDescription>
                  Be specific and imagine you’re asking a question to another
                  person.
                </AskTitleDescription>
              </AskTitleTextBox>
              <AskTitleInputBox>
                <AskTitleInput
                  placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                  onClick={() => setIsFocus(0)}
                  onChange={(e) => dispatch(setTitle(e.target.value))}
                  value={title}
                />
              </AskTitleInputBox>
            </AskTitleItem>
          </AskTitleList>
        </AskTitleBox>
      </AskTitleLayout>
      <AsideBox>
        <AskAside isFocus={isFocus} index={0} />
      </AsideBox>
    </TitleLayout>
  );
};

export default AskTitle;

const AskTitleLayout = styled.div`
  display: flex;
  align-items: flex-start;
  width: 70%;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 4px;
  background-color: #ffffff;
`;

const TitleLayout = styled.div`
  display: flex;
  gap: 16px;
`;

const AsideBox = styled.div`
  position: relative;
`;

const AskTitleBox = styled.div`
  width: 100%;
`;

const AskTitleList = styled.div`
  padding: 24px;
`;

const AskTitleItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const AskTitleTextBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

const AskTitleText = styled.div`
  font-size: 15px;
  font-weight: 600;

  color: #232629;

  @media (max-width: 810px) {
    font-size: 13px;
  }
`;

const AskTitleDescription = styled.div`
  margin: 4px 0 2px 0;
  font-size: 12px;
  color: #3b4045;
`;

const AskTitleInputBox = styled.div``;

const AskTitleInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  border: 1.3px solid #bbc0c4;
  border-radius: 5px;

  font-size: 13px;

  margin: 4px 0 0 0;
  padding: 0 0 0 9px;

  width: 100%;
  height: 32px;
  outline: none;

  &:focus {
    border: 1.3px solid #6cbbf7;
    box-shadow: 0px 0px 0px 3px #dcebf8;
  }
  /* 
  @media (max-width: 640px) {
    display: none;
  } */
`;
