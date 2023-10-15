import styled from 'styled-components';

export const ButtonUpStyled = styled('button')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  right: '20px',
  bottom: '20px',
  background: 'transparent',
  fontSize: '32px',
  border: 'none',
  transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',

  '&:hover': {
    transform: 'scale(1.2)',
  },
});
