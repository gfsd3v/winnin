import styled from 'styled-components';
import DefaultTheme from 'themes/defaultTheme';

export const FilterWrapper = styled.div`
  grid-area: filter;
  background: ${DefaultTheme.colors.background};
  display: flex;
  justify-content: center;
  padding: 0 2vw;
  align-items: center;
`;

export const FilterButton = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  background: ${props => (props.enable ? '#FF5500' : '#666666')};
  height: 50px;
  border-radius: 5px;
  border: none;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  width: 128px;
  margin: 0 20px;

  :hover {
    background: #ff5500;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;
