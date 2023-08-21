import React, { useState } from 'react';
import { styled } from 'styled-components';
import Collapse from '@kunukn/react-collapse';
import AskAside from '../ask/askAside/AskAside.jsx';

const AskDuplicate = ({ isFocus, setIsFocus }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DuplicateLayout>
      <AskDuplicateLayout>
        <AskDuplicateBox>
          <AskDuplicateList>
            <AskDuplicateItem>
              <AskDuplicateTextBox>
                <AskDuplicateText>
                  Review questions already on Stack Overflow to see if your
                  question is a duplicate.
                </AskDuplicateText>
                <AskDuplicateDescription>
                  Clicking on these questions will open them in a new tab for
                  you to review. Your progress here will be saved so you can
                  come back and continue.
                </AskDuplicateDescription>
              </AskDuplicateTextBox>
              <AskDuplicateDropdownBox>
                <DropdownBoxUp
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setIsFocus(4);
                  }}
                >
                  <DropdownDescription>
                    <div>Do any of these posts answer your question?</div>
                    <div>
                      {isOpen ? (
                        <div className="up">
                          <svg
                            aria-hidden="true"
                            className="fc-light svg-icon iconArrowUpAlt"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                          >
                            <path d="m16.01 10.62-1.4 1.4L9 6.45l-5.59 5.59-1.4-1.41 7-7 7 7Z"></path>
                          </svg>
                        </div>
                      ) : (
                        <div className="down">
                          <svg
                            aria-hidden="true"
                            className="fc-light svg-icon iconArrowDownAlt"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                          >
                            <path d="m16.01 7.43-1.4-1.41L9 11.6 3.42 6l-1.4 1.42 7 7 7-7Z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </DropdownDescription>
                </DropdownBoxUp>
                <Collapse isOpen={isOpen}>
                  <DropdownBoxDown>
                    <DropdownSimilar>
                      <DropdownSimilarText>
                        No duplicate questions found.
                      </DropdownSimilarText>
                    </DropdownSimilar>
                  </DropdownBoxDown>
                  <AskSubmitBox>
                    <AskSubmitButton>Review your question</AskSubmitButton>
                  </AskSubmitBox>
                </Collapse>
              </AskDuplicateDropdownBox>
            </AskDuplicateItem>
          </AskDuplicateList>
        </AskDuplicateBox>
      </AskDuplicateLayout>
      <AsideBox>
        <AskAside isFocus={isFocus} index={4} />
      </AsideBox>
    </DuplicateLayout>
  );
};

export default AskDuplicate;

const DuplicateLayout = styled.div`
  display: flex;
  gap: 16px;
`;

const AskDuplicateLayout = styled.div`
  display: flex;
  align-items: flex-start;
  width: 70%;
  /* margin: 12px 0 0 0; */

  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 4px;
  background-color: #ffffff;
`;

const AsideBox = styled.div`
  position: relative;
`;

const AskDuplicateBox = styled.div`
  width: 100%;
`;

const AskDuplicateList = styled.div`
  padding: 24px;
`;

const AskDuplicateItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const AskDuplicateTextBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

const AskDuplicateText = styled.div`
  font-size: 15px;
  font-weight: 600;

  color: #232629;

  @media (max-width: 810px) {
    font-size: 13px;
  }
`;

const AskDuplicateDescription = styled.div`
  margin: 4px 0 2px 0;
  font-size: 12px;
  color: #3b4045;
`;

const AskDuplicateDropdownBox = styled.div``;

const DropdownBoxUp = styled.div`
  cursor: pointer;
  background-color: hsl(210, 8%, 97.5%);
  border: 1px solid #bbc0c4;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  padding: 12px 16px;
  margin: 16px 0 0 0;

  &:active {
    border: 2px solid black;
    border-radius: 4px;
  }
`;

const DropdownDescription = styled.button`
  display: flex;
  justify-content: space-between;

  width: 100%;

  font-size: 15px;
  color: #6a737c;

  .down,
  .up {
    display: flex;
    align-items: center;

    .svg-icon {
      fill: hsl(210, 8%, 45%);
    }
  }
`;

const DropdownBoxDown = styled.div`
  background-color: #ffffff;
  border-left: 1px solid #bbc0c4;
  border-right: 1px solid #bbc0c4;
  border-bottom: 1px solid #bbc0c4;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const DropdownSimilar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-height: 16px;
  padding: 25px 0;

  font-size: 13px;
  color: #6a737c;

  background-color: #ffffff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const DropdownSimilarText = styled.div``;

const AskSubmitBox = styled.div``;

const AskSubmitButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(206, 100%, 52%);
  border-radius: 6px;

  width: 151px;
  margin: 16px 0 0 0;
  padding: 10.4px;

  &:hover {
    background-color: #0174cd;
  }
`;
