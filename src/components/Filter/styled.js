import styled from 'styled-components';
import { defaultTheme } from 'themes';

export const FilterWrapper = styled.div`
  grid-area: filter;
  background: ${defaultTheme.colors.background};
  display: flex;
  justify-content: center;
  padding: 0 2vw;
  align-items: center;
`;
