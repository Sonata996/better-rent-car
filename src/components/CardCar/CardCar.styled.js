import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa6';

export const ConteinerImg = styled.div`
  position: relative;
`;

export const Img = styled.img`
  border-radius: 14px;
  object-fit: cover;
  width: 274px;
  height: 268px;
`;

export const Heart = styled(FaRegHeart)`
  position: absolute;
  top: 16px;
  right: 16px;
  color: #3470ff;
  &:active,
  :hover {
    stroke: black;
    fill: black;
    overflow: visible;
  }
`;
