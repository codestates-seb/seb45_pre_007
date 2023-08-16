import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

const DiscardModal = ({ setIsOpen, isOpen }) => {
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <DiscardModalLayout onClick={handleModalClose}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <DiscardModalUp>
              <DiscardModalTitle>Discard question</DiscardModalTitle>
              <DiscardModalBox>
                <DiscardModalCloseBox onClick={handleModal}>
                  <DiscardModalClose>
                    <svg
                      aria-hidden="true"
                      className="svg-icon iconClearSm"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path d="M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41Z"></path>
                    </svg>
                  </DiscardModalClose>
                </DiscardModalCloseBox>
              </DiscardModalBox>
              <DiscardModalText>
                Are you sure you want to discard this question? This cannot be
                undone.
              </DiscardModalText>
            </DiscardModalUp>
            <DiscardModalDown>
              <DiscardQuestionButton>Discard question</DiscardQuestionButton>
              <DiscardModalCancleBox>
                <DiscardModalCancleButton onClick={handleModal}>
                  Cancel
                </DiscardModalCancleButton>
              </DiscardModalCancleBox>
            </DiscardModalDown>
          </ModalView>
        </DiscardModalLayout>
      )}
    </>
  );
};

export default DiscardModal;

const DiscardModalLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: hsla(358, 67%, 6%, 0.5);
`;

const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow:
    0 1px 4px hsla(0, 0%, 0%, 0.09),
    0 3px 8px hsla(0, 0%, 0%, 0.09),
    0 4px 13px hsla(0, 0%, 0%, 0.13);

  max-height: 100%;
  max-width: 600px;
  margin: 0 0 250px 0;
`;

const DiscardModalUp = styled.div`
  width: 100%;
`;

const DiscardModalBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
`;

const DiscardModalTitle = styled.h1`
  font-size: 27px;
  font-weight: normal;
  color: hsl(358, 62%, 47%);
  margin: 0 0 16px 0;
`;

const DiscardModalCloseBox = styled.div`
  position: absolute;
  bottom: 4px;
  left: 410px;
  width: 40px;
  height: 41px;
  margin: 0 0 20px 0;

  &:hover {
    background-color: hsl(210, 8%, 97.5%);
    border: 1px solid hsl(210, 8%, 97.5%);
    border-radius: 6px;
  }
`;

const DiscardModalClose = styled.button`
  width: 14px;
  height: 14px;
  padding: 12px;

  .svg-icon {
    fill: #3b4045;
  }
`;

const DiscardModalText = styled.p`
  font-size: 13px;
  color: #3b4045;
  margin: 0 0 24px 0;
`;

const DiscardModalDown = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const DiscardQuestionButton = styled.button`
  margin: 0 4px 0 0;
  padding: 10.4px;

  border-radius: 6px;
  background-color: hsl(358, 62%, 52%);
  color: #ffffff;

  &:hover {
    background-color: hsl(358, 62%, 47%);
  }
`;

const DiscardModalCancleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DiscardModalCancleButton = styled.button`
  cursor: pointer;
  width: 65px;
  height: 38px;
  padding: 8px;

  &:hover {
    background-color: hsl(210, 8%, 97.5%);
    border: 1px solid hsl(210, 8%, 97.5%);
    border-radius: 6px;
  }
`;
