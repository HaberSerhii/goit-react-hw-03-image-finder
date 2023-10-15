import React from 'react';
import { ModalBoxContent } from './Modal.styled';

export const Modal= ({imgData: {imgUrl, alt}}) => {
  return (
    <ModalBoxContent>
      <img src={imgUrl} alt={alt}/>
    </ModalBoxContent>
  );
}