import styled from 'styled-components';
import { defaultTheme } from 'themes';

export const Button = styled.div`
  color: ${defaultTheme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  background: ${props =>
    props.active ? defaultTheme.colors.primary : defaultTheme.colors.lightGray};
  height: 35px;
  border-radius: 5px;
  border: none;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  width: ${props => props.width || '100%'};
  margin: ${props => props.margin || '0'};

  :hover {
    background: ${defaultTheme.colors.primary};
    letter-spacing: 1px;
    box-shadow: 5px 40px -10px ${defaultTheme.colors.shadows};
    transition: all 0.4s ease 0s;
  }
`;
