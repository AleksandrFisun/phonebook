import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
  min-width: 300px;
  padding: 10px;
background: #fff;
    border: 1px solid #eee;
  border-radius: 4px;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 23px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  padding: 4px 16px;
  border-radius: 4px;
  border: 1px solid orangered;
  color: #2e2d2d;
  background: orangered;
  cursor: pointer;
  transition-duration: 0.2s;
  &:disabled {
    opacity: 0;
  }
  &:hover,
  &:focus,
  &:active {
    background: #2e2d2d;
    color: orangered;
  }
`;
export const NavigateLink = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 23px;
  text-transform: uppercase;
  color: white;
  background-color: orangered;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
`;
