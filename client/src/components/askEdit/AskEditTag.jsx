import React, { useState } from 'react';
import { styled } from 'styled-components';
import AskEditAside from './askEditAside/AskEditAside.jsx';

const AskEditTag = ({ isFocus, setIsFocus }) => {
  const initialTags = ['javascript', 'mysql', 'react'];
  const [tags, setTags] = useState(initialTags);

  const deleteTag = (index) => {
    const filteredTag = tags.filter((cur, idx) => idx !== index);
    setTags(filteredTag);
  };

  return (
    <AskEditTagLayout>
      <AskEditTagLists>
        <AskEditTagText>Tag</AskEditTagText>
        <AskEditTagInputBox onClick={() => setIsFocus(2)}>
          <AskEditTagList>
            {tags.map((tag, index) => (
              <EditTag key={index}>
                <span className="tag_title">{tag}</span>
                <span
                  className="tag_delete_icon"
                  onClick={() => deleteTag(index)}
                >
                  <svg
                    className="svg-icon iconClearSm pe-none"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"></path>
                  </svg>
                </span>
              </EditTag>
            ))}
          </AskEditTagList>
        </AskEditTagInputBox>
      </AskEditTagLists>
      <AsideBox>
        <AskEditAside isFocus={isFocus} index={2} />
      </AsideBox>
    </AskEditTagLayout>
  );
};

export default AskEditTag;

const AskEditTagLayout = styled.div`
  display: flex;
`;

const AskEditTagLists = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AsideBox = styled.div`
  position: relative;
`;

const AskEditTagText = styled.div`
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: #0c0d0e;

  margin: 2px 0 4px 0;
  padding: 0 2px;
`;

const AskEditTagInputBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  margin: 0 0 15px 0;
  padding: 0px 2px;

  width: 100%;
  height: 32px;
  outline: none;

  border: 1.3px solid #bbc0c4;
  border-radius: 5px;

  &:active {
    border: 1.3px solid #6cbbf7;
    box-shadow: 0px 0px 0px 3px #dcebf8;
  }
`;

// const AskEditTagInput = styled.input.attrs((props) => ({
//   type: 'text',
// }))`
//   border: 1.3px solid #bbc0c4;
//   border-radius: 5px;

//   font-size: 13px;

//   margin: 0 0 15px 0;
//   padding: 0 0 0 9px;

//   width: 100%;
//   height: 32px;
//   outline: none;

//   &:focus {
//     border: 1.3px solid #6cbbf7;
//     box-shadow: 0px 0px 0px 3px #dcebf8;
//   }
//   /*
//     @media (max-width: 640px) {
//       display: none;
//     } */
// `;

const AskEditTagList = styled.ul`
  display: flex;
  vertical-align: middle;
`;

const EditTag = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: auto;
  height: 24px;

  list-style: none;

  margin: 2px;
  padding: 0 4px;

  font-size: 12px;

  border-radius: 4px;

  background: hsl(205, 46%, 92%);
  color: hsl(205, 47%, 42%);
  opacity: 85%;

  > .tag_delete_icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 16px;
    height: 16px;

    margin: 0 0 0 4px;
    padding: 1px;

    .svg-icon {
      fill: hsl(205, 47%, 42%);
    }

    &:hover {
      border: 1px solid white;
      border-radius: 4px;
      background: #fff;
    }
  }
`;
