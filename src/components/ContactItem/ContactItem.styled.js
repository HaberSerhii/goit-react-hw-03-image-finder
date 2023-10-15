import { styled } from 'styled-components';

export const ContactItemEl = styled.li`
  width: 400px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  :hover {
    fill: red;
  }
`;

export const ContactData = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 30px;
  border: 1px solid green;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const ContactName = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: green;
`;

export const ContactNumber = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
`;

export const ContactDelete = styled.button`
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid red;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const ContactImg = styled.svg`
  width: 17px;
  height: 17px;
`;
