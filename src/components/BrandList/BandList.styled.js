import styled from 'styled-components';

export const Input = styled.input`
  transition: 0.2s;
  margin: 0;
  box-sizing: border-box;
  padding: 14px;
  border: 0;
  outline: none;
  border-radius: 14px;
  background-color: #f7f7fb;
  color: #121417;
  &:focus {
    border: 1px solid #db9c2e;
    box-shadow: 0px 0px 3px 0px #db9c2e;
    border-radius: 4px 4px 0 0;
  }
`;

export const DataList = styled.datalist`
  margin-top: -1px;
  overflow-y: auto;
  box-sizing: border-box;
  border: 1px solid #404449;
  border-radius: 0 0 4px 4px;
  font-family: sans-serif;
  padding: 5px;
  max-height: 10rem;
  border: 1px solid #db9c2e;
  box-shadow: 0px 0px 3px 0px #db9c2e;
`;

export const Option = styled.option`
  padding: 4px;
  color: #e7e7e7;
  margin-bottom: 1px;
  font-size: 18px;
  cursor: pointer;
  display: block;
  &:hover {
    background-color: #3f4348;
  }
`;
