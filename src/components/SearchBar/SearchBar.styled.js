import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Header = styled('header')({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  zIndex: '1100',
  display: 'flex',
  alignItems: 'center',
  minHeight: '64px',
  paddingRight: '24px',
  paddingLeft: '24px',
  paddingTop: '12px',
  paddingBottom: '12px',
  color: '#fff',
  backgroundColor: '#3f51b5',
  boxShadow:
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
});
export const SearchForm = styled(Form)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '600px',
  marginLeft: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#fff',
  borderRadius: '3px',
  overflow: 'hidden',
});

export const SearchFormButton = styled('button')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '48px',
  height: '48px',
  border: '0',
  opacity: '0.6',
  transition:
    'font-size 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  outline: 'none',
  fontSize: '20px',

  '&:hover': {
    opacity: '1',
    fontSize: '28px',
  },
});

export const SearchFormInput = styled(Field)({
  display: 'inline-block',
  width: '100%',
  font: 'inherit',
  fontSize: '20px',
  border: 'none',
  outline: 'none',
  paddingLeft: '4px',
  paddingRight: '4px',

  '&::placeholder': {
    font: 'inherit',
    fontSize: '18px',
  },
});

export const ErrorMessageStyled = styled('div')({
  display: 'inline-block',
  fontSize: '12px',
  color: '#955',
});

export const CurrentPageStyled = styled('button')({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '20px',
  color: '#fefefe',
});
