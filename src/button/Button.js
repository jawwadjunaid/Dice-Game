import styled from 'styled-components';

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  border: 1px solid transparent;
  transition: 0.35s background ease-in;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.25s background ease-in;
  }
`;


export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  
  border: 1px solid black;
 
  cursor: pointer;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.25s background ease-in;
  }
`;