import styled from 'styled-components';
export const ImageGalleryStyled = styled('ul')({
  display: 'grid',
  maxWidth: 'calc(100vw - 48px)',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gridGap: '16px',
  marginTop: '0',
  marginBottom: '20px',
  padding: '0',
  listStyle: 'none',
  marginLeft: 'auto',
  marginRight: 'auto',
});
