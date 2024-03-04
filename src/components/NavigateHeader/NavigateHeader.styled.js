import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 24px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: #121417;
  &:hover,
  :focus {
    color: #3470ff;
  }
`;
