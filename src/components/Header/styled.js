import styled from 'styled-components';
import DefaultTheme from 'themes/defaultTheme';

export const HeaderWrapper = styled.div`
  grid-area: header;
  background: ${DefaultTheme.colors.lightPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 2em;
  color: white;

  div {
    color: #ff5500;
  }
`;
