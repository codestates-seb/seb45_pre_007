import React from 'react';
import { styled } from 'styled-components';

const AskRevision = () => {
  return (
    <AskRevisionLayout>
      <AskRevisionLists>
        <AskRevisionText>Rev</AskRevisionText>
        <AskRevisionInputBox>
          <AskRevisionSelect>
            <select>
              <option selected="selected">
                shimdokite - 46 secs ago - some typos removed
              </option>
              <option>shimdokite - 6 mins ago</option>
            </select>
          </AskRevisionSelect>
        </AskRevisionInputBox>
      </AskRevisionLists>
    </AskRevisionLayout>
  );
};

export default AskRevision;

const AskRevisionLayout = styled.div`
  display: flex;
`;

const AskRevisionLists = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AsideBox = styled.div`
  position: relative;
`;

const AskRevisionText = styled.div`
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: #0c0d0e;

  margin: 2px 0 4px 0;
  padding: 0 2px;
`;

const AskRevisionInputBox = styled.div``;

const AskRevisionSelect = styled.div`
  position: relative;
  width: 100%;
  height: 32px;
  margin: 2px 0 15px 0;

  select {
    background-color: hsl(0, 0%, 100%);
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 6px;
    color: hsl(210, 8%, 5%);
    font-size: 13px;

    width: 100%;
    height: 32px;
    padding: 7px;
    appearance: none;
    font-family: inherit;

    outline: 0;
    padding-right: 32px;
    position: relative;
  }

  &::before,
  &::after {
    content: '';
    pointer-events: none;
    position: absolute;
    right: 13px;
    z-index: 25;
    width: 0;
    height: 0;
    border-style: solid;
  }

  &::before {
    border-width: 4px 4px 0 4px;
    border-color: #000 transparent transparent transparent;
    top: 47%;
    transform: translateY(50%);
  }

  &::after {
    border-width: 0 4px 4px 4px;
    border-color: transparent transparent #000 transparent;
    bottom: 47%;
    transform: translateY(-50%);
  }
`;
