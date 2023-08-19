import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import AskEditAside from './askEditAside/AskEditAside.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setEditTitle } from '../../redux/feature/askEditSlice.js';

const AskEditTitle = ({ isFocus, setIsFocus }) => {
  const questionTitle = useSelector((state) => state.question.title);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(questionTitle);
  }, []);

  const handleChangeTitle = (e) => {
    dispatch(setEditTitle(e.target.value));
    setTitle(e.target.value);
  };

  return (
    <AskEditTitleLayout>
      <AskEditTitleLists>
        <AskEditTitleText>Title</AskEditTitleText>
        <AskEditTitleInputBox>
          <AskEditTitleInput
            onClick={() => setIsFocus(0)}
            onChange={(e) => handleChangeTitle(e)}
            value={title}
          />
        </AskEditTitleInputBox>
      </AskEditTitleLists>
      <AsideBox>
        <AskEditAside isFocus={isFocus} index={0} />
      </AsideBox>
    </AskEditTitleLayout>
  );
};

export default AskEditTitle;

const AskEditTitleLayout = styled.div`
  display: flex;
`;

const AskEditTitleLists = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AsideBox = styled.div`
  position: relative;
`;

const AskEditTitleText = styled.div`
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: #0c0d0e;

  margin: 2px 0 4px 0;
  padding: 0 2px;
`;

const AskEditTitleInputBox = styled.div``;

const AskEditTitleInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  border: 1.3px solid #bbc0c4;
  border-radius: 5px;

  font-size: 13px;

  margin: 0 0 15px 0;
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
