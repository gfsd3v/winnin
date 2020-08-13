import styled from 'styled-components';
import { defaultTheme } from 'themes';

export const HeaderWrapper = styled.div`
  grid-area: header;
  background: ${defaultTheme.colors.lightBlack};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 2em;
  color: ${defaultTheme.colors.white};

  div {
    color: ${defaultTheme.colors.primary};
  }
`;
