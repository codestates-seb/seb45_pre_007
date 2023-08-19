import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AskEditAside from './askEditAside/AskEditAside.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setEditContent } from '../../redux/feature/askEditSlice.js';

const AskEditBody = ({ modules, isFocus, setIsFocus }) => {
  const questionContent = useSelector((state) => state.question.content);
  const dispatch = useDispatch();
  const [content, setContent] = useState('');

  //! react-quill 커서 이슈
  useEffect(() => {
    setContent(questionContent);
  }, []);

  const handleChangeContent = (content) => {
    dispatch(setEditContent(content));
    setContent(content);
  };

  return (
    <AskEditBodyLayout>
      <AskEditBodyEditor>
        <AskEditBodyBox>
          <AskEditBodyText>Body</AskEditBodyText>
          <AskEditBodyLists onClick={() => setIsFocus(1)}>
            <ReactQuill
              modules={modules}
              value={content}
              onChange={(content) => handleChangeContent(content)}
            />
          </AskEditBodyLists>
        </AskEditBodyBox>
        <AskEditBodyPreviewBox>
          <AskEditBodyPreview
            // className="ql-editor"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </AskEditBodyPreviewBox>
      </AskEditBodyEditor>
      <AsideBox>
        <AskEditAside isFocus={isFocus} index={1} />
      </AsideBox>
    </AskEditBodyLayout>
  );
};

export default AskEditBody;

const AskEditBodyLayout = styled.div`
  display: flex;
`;

const AskEditBodyEditor = styled.div`
  display: flex;
  flex-direction: column;
`;

const AskEditBodyLists = styled.div`
  display: flex;
  width: 100%;

  .quill {
    width: 100%;
    height: 200px;

    .ql-toolbar {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;

      width: 100%;
      padding: 5px;
    }

    .ql-container {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;

const AskEditBodyBox = styled.div`
  margin: 0 0 16px 0;
`;

const AsideBox = styled.div`
  position: relative;
`;

const AskEditBodyText = styled.div`
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: #0c0d0e;

  margin: 2px 0 8px 0;
  padding: 0 2px;
`;

const AskEditBodyPreviewBox = styled.div`
  width: 100%;
  margin: 20px 0 0 0;
`;

const AskEditBodyPreview = styled.div`
  height: 70%;
  font-size: 15px;
  line-height: 1.5;

  margin: 20px 0 16px;
`;
