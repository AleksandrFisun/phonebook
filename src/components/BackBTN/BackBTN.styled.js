import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  width: 60px;
  margin-bottom: 20px;
  text-align: center;
  display: block;
  padding: 10px;
  text-decoration: none;
  border: 1px solid transparent;
  background-color: #3f51b5;
  color: #fff;
  transition: all 250 linear;
  border-radius: 4px;

  &:hover {
    color: #3f51b5;
    background-color: #fff;
    border: 1px solid #3f51b5;
  }
`;
export const NavLinkNotFound = styled(NavLink)`
  width: 200px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  border: 1px solid transparent;
  background-color: #3f51b5;
  color: #fff;
  transition: all 250 linear;
  border-radius: 4px;
  font-size: 20px;
  &:hover {
    color: #3f51b5;
    background-color: #fff;
    border: 1px solid #3f51b5;
  }
`;

export const DivStyled = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextStyled = styled.p`
  font-size: 30px;
  text-align: center;
  margin: 0px;
  color: #75726a;
`;
export const Numberstyled = styled.p`
  font-size: 200px;
  text-align: center;
  margin: 0px;
  color: #75726a;
`;
