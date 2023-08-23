import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import AskEditAside from './askEditAside/AskEditAside.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setEditTitle } from '../../redux/feature/askEdit/askEditSlice.js';

const AskEditTitle = ({ isFocus, setIsFocus }) => {
  const questionTitle = useSelector((state) => state.question.title);
  const renderTitle = useSelector((state) => state.askEdit.title);
  const dispatch = useDispatch();

  // askEdit => reducer(setEditTitle...)
  useEffect(() => {
    // 의존성 배열에 questionTitle을 넣어줘야 변경될 때마다 인식하여 적용 가능하다
    dispatch(setEditTitle(questionTitle));
  }, [questionTitle]);

  const handleChangeTitle = (e) => {
    dispatch(setEditTitle(e.target.value));
  };

  return (
    <AskEditTitleLayout>
      <AskEditTitleLists>
        <AskEditTitleText>Title</AskEditTitleText>
        <AskEditTitleInputBox>
          <AskEditTitleInput
            onClick={() => setIsFocus(0)}
            onChange={(e) => handleChangeTitle(e)}
            value={renderTitle}
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
