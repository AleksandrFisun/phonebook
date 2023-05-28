import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Searchbar = styled.header`
  top: 0;
  left: 0;
  z-index: 1000;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: rgba(0, 0, 0, 0.85);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const LogotypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogotyImg = styled.img`
  width: 60px;
  height: 60px;
`;
export const LogotypeText = styled.span`
  font-family: 'Pacifico', cursive;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: right;
  align-items: center;
  list-style: none;
  padding: 0;
  width: 100%;
`;
export const NavItem = styled.li`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
export const Link = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 23px;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  &.active {
    color: white;
    background-color: orangered;
  }
`;
