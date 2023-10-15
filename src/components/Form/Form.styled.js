import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const StyledField = styled(Field)`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  transition: border-color 0.3s ease;
  width: 400px;
  &:focus {
    border-color: grey;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  transition: transform 0.3s, font-size 0.3s, color 0.3s;
  pointer-events: none;
  color: red;

  ${StyledField}:focus + &, 
${StyledField}:not(:placeholder-shown) + & {
    transform: translateY(-180%);
    font-size: 16px;
    color: grey;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  margin-top: 10px;

  pointer-events: none;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const ButtonForm = styled.button`
  font-size: 25px;
  padding: 10px 15px;
  background-color: grey;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  width: 320px;

  &:active {
    background-color: lightblue;
  }
`;
