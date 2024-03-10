import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';

export const Card = styled.li`
  max-width: 274px;
`;

export const ConteinerImg = styled.div`
  position: relative;
  margin-bottom: 14px;
`;

export const Img = styled.img`
  border-radius: 14px;
  object-fit: cover;
  width: 274px;
  height: 268px;
`;

export const Checkbox = styled.input`
  position: absolute;
  top: 16px;
  right: 16px;
  opacity: 0;
  cursor: pointer;
`;

export const Heart = styled(FiHeart)`
  position: absolute;
  top: 16px;
  right: 16px;
  stroke: #3470ff;
  &:active,
  :hover {
    fill: #3470ff;
    overflow: visible;
  }
`;

export const Conteinerinfo = styled.div`
  display: flex;
  gap: 88px;
  max-height: 24px;
`;

export const ConteinerModel = styled.div`
  display: flex;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const Paragraf = styled.p`
  margin: 0;
`;

export const LIstTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const UlElem = styled.li`
  display: flex;
  gap: 6px;
  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 18px;
    background-color: #9da4bd66;
  }
`;
