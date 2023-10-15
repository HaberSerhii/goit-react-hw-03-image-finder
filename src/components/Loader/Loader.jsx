import React from 'react';
import { FallingLines } from 'react-loader-spinner';
import { FallingLinesStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <FallingLinesStyled>
      <FallingLines
        color="#4fa94d"
        width="70"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </FallingLinesStyled>
  );
}