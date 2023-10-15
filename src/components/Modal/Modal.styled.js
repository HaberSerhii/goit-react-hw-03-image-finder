import styled from 'styled-components';

export const ModalStyled = {
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '100',
  },
  content: {
    top: '50%',
    left: '50%',
    right: '0',
    bottom: '0',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    overflow: 'hidden',
    padding: 0,
    border: 0,
    maxWidth: 'calc(100% - 48px)',
    maxHeight: 'calc(100% - 24px)',
  },
};

export const ModalBoxContent = styled('div')({
  width: '100%',
  height: '100%',

  '& img': {
    width: '100%',
    height: '100%',
  },
});
