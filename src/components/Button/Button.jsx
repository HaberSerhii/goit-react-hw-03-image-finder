import React from 'react';
import { ButtonStyled } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonStyled onClick={() => onClick()} type="button">
      Load More
    </ButtonStyled>
  );
}