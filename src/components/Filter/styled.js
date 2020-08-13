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
