import React from 'react';
import { styled, css } from 'styled-components';
import useDetectClose from '../../hooks/useDetectClose';
import { Link } from 'react-router-dom';

const Products = () => {
  const { handleOnPress, isSelected, ref } = useDetectClose(false);
  const productsList = [
    {
      title: <div>Stack Overflow</div>,
      cotent: <p>Public questions & answers</p>,
    },
    {
      title: <div>Stack Overflow for Teams</div>,
      cotent: (
        <>
          <p>Where develpers &</p>
          <p>technologists share private</p>
          <p>knowledge with coworkers</p>
        </>
      ),
    },
    {
      title: <div>Talent</div>,
      cotent: <p>Build your employer brand</p>,
    },
    {
      title: <div>Advertising</div>,
      cotent: (
        <>
          <p>Reach developers &</p>
          <p>technologists worldwide</p>
        </>
      ),
    },
    {
      title: <div>Labs</div>,
      cotent: (
        <>
          <p>The future of collective</p>
          <p>knowledge sharing</p>
        </>
      ),
    },
  ];

  return (
    <ProductsBox>
      <DropdownContainer>
        <ProductsButton
          isSelected={isSelected}
          onClick={handleOnPress}
          ref={ref}
        >
          Products
        </ProductsButton>
        <Menu isDropped={isSelected}>
          <Ul>
            {productsList.map((current, index) => (
              <Li key={index}>
                <ListItem>
                  {current.title}
                  {current.cotent}
                </ListItem>
              </Li>
            ))}
            <Li>About the company</Li>
          </Ul>
        </Menu>
      </DropdownContainer>
    </ProductsBox>
  );
};

export default Products;

const ProductsBox = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownContainer = styled.div`
  position: relative;
  /* text-align: center; */
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: hsl(210, 8%, 35%);
  font-size: 13px;

  /* height: 29px; */

  border-radius: 35px;
  padding: 8px 15px;

  &:hover {
    background-color: #e4e6e8;
  }

  @media (max-width: 640px) {
    /* left: 95%; */
    width: 100%;
  }
`;

const selectedStyles = `
  color: #ffffff;
  background-color: #F48225;

  &:hover {
    color: #e4e6e8;
    background-color: #DA690C;
  }
`;

const ProductsButton = styled(Button)`
  ${({ isSelected }) => isSelected && selectedStyles};
`;

const Menu = styled.div`
  background: white;
  position: absolute;
  top: 38px;
  left: 100%;
  width: 205px;
  /* padding: 10px; */

  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: 1px solid hsl(210, 8%, 85%);
  opacity: 0;
  visibility: hidden;

  transform: translate(-70%, -20px);
  z-index: 999;

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: white;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-70%, 0);
    `};
`;

const Ul = styled.ul`
  & > li {
    /* margin-bottom: 10px; */
  }

  & > li:first-of-type {
    /* margin-top: 10px; */
  }

  list-style-type: none;
`;

const ListItem = styled.div`
  padding: 5px;

  &:hover {
    background-color: #d6d9dc;
    border-radius: 3px;
  }
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px;
  font-size: 13px;

  color: #0c0d0e;

  &:nth-child(4) {
    display: flex;
    justify-content: center;

    padding: 5px;
    border-bottom: 1px solid hsl(210, 8%, 90%);
  }

  &:nth-child(5) {
    display: flex;
    justify-content: center;

    padding: 5px;
    border-bottom: 1px solid hsl(210, 8%, 90%);
  }

  &:last-child {
    color: #6a737c;
    background-color: #f8f9f9;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 10px;

    &:hover {
      color: #0c0d0e;
    }
  }

  p {
    font-size: 12px;
    color: #6a737c;
  }
`;
